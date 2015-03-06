var ngHelperAirbrake = angular.module('ngHelperAirbrake', []);

ngHelperAirbrake.service('$airbrake', [ function() {
  var self = this;

  self.setProject = function(project, secret) {
    Airbrake.setProject(project, secret);
  };

  self.pushException = function(exception, cause) {

    Airbrake.push({
      error : {
        message : exception.toString(),
        stack : exception.stack
      }

    });
  };

  // register our standard logger for the airbrake object
  Airbrake.addFilter(function (notice) {
    console.log(notice);
    return true;
  });

}]);
