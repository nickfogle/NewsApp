/* global app:true */

'use strict';

var app = angular.module('angNewsApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ngRoute',
   'ngTouch',
   'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
         templateUrl: 'views/register.html',
         controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

}).constant('FIREBASE_URL', 'https://angularnewsapp.firebaseio.com/');
