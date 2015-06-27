(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module("bandPage", ["firebase", "ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/home.html'
   });

    $stateProvider.state('photos', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/photos.html'
   });

    $stateProvider.state('songs', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/songs.html'
   });

 }]);

// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray','$timeout', function($scope, $firebaseArray, $interval, $timeout){
  var ref = new Firebase("kents-page.firebaseIO.com");

// create a synchronized (psuedo read-only) array
  $scope.shows = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP;
  
  $scope.addSbow = function() { 
    var newShow = {
      text: $scope.newShowText,
      expired: false,
      created: fireTime,
    };

    $scope.shows.$add(newShow); // Push into array
  };
 
  $scope.deleteShow = function(show){
    $scope.shows.$remove(show);
  };

  $scope.expiredShow = function() {
    $scope.shows.forEach(function(show){
      var createdAt = show.created,
      currentTime = new Date().getTime(),
      expiredTime = 604800000;

      if( currentTime - createdAt > expiredTime ){
        console.log("Expire this show " + show);
        show.expired = true;
        $scope.shows.$save(show);
      }
    });
  }

  // $interval( function(){ $scope.expiredShow(); }, 86400000);


}]);



},{}]},{},[1]);