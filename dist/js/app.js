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

 }]);

// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray','$timeout', 'Lightbox', function($scope, $firebaseArray, $interval, $timeout, Lightbox){
  var ref = new Firebase("kents-page.firebaseIO.com");

// create a synchronized (psuedo read-only) array
  // $scope.songs = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP;
  // songCollections = [];

//  $scope.oldiesSongs = [
//  {artist: "ELVIS PRESLEY", songs: ["Suspicious Minds", "Can't Help Falling in Love", "Good Luck Charm", "Stuck On You", "The Wonder of You", "Hound Dog", "All Shook Up", "Don't Be Cruel", "Teddy Bear", "Jail House Rock"], type: "oldies"},
//  {artist: "RICKY NELSON", songs: ["Hello Mary Lou"], type: "oldies"},
//  {artist: "BILL HALEY & HIS COMETS", songs: ["Rock Around the Clock", "See You Later, Alligator", "Shake, Rattle & Roll"], type: "oldies"},
//  {artist: "THE FLAMINGOS", songs: ["I Only Have Eyes for You"], type: "oldies"},
//  {artist: "THE CHAMPS", songs: ["Tequila"], type: "oldies"},
//  {artist: "DEL SHANNON", songs: ["Runaway"], type: "oldies"},
//  {artist: "The Searchers", songs: ["Love Potion #9"], type: "oldies"},
//  {artist: "Sam Cooke", songs: ["Twistin The Night Away"], type: "oldies"},
//  {artist: "Eddie Cochran", songs: ["Summertime Blues"], type: "oldies"},
//  {artist: "Everly Bros.", songs: ["Bye Bye Love", "Wake Up Little Susie"], type: "oldies"},
//  {artist: "Neil Sedaka", songs: ["Breaking Up Is Hard To Do"], type: "oldies"},
//  {artist: "Dion", songs: ["The Wanderer"], type: "oldies"},
//  {artist: "Dion/Bobby Darin/Jerry Lee Lewis Medley", songs: ["Run Around Sue", "Splish Splash", "Great Balls of Fire"], type: "oldies"},
//  {artist: "Joey Dee & The Starlighters", songs: ["Peppermint Twist"], type: "oldies"},
//  {artist: "The Tokens", songs: ["Lion Sleeps Tonight"], type: "oldies"},
//  {artist: "Surf Instrumental Medley", songs: ["Wipe-Out", "Pipeline", "Walk Don't Run"], type: "oldies"},
//  {artist: "Mama's & Papa's", songs: ["California Dreamin"], type: "oldies"},
//  {artist: "4 Seasons Medley #1", songs: ["Sherry", "Big Girls Don't Cry", "Walk Like A Man", "Bye Bye Baby"], type: "oldies"},
//  {artist: "4 Seasons Medley #2", songs: ["Rag Doll", "Dawn", "Let's Hang On"], type: "oldies"},
//  {artist: "Franki Valli", songs: ["Can't Take My Eyes Off Of You"], type: "oldies"},
//  ];

// $scope.classicSongs = [
//  {artist: "Doobie Brothers", songs: ["Black Water", "Jesus Is Just Alright", "Long Train Runnin", "Listen To The Music", "China Groove", "Rockin' Down The Highway"], type: "classic"},
//  {artist: "Lynyrd Skynyrd", songs: ["Sweet Home Alabama", "Gimme Three Steps"], type: "classic"},
//  {artist: "Bachman, Turner OverDrive", songs: ["Takin' Care of Business"], type: "classic"},
//  {artist: "Steely Dan", songs: ["Reelin In The Years"], type: "classic"},
//  {artist: "Hollies", songs: ["Long Cool Woman"], type: "classic"},
//  {artist: "The Eagles", songs: ["Take It Easy", "Lyin' Eyes", "Peaceful Easy Feeling", "Tequila Sunrise"], type: "classic"},
//  {artist: "Three Dog Night", songs: ["One"], type: "classic"},
//  {artist: "Jim Croce", songs: ["Bad, Bad Leroy Brown"], type: "classic"},
//  {artist: "Billy Joel", songs: ["It's Still Rock & Roll", "You May Be Right"], type: "classic"},
//  {artist: "Wild Cherry", songs: ["Play That Funky Music"], type: "classic"},
//  {artist: "Average White Band", songs: ["Pick Up The Pieces"], type: "classic"},
//  {artist: "K.C. & the Sunshine Band", songs: ["Get Down Tonight", "That's The WAy I Like It", "Shake, Shake, Shake"], type: "classic"},
//  {artist: "Santana", songs: ["Evil Ways"], type: "classic"},
//  {artist: "The Commodores", songs: ["Brickhouse"], type: "classic"},
//  {artist: "Bee Gees", songs: ["Stayin Alive", "More Than A Woman", "Night Fever"], type: "classic"},
//  {artist: "Kool & the Gant", songs: ["Celebration"], type: "classic"},
//  {artist: "Cheap Trick", songs: ["I Want You To Want Me"], type: "classic"},
//  {artist: "Bob Seger", songs: ["Old Time Rock & Roll", "Turn The Page"], type: "classic"},
//  {artist: "Eric Clapton", songs: ["Wonderful Tonight", "I Shot The Sheriff"], type: "classic"},
//  {artist: "Led Zeppelin", songs: ["Stairway To Heaven"], type: "classic"},
//  ];

//  $scope.currentSongs = [
//  {artist: "Loverboy", songs: ["Working For The Weekend"], type: "current"},
//  {artist: "Michael Jackson", songs: ["Billie Jean"], type: "current"},
//  {artist: "John Cougar Mellencamp", songs: ["Hurt's So Good"]},
//  {artist: "Journey", songs: ["Don't Stop Believin'", "Open Arms", "Seperate Ways"], type: "current"},
//  {artist: "Bon Jovi", songs: ["Livin' On A Prayer"], type: "current"},
//  {artist: "Bruce Springsteen", songs: ["Dancin' In The Dark"], type: "current"},
//  {artist: "Black Crowes", songs: ["Hard To Handle"], type: "current"},
//  {artist: "Bryan Adams", songs: ["Summer of '69"], type: "current"},
//  {artist: "Georgia Satelites", songs: ["Keep Your Hands To Yourself"], type: "current"},
//  {artist: "Joan Jett", songs: ["I Love Rock & Roll"], type: "current"},
//  {artist: "Def Leppard", songs: ["Pour Some Sugar On Me"], type: "current"},
//  {artist: "Pink Floyd", songs: ["Another Brick In The Wall"], type: "current"},
//  {artist: "Robert Palmer", songs: ["Addicted To Love"], type: "current"},
//  {artist: "Stevie Ray Vaughn", songs: ["Pride & Joy", "House Is Rockin'"]},
//  {artist: "Gary Moore", songs: ["Still Got The Blues"], type: "current"},
//  {artist: "Jonny Lang", songs: ["Rackem' Up"], type: "current"},
//  {artist: "Robert Plant & the Honeydrippers", songs: ["Rockin' At Midnight"], type: "current"},
//  {artist: "Beach Boys", songs: ["Kokomo"], type: "current"},
//  {artist: "Los Lonely Boys", songs: ["How Far Is Heaven"], type: "current"},
//  {artist: "Jason Mraz", songs: ["I'm Yours"], type: "current"},
//  ];

 // [
 // {artist: "ELVIS PRESLEY", songs: ["Suspicious Minds", "Can't Help Falling in Love", "Good Luck Charm", "Stuck On You", "The Wonder of You", "Hound Dog", "All Shook Up", "Don't Be Cruel", "Teddy Bear", "Jail House Rock"], type: "oldies"},
 // {artist: "RICKY NELSON", songs: ["Hello Mary Lou"], type: "oldies"},
 // {artist: "BILL HALEY & HIS COMETS", songs: ["Rock Around the Clock", "See You Later, Alligator", "Shake, Rattle & Roll"], type: "oldies"},
 // {artist: "THE FLAMINGOS", songs: ["I Only Have Eyes for You"], type: "oldies"},
 // {artist: "THE CHAMPS", songs: ["Tequila"], type: "oldies"},
 // {artist: "DEL SHANNON", songs: ["Runaway"], type: "oldies"},
 // {artist: "The Searchers", songs: ["Love Potion #9"], type: "oldies"},
 // {artist: "Sam Cooke", songs: ["Twistin The Night Away"], type: "oldies"},
 // {artist: "Eddie Cochran", songs: ["Summertime Blues"], type: "oldies"},
 // {artist: "Everly Bros.", songs: ["Bye Bye Love", "Wake Up Little Susie"], type: "oldies"},
 // {artist: "Neil Sedaka", songs: ["Breaking Up Is Hard To Do"], type: "oldies"},
 // {artist: "Dion", songs: ["The Wanderer"], type: "oldies"},
 // {artist: "Dion/Bobby Darin/Jerry Lee Lewis Medley", songs: ["Run Around Sue", "Splish Splash", "Great Balls of Fire"], type: "oldies"},
 // {artist: "Joey Dee & The Starlighters", songs: ["Peppermint Twist"], type: "oldies"},
 // {artist: "The Tokens", songs: ["Lion Sleeps Tonight"], type: "oldies"},
 // {artist: "Surf Instrumental Medley", songs: ["Wipe-Out", "Pipeline", "Walk Don't Run"], type: "oldies"},
 // {artist: "Mama's & Papa's", songs: ["California Dreamin"], type: "oldies"},
 // {artist: "4 Seasons Medley #1", songs: ["Sherry", "Big Girls Don't Cry", "Walk Like A Man", "Bye Bye Baby"], type: "oldies"},
 // {artist: "4 Seasons Medley #2", songs: ["Rag Doll", "Dawn", "Let's Hang On"], type: "oldies"},
 // {artist: "Franki Valli", songs: ["Can't Take My Eyes Off Of You"], type: "oldies"},
 // {artist: "Doobie Brothers", songs: ["Black Water", "Jesus Is Just Alright", "Long Train Runnin", "Listen To The Music", "China Groove", "Rockin' Down The Highway"], type: "classic"},
 // {artist: "Lynyrd Skynyrd", songs: ["Sweet Home Alabama", "Gimme Three Steps"], type: "classic"},
 // {artist: "Bachman, Turner OverDrive", songs: ["Takin' Care of Business"], type: "classic"},
 // {artist: "Steely Dan", songs: ["Reelin In The Years"], type: "classic"},
 // {artist: "Hollies", songs: ["Long Cool Woman"], type: "classic"},
 // {artist: "The Eagles", songs: ["Take It Easy", "Lyin' Eyes", "Peaceful Easy Feeling", "Tequila Sunrise"], type: "classic"},
 // {artist: "Three Dog Night", songs: ["One"], type: "classic"},
 // {artist: "Jim Croce", songs: ["Bad, Bad Leroy Brown"], type: "classic"},
 // {artist: "Billy Joel", songs: ["It's Still Rock & Roll", "You May Be Right"], type: "classic"},
 // {artist: "Wild Cherry", songs: ["Play That Funky Music"], type: "classic"},
 // {artist: "Average White Band", songs: ["Pick Up The Pieces"], type: "classic"},
 // {artist: "K.C. & the Sunshine Band", songs: ["Get Down Tonight", "That's The WAy I Like It", "Shake, Shake, Shake"], type: "classic"},
 // {artist: "Santana", songs: ["Evil Ways"], type: "classic"},
 // {artist: "The Commodores", songs: ["Brickhouse"], type: "classic"},
 // {artist: "Bee Gees", songs: ["Stayin Alive", "More Than A Woman", "Night Fever"], type: "classic"},
 // {artist: "Kool & the Gant", songs: ["Celebration"], type: "classic"},
 // {artist: "Cheap Trick", songs: ["I Want You To Want Me"], type: "classic"},
 // {artist: "Bob Seger", songs: ["Old Time Rock & Roll", "Turn The Page"], type: "classic"},
 // {artist: "Eric Clapton", songs: ["Wonderful Tonight", "I Shot The Sheriff"], type: "classic"},
 // {artist: "Led Zeppelin", songs: ["Stairway To Heaven"], type: "classic"},
 // {artist: "Loverboy", songs: ["Working For The Weekend"], type: "current"},
 // {artist: "Michael Jackson", songs: ["Billie Jean"], type: "current"},
 // {artist: "John Cougar Mellencamp", songs: ["Hurt's So Good"]},
 // {artist: "Journey", songs: ["Don't Stop Believin'", "Open Arms", "Seperate Ways"], type: "current"},
 // {artist: "Bon Jovi", songs: ["Livin' On A Prayer"], type: "current"},
 // {artist: "Bruce Springsteen", songs: ["Dancin' In The Dark"], type: "current"},
 // {artist: "Black Crowes", songs: ["Hard To Handle"], type: "current"},
 // {artist: "Bryan Adams", songs: ["Summer of '69"], type: "current"},
 // {artist: "Georgia Satelites", songs: ["Keep Your Hands To Yourself"], type: "current"},
 // {artist: "Joan Jett", songs: ["I Love Rock & Roll"], type: "current"},
 // {artist: "Def Leppard", songs: ["Pour Some Sugar On Me"], type: "current"},
 // {artist: "Pink Floyd", songs: ["Another Brick In The Wall"], type: "current"},
 // {artist: "Robert Palmer", songs: ["Addicted To Love"], type: "current"},
 // {artist: "Stevie Ray Vaughn", songs: ["Pride & Joy", "House Is Rockin'"]},
 // {artist: "Gary Moore", songs: ["Still Got The Blues"], type: "current"},
 // {artist: "Jonny Lang", songs: ["Rackem' Up"], type: "current"},
 // {artist: "Robert Plant & the Honeydrippers", songs: ["Rockin' At Midnight"], type: "current"},
 // {artist: "Beach Boys", songs: ["Kokomo"], type: "current"},
 // {artist: "Los Lonely Boys", songs: ["How Far Is Heaven"], type: "current"},
 // {artist: "Jason Mraz", songs: ["I'm Yours"], type: "current"},
 // ];

 // songCollections.push($scope.oldiesSongs);

 // $scope.songs.$add(songCollections);



// songCollections.push(sixtiesSongs);



// $scope.formattedShows = function(show) {
//   return show.date + ":" + show.venue;
// }
  // $scope.songs.$add(songCollections);
  
  // $interval( function(){ $scope.expiredShow(); }, 86400000);

 
//     document.getElementById("navigation").onscroll = function() {

// }

}]);

app.controller('Photo.controller', ['$scope', '$firebaseArray', 'Lightbox', function($scope, $firebaseArray, Lightbox){
  var ref = new Firebase("kents-page.firebaseIO.com");

  $scope.images = [
      {
        'small': "/images/kent_1.jpg",
        'url': "/images/kent_1.jpg",
        'desc': "photo",
        'caption': "Hitz"
      },
      {
        'small': "/images/kent_2.jpg",
        'url': "/images/kent_2.jpg",
        'desc': "photo",
        'caption': "Hitz"
      },
      {
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
        'desc': "photo",
        'caption': "Kent"
      },
      {
        'small': "images/kent_elvis.jpg",
        'url': "images/kent_elvis.jpg",
        'desc': "photo",
        'caption': "Elvis Presley"
      },
      {
        'small': "/images/gangbusters.jpg",
        'url': "/images/gangbusters.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/kent_rick.jpg",
        'url': "/images/kent_rick.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/hitz_girls.jpg",
        'url': "images/hitz_girls.jpg",
        'desc': "photo",
        'caption': "Hitz Girls of the 60's"
      },
      {
        'small': "images/hitz_1.jpg",
        'url': "images/hitz_1.jpg",
        'desc': "photo",
        'caption': "Hitz Stars"
      },
      {
        'small': "images/hitz_costume.jpg",
        'url': "images/hitz_costume.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_elvis.jpg",
        'url': "images/kent_elvis.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },

      {
        'small': "/images/kent_1.jpg",
        'url': "/images/kent_1.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/kent_2.jpg",
        'url': "/images/kent_2.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/elvis.jpg",
        'url': "images/elvis.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_elvis.jpg",
        'url': "images/kent_elvis.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/kent_applebees.jpg",
        'url': "/images/kent_applebees.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/kent_bar.jpg",
        'url': "/images/kent_bar.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_bride.jpg",
        'url': "images/kent_bride.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_fan.jpg",
        'url': "images/kent_fan.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_outdoors.jpg",
        'url': "images/kent_outdoors.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_outdoors2.jpg",
        'url': "images/kent_outdoors2.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
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

// create a synchronized (psuedo read-only) array
  $scope.songs = $firebaseArray(ref2);

  $scope.formattedSongs = function(song) {
  return song.artist.toUpperCase() + ": " + song.songs.join(", ");
};

  // var songsArray = [{}]

  $scope.addSong = function() { // add song to list
    var newSong = {
      type: $scope.newTypeText,
      artist: $scope.newArtistText,
      songs: $scope.newSongText
    };

    $scope.songs.$add(newSong); // Push into array
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
      time: $scope.newShowTime,
      venue: $scope.newShowVenue,
      expired: false,
      created: fireTime,
    };

    $scope.shows.$add(newShow); // Push into array
    $scope.newShowDate = "";
    $scope.newShowTime = "";
    $scope.newShowVenue = "";
  };
 
  $scope.deleteShow = function(show){
    $scope.shows.$remove(show);
  };

  $scope.expiredShow = function() {
    console.log("Called expiredShow!");
    $scope.shows.forEach(function(show){
      var createdAt = show.created,
      currentTime = new Date().getTime(),
      expiredTime = 604800000;

      if( currentTime - createdAt > expiredTime ){
        console.log("Expire this show " + show);
        show.expired = true;
        $scope.shows.$save(show);
      }
      else {
      console.log("Did not expire " + show);  
      }
    });
  }

  $interval( function(){ $scope.expiredShow(); }, 86400000);

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