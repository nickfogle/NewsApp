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
      .otherwise({
        redirectTo: '/'
      });

}).constant('FIREBASE_URL', 'https://angularnewsapp.firebaseio.com/');
