var ngHelperAirbrake = angular.module('ngHelperAirbrake', []);

ngHelperAirbrake.service('$airbrake', [ function() {
  var self = this;

  var _initilized = false;

  self.setProject = function(project, secret, environment) {
    Airbrake.setProject(project, secret);

    if (environment && environment !== undefined) {
      Airbrake.setEnvironmentName(environment)
    }

    _initilized = true;
  };

  self.setHost = function(hostname) {
    Airbrake.setHost(hostname);
  };

  self.pushException = function(exception, cause) {

    // check if we are allowed to push
    if (!_initilized) {
      return;
    }

    // push
    Airbrake.push({
      error : {
        message : exception.toString(),
        stack : exception.stack
      }

    });
  };

  self.isActive = function() {
    return _initilized;
  };

  // register our standard logger for the airbrake object
  Airbrake.addFilter(function (notice) {
    console.log(notice);
    return true;
  });

}]);
