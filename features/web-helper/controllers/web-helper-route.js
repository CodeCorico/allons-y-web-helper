'use strict';

if (!process.env.WEB_HELPER || process.env.WEB_HELPER != 'true') {
  module.exports = null;

  return;
}

var TEMPLATES = {
      enter: ['$BodyDataService', '$Layout', (function($BodyDataService, $Layout) {
        document.title = '{{title}} - ' + $BodyDataService.data('web').brand;

        var requires = '{{requires}}'.split(';');

        function _requireNext(i) {
          i = i || 0;

          if (i >= requires.length) {
            return;
          }

          $($Layout.el).find('[name="' + requires[i] + '"]').attr('no-script', 'true');

          $Layout.require(requires[i]).then(function() {
            _requireNext(++i);
          });
        }

        setTimeout(function() {
          _requireNext();
        });
      }).toString()],
      exit: ['$Layout', '$next', (function($Layout, $next) {
        var requires = '{{requires}}'.split(';');

        function _requireNext(i) {
          i = i || 0;

          if (i >= requires.length) {
            return $next();
          }

          var child = $Layout.findChild('name', requires[i]);
          if (!child) {
            return _requireNext(++i);
          }

          child.teardown().then(function() {
            _requireNext(++i);
          });
        }

        _requireNext();
      }).toString()]
    },

    path = require('path'),
    fs = require('fs-extra'),
    $allonsy = DependencyInjection.injector.controller.get('$allonsy'),
    files = $allonsy.findInFeaturesSync('views/*-helper.json'),
    routes = [];

files.forEach(function(file) {
  var json = fs.readJsonSync(path.resolve(file));

  if (!json || !json.routes) {
    return;
  }

  Object.keys(json.routes).forEach(function(url) {
    var title = json.routes[url].title || '',
        requires = json.routes[url].requires || [],
        route = {
          url: url
        };

    requires = requires.join(';');

    ['enter', 'exit'].forEach(function(type) {
      route[type] = TEMPLATES[type].map(function(inject, i) {
        if (i < TEMPLATES.enter.length - 1) {
          return inject;
        }

        return inject
          .toString()
          .replace(/{{title}}/g, title)
          .replace(/{{requires}}/g, requires);
      });
    });

    routes.push(route);
  });
});

module.exports = routes;
