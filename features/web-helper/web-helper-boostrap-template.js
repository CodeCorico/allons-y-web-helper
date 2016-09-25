(function() {
  'use strict';

  var COMPONENTS_AVOIDED = '{{components}}'.split(';'),
      FILES_TO_REQUIRE = '{{files}}'.split(';'),

      Ractive = window.Ractive,
      _controllerInjection = Ractive.controllerInjection;

  Ractive.controllerInjection = function(name, controller, isHelper) {
    if (COMPONENTS_AVOIDED.indexOf(name) > -1 && !isHelper) {
      return;
    }

    _controllerInjection.apply(Ractive, arguments);
  };

  FILES_TO_REQUIRE.forEach(function(file) {
    Ractive.require(file);
  });

})();
