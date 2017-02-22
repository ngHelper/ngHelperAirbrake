var ngHelperAirbrake = angular.module('ngHelperAirbrake', []);

ngHelperAirbrake.provider('$airbrake', [function () {

    var self = this;
    var _initilized = false;
    var Airbrake;

    self.setProject = function (project, secret, environment) {
        Airbrake = new airbrakeJs.Client({projectId: project, projectKey: secret});

        if (Airbrake && environment && environment !== undefined) {
            Airbrake.addFilter(function (notice) {
                notice.context.environment = environment;
                return notice;
            });
        }
        _initilized = true;
    };

    self.setHost = function (hostname) {
        if (Airbrake) {
            Airbrake.setHost(hostname);
        }
    };


    // register our standard logger for the airbrake object
    if (Airbrake) {
        Airbrake.addFilter(function (notice) {
            return true;
        });
    }

    self.$get = function () {
        return {
            pushException: function (exception, cause) {
                // check if we are allowed to push
                if (!_initilized) {
                    return;
                }

                // push
                if (Airbrake) {
                    Airbrake.notify({
                        error : {
                            message : exception.toString(),
                            stack : exception.stack
                        }
                    });
                }
            },

            isActive: function () {
                return _initilized;
            },

            setCustomContext: function (context) {
                if (Airbrake) {
                    Airbrake.addFilter(function (notice) {
                        notice.context.custom = context;
                        return notice;
                    });
                }

            }
        };
    };

}]);
