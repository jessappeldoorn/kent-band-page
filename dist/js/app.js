(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var app = angular.module("bandPage", ["firebase", "ui.router", "bootstrapLightbox"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Login.controller',
     templateUrl: '/templates/home.html'
   });

    $stateProvider.state('photos', {
     url: '/photos',
     controller: 'Photo.controller',
     templateUrl: '/templates/photos.html'
   });

    $stateProvider.state('songs', {
     url: '/songs',
     controller: 'Login.controller',
     templateUrl: '/templates/songs.html'
   });

    $stateProvider.state('about', {
     url: '/about',
     controller: 'Main.controller',
     templateUrl: '/templates/about.html'
   });

    $stateProvider.state('login', {
     url: '/login',
     controller: 'Login.controller',
     templateUrl: '/templates/login.html'
   });

    $stateProvider.state('listen', {
     url: '/listen',
     controller: 'Main.controller',
     templateUrl: '/templates/listen.html'
   });

 }]);



// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $interval){
  var ref = new Firebase("kents-page.firebaseIO.com");

}]);

app.controller('Photo.controller', ['$scope', '$firebaseArray', 'Lightbox', function($scope, $firebaseArray, Lightbox){
  var ref = new Firebase("kents-page.firebaseIO.com");

  $scope.images = [
      {
        'small': "/images/kent_1_thumb.jpg",
        'url': "/images/kent_1.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/kent_2_thumb.jpg",
        'url': "/images/kent_2.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_3_thumb.jpg",
        'url': "images/kent_3.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_elvis_thumb.jpg",
        'url': "images/kent_elvis.jpg",
        'desc': "photo",
        'caption': "Elvis Presley"
      },
      {
        'small': "/images/gangbusters_thumb.jpg",
        'url': "/images/gangbusters.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/kent_rick_thumb.jpg",
        'url': "/images/kent_rick.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/hitz_girls_thumb.jpg",
        'url': "images/hitz_girls.jpg",
        'desc': "photo",
        'caption': "Hitz Girls of the 60's"
      },
      {
        'small': "images/hitz_1_thumb.jpg",
        'url': "images/hitz_1.jpg",
        'desc': "photo",
        'caption': "Hitz Stars"
      },
      {
        'small': "images/hitz_costume_thumb.jpg",
        'url': "images/hitz_costume.jpg",
        'desc': "photo",
        'caption': "Hitz - Paul Revere and the Raiders"
      },
      {
        'small': "images/elvis_thumb.jpg",
        'url': "images/elvis.jpg",
        'desc': "photo",
        'caption': "Elvis Presley"
      },
      {
        'small': "/images/hitz_costume2_thumb.jpg",
        'url': "/images/hitz_costume2.jpg",
        'desc': "photo",
        'caption': "Hitz presents the Monkeys"
      },
      {
        'small': "/images/hitz_costume4_thumb.jpg",
        'url': "/images/hitz_costume4.jpg",
        'desc': "photo",
        'caption': "Hitz presents the Beatles"
      },
      {
        'small': "images/hitz_costume5_thumb.jpg",
        'url': "images/hitz_costume5.jpg",
        'desc': "photo",
        'caption': "Hitz present the Beach Boys"
      },
      {
        'small': "/images/kent_wedding_thumb.jpg",
        'url': "/images/kent_wedding_yellow.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/kent_applebees_thumb.jpg",
        'url': "/images/kent_applebees.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/kent_bar_thumb.jpg",
        'url': "/images/kent_bar.jpg",
        'desc': "photo",
        'caption': "Applebees"
      },
      {
        'small': "images/kent_bride_thumb.jpg",
        'url': "images/kent_bride.jpg",
        'desc': "photo",
        'caption': "Applebees"
      },
      {
        'small': "images/kent_fan_thumb.jpg",
        'url': "images/kent_fan.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_outdoors_thumb.jpg",
        'url': "images/kent_outdoors.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_outdoors2_thumb.jpg",
        'url': "images/kent_outdoors2.jpg",
        'desc': "photo",
        'caption': ""
      },
    ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
}]);

// login controller
app.controller('Login.controller', ['$scope', '$firebaseArray', '$interval', '$timeout', function($scope, $firebaseArray, $interval, $timeout){
  var ref = new Firebase("kents-page.firebaseIO.com/Shows");
  var ref2 = new Firebase("kents-page.firebaseIO.com/Songs");
  var ref3 = new Firebase("kents-page.firebaseIO.com/Reviews");

// create a synchronized (psuedo read-only) array
  $scope.songs = $firebaseArray(ref2);

  $scope.formattedSongs = function(song) {
  return song.songs.join(", ");
};

  $scope.addSong = function() { // add song to list
    var newSong = {
      type: $scope.newTypeText,
      artist: $scope.newArtistText,
      songs: [$scope.newSongText]
    };

    $scope.songs.$add(newSong); // Push into Firebase array
    $scope.newSongText = "";
    $scope.newArtistText = "";
    $scope.newTypeText = "";
  };

  $scope.deleteSong = function(song){
    $scope.songs.$remove(song);
  };

// create a synchronized (psuedo read-only) array
  $scope.shows = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP;

  $scope.addShow = function() { // add show to list
    var newShow = {
      date: $scope.newShowDate,
      city: $scope.newShowCity,
      venue: $scope.newShowVenue,
      expired: false,
    };

    $scope.shows.$add(newShow); // Push into Firebase array
    $scope.newShowDate = "";
    $scope.newShowCity = "";
    $scope.newShowVenue = "";
  };
 
  $scope.deleteShow = function(show){
    $scope.shows.$remove(show);
  };

  $scope.expiredShow = function() {
    $scope.shows.forEach(function(show){
      var showDate = show.date,
      currentDate = new Date().getDate();

      if(currentTime - createdAt){
        show.expired = true;
        $scope.shows.$save(show);
      }
    });
  }
  $interval( function(){ $scope.expiredShow(); }, 86400000);

  $scope.expireShow = function(show) {
    show.expired = true;
    $scope.shows.$save(show);
  };

// create a synchronized (psuedo read-only) array
  $scope.reviews = $firebaseArray(ref3);

  $scope.addReview = function() { 
    var newReview = {
      venue: $scope.newVenueText,
      person: $scope.newPersonText,
      review: $scope.newReviewText
    };

    $scope.reviews.$add(newReview); 
    $scope.newVenueText = "";
    $scope.newPersonText = "";
    $scope.newReviewText = "";
  };
 
}]);

app.directive("songList", function() {
  return {
      restrict: 'AE',
      template: '<div class="panel-body"><ul><li ng-repeat="song in oldiesSongs"> {{ formattedSongs({song : songObject}) }} </li></ul></div>',
      replace: true,
      scope: {
        songObject: '=',
        formattedSongsFunction: '&'
      }
  }
});



},{}]},{},[1]);