(function() {
  'use strict';

  window.Ractive.controllerInjection('{{component}}', [
    '$component', '$data', '$done',
  function groupsLayoutController(
    $component, $data, $done
  ) {
    var Component = $component({
      data: {{data}}
    });

    Component.require().then($done);
  }], true);

})();
