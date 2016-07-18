module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns
    basePath: '.',

    // frameworks to use
    frameworks: ['jasmine', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      '../app/bower_components/angular/angular.js',
      '../app/bower_components/jquery/dist/jquery.js',
      '../app/bower_components/angular-mocks/angular-mocks.js',
      '../app/bower_components/angular-route/angular-route.js',
      '../app/bower_components/angular-cookies/angular-cookies.js',
      './unit/main.js',
      '../app/js/**/*.js',
      './unit/*.js'
    ],

    exclude: [
      '../app/js/main.js',
      '../app/js/config.js',
    ],

    // test result reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: false
  });
};