'use strict';

/**
 * @ngdoc overview
 * @name memoryGameApp
 * @description
 * # memoryGameApp
 *
 * Main module of the application.
 */
angular
  .module('memgameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
  });
