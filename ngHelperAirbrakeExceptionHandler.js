'use strict';

var ngHelperAirbrake = angular.module('ngHelperAirbrake');

// Override the default exception handler
ngHelperAirbrake.factory('$exceptionHandler', ['$injector', '$airbrake', '$log', function ($injector, $airbrake, $log) {

    function log(exception, cause) {

      if ($airbrake.isActive()) {
        $airbrake.pushException(exception, cause);
      } else {
        $log.error(exception);
      }
    }

    return( log );
  }]
);
