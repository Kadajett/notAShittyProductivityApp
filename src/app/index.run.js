(function() {
  'use strict';

  angular
    .module('notAshittyProductivityApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
