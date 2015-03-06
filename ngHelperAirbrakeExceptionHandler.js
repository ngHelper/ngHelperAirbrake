'use strict';

var ngHelperAirbrake = angular.module('ngHelperAirbrake');

// Override the default exception handler
ngHelperAirbrake.factory('$exceptionHandler', ['$injector', '$airbrake', function ($injector, $airbrake) {

    function log(exception, cause) {
      $airbrake.pushException(exception,cause);
    }

    return( log );
  }]
);
