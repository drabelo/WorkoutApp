// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'backand', 'app.controllers', 'app.directives','app.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function(BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
  BackandProvider.setAppName('ionicstarterdailton');
  BackandProvider.setSignUpToken('6a9e9c5e-c717-4f43-9e81-43388cd6c8ab');
  BackandProvider.setAnonymousToken('d287060f-3141-4b01-b8df-06d2821b01b1');

  $stateProvider

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.workoutA', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/workoutA.html',
        controller: 'workoutACtrl'
      }
    }
  })

  .state('menu.workoutB', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/workoutB.html',
        controller: 'workoutBCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
