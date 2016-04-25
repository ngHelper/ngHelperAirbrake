'use strict';

var ngHelperAirbrake = angular.module('ngHelperAirbrake');

// Override the default exception handler
ngHelperAirbrake.decorator('$exceptionHandler', ['$delegate', '$airbrake', function ($delegate, $airbrake) {

      if ($airbrake.isActive()) {
      	return function logToAirbrake (exception, cause) {
        	$airbrake.pushException(exception, cause);
        };
      } else {
        return $delegate;
      }
}]);
