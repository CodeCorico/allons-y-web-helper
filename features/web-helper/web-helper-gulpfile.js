'use strict';

module.exports = function routes($allonsy, $gulp) {
  if (!process.env.WEB_HELPER || process.env.WEB_HELPER != 'true') {
    return;
  }

  var pattern = 'views/*-helper.json',
      patterns = $allonsy.globPatterns(pattern);

  $gulp.task('web-helper', function(done) {
    var path = require('path'),
        fs = require('fs-extra'),
        templates = {
          bootstrap: fs.readFileSync(path.resolve(__dirname, 'web-helper-boostrap-template.js'), 'utf-8'),
          controller: fs.readFileSync(path.resolve(__dirname, 'web-helper-controller-template.js'), 'utf-8')
        },
        components = [],
        bootstrapFileName = 'public/web-helper/web-helper-bootstrap.js',
        files = $allonsy.findInFeaturesSync(pattern),
        compactFiles = [];

    fs.ensureDirSync('public/web-helper');

    files.forEach(function(file) {
      var json = fs.readJsonSync(path.resolve(file));

      if (!json || !json.components) {
        return;
      }

      Object.keys(json.components).forEach(function(component) {
        components.push(component);

        var fileName = 'public/web-helper/web-helper-component-' + component + '.js';

        fs.writeFileSync(
          fileName,
          templates.controller
            .replace(/{{component}}/g, component)
            .replace(/{{data}}/g, JSON.stringify(json.components[component] || {}))
        );

        compactFiles.push(fileName);
      });
    });

    fs.writeFileSync(
      bootstrapFileName,
      templates.bootstrap
        .replace(/{{components}}/g, components.join(';'))
        .replace(/{{files}}/g, compactFiles.join(';'))
    );

    done();
  });

  return {
    tasks: 'web-helper',
    watch: patterns
  };
};
