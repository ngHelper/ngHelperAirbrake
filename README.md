# ngHelperAirbrake

Integrate AirBrake into an angular.js application

### Install ng-helper-airbrake
```
bower install ng-helper-airbrake --save
```
Ensure that the dependency entry comes directly after the angular dependency. Are you not sure? Check & modify the bower.json.

### Include the angular module
```javascript
angular.module('appApp', [
    'ngHelperAirbrake'
]);
```
### Register the project id
Airbrake requires a project id and secret. This can be configured via the application config function as follows:

```javascript
.config([ '$airbrakeProvider', function($airbrakeProvider) {
    // configure airbrake
    $airbrakeProvider.setProject('<<PROJECTID>>', '<<PROJECTSECRET>>', '<<EnvironmentOptional>>');

    // configure host (optional step for self hosted environments)
    $airbrakeProvider.setHost('https://yourdomain.com');
}]);
```

The Airbrake plugin is not available as long the setProject method is not called. Only when this method is called exception
will be catched from the subsystem.

### Add custom information to the error context 

```javascript
.run([ '$airbrake', function($airbrake) {
    // add custom context
    $airbrake.setCustomContext({custom1: "context1", custom2: "context2" });
}]);
```
You can add optional custom information to the error context via the setCustomContext function.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

## Contributors

* [CSS3 activity indicators](https://github.com/lukehaas/css-loaders)

## License

[MIT License](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE)