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

    $stateProvider.state('about', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/about.html'
   });

 }]);

// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray','$timeout', function($scope, $firebaseArray, $interval, $timeout){
  var ref = new Firebase("kents-page.firebaseIO.com");

// create a synchronized (psuedo read-only) array
  $scope.songs = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP;

  // function Song(artist, song)
  // function Song(artist, song) {
  //   this.artist = artist;
  //   this.song = song;
  //   this.listSongs = function() {
  //     for 
  //     this.artist + this.song[i]
  //   }
  // }

var songCollections = []
 // sixtiesSongs = [];

 // var elvis = {
 //  artist: "Elvis Presley",
 //  songs: ['Suspicious Minds', "Can't Help Falling in Love"]
 // }

 
 // sixtiesSongs.push(elvis)

 $scope.oldiesSongs = [
 {artist: "ELVIS PRESLEY", songs: ["Suspicious Minds", "Can't Help Falling in Love", "Good Luck Charm", "Stuck On You", "The Wonder of You", "Hound Dog", "All Shook Up", "Don't Be Cruel", "Teddy Bear", "Jail House Rock"]},
 {artist: "RICKY NELSON", songs: ["Hello Mary Lou"]},
 {artist: "BILL HALEY & HIS COMETS", songs: ["Rock Around the Clock", "See You Later, Alligator", "Shake, Rattle & Roll"]},
 {artist: "THE FLAMINGOS", songs: ["I Only Have Eyes for You"]},
 {artist: "THE CHAMPS", songs: ["Tequila"]},
 {artist: "DEL SHANNON", songs: ["Runaway"]},
 {artist: "The Searchers", songs: ["Love Potion #9"]},
 {artist: "Sam Cooke", songs: ["Twistin The Night Away"]},
 {artist: "Eddie Cochran", songs: ["Summertime Blues"]},
 {artist: "Everly Bros.", songs: ["Bye Bye Love", "Wake Up Little Susie"]},
 {artist: "Neil Sedaka", songs: ["Breaking Up Is Hard To Do"]},
 {artist: "Dion", songs: ["The Wanderer"]},
 {artist: "Dion/Bobby Darin/Jerry Lee Lewis Medley", songs: ["Run Around Sue", "Splish Splash", "Great Balls of Fire"]},
 {artist: "Joey Dee & The Starlighters", songs: ["Peppermint Twist"]},
 {artist: "The Tokens", songs: ["Lion Sleeps Tonight"]},
 {artist: "Surf Instrumental Medley", songs: ["Wipe-Out", "Pipeline", "Walk Don't Run"]},
 {artist: "Mama's & Papa's", songs: ["California Dreamin"]},
 {artist: "4 Seasons Medley #1", songs: ["Sherry", "Big Girls Don't Cry", "Walk Like A Man", "Bye Bye Baby"]},
 {artist: "4 Seasons Medley #2", songs: ["Rag Doll", "Dawn", "Let's Hang On"]},
 {artist: "Franki Valli", songs: ["Can't Take My Eyes Off Of You"]},
 ];

$scope.classicSongs = [
 {artist: "Doobie Brothers", songs: ["Black Water", "Jesus Is Just Alright", "Long Train Runnin", "Listen To The Music", "China Groove", "Rockin' Down The Highway"]},
 {artist: "Lynyrd Skynyrd", songs: ["Sweet Home Alabama", "Gimme Three Steps"]},
 {artist: "Bachman, Turner OverDrive", songs: ["Takin' Care of Business"]},
 {artist: "Steely Dan", songs: ["Reelin In The Years"]},
 {artist: "Hollies", songs: ["Long Cool Woman"]},
 {artist: "The Eagles", songs: ["Take It Easy", "Lyin' Eyes", "Peaceful Easy Feeling", "Tequila Sunrise"]},
 {artist: "Three Dog Night", songs: ["One"]},
 {artist: "Jim Croce", songs: ["Bad, Bad Leroy Brown"]},
 {artist: "Billy Joel", songs: ["It's Still Rock & Roll", "You May Be Right"]},
 {artist: "Wild Cherry", songs: ["Play That Funky Music"]},
 {artist: "Average White Band", songs: ["Pick Up The Pieces"]},
 {artist: "K.C. & the Sunshine Band", songs: ["Get Down Tonight", "That's The WAy I Like It", "Shake, Shake, Shake"]},
 {artist: "Santana", songs: ["Evil Ways"]},
 {artist: "The Commodores", songs: ["Brickhouse"]},
 {artist: "Bee Gees", songs: ["Stayin Alive", "More Than A Woman", "Night Fever"]},
 {artist: "Kool & the Gant", songs: ["Celebration"]},
 {artist: "Cheap Trick", songs: ["I Want You To Want Me"]},
 {artist: "Bob Seger", songs: ["Old Time Rock & Roll", "Turn The Page"]},
 {artist: "Eric Clapton", songs: ["Wonderful Tonight", "I Shot The Sheriff"]},
 {artist: "Led Zeppelin", songs: ["Stairway To Heaven"]},
 ];

 $scope.currentSongs = [
 {artist: "Loverboy", songs: ["Working For The Weekend"]},
 {artist: "Michael Jackson", songs: ["Billie Jean"]},
 {artist: "John Cougar Mellencamp", songs: ["Hurt's So Good"]},
 {artist: "Journey", songs: ["Don't Stop Believin'", "Open Arms", "Seperate Ways"]},
 {artist: "Bon Jovi", songs: ["Livin' On A Prayer"]},
 {artist: "Bruce Springsteen", songs: ["Dancin' In The Dark"]},
 {artist: "Black Crowes", songs: ["Hard To Handle"]},
 {artist: "Bryan Adams", songs: ["Summer of '69"]},
 {artist: "Georgia Satelites", songs: ["Keep Your Hands To Yourself"]},
 {artist: "Joan Jett", songs: ["I Love Rock & Roll"]},
 {artist: "Def Leppard", songs: ["Pour Some Sugar On Me"]},
 {artist: "Pink Floyd", songs: ["Another Brick In The Wall"]},
 {artist: "Robert Palmer", songs: ["Addicted To Love"]},
 {artist: "Stevie Ray Vaughn", songs: ["Pride & Joy", "House Is Rockin'"]},
 {artist: "Gary Moore", songs: ["Still Got The Blues"]},
 {artist: "Jonny Lang", songs: ["Rackem' Up"]},
 {artist: "Robert Plant & the Honeydrippers", songs: ["Rockin' At Midnight"]},
 {artist: "Beach Boys", songs: ["Kokomo"]},
 {artist: "Los Lonely Boys", songs: ["How Far Is Heaven"]},
 {artist: "Jason Mraz", songs: ["I'm Yours"]},
 ];

$scope.formattedSongs = function(song) {
  return song.artist + ":" + "\n"  + song.songs;
};

// songCollections.push(sixtiesSongs);

$scope.shows = [
 {date: "August 1", venue: "Maplewood, MN"},
 {date: "August 15", venue: "Duluth, MN"},
 ];

$scope.formattedShows = function(show) {
  return show.date + ":" + show.venue;
}
  $scope.songs.$add(songCollections);
  
  // $scope.addSbow = function() { 
  //   var newShow = {
  //     text: $scope.newShowText,
  //     expired: false,
  //     created: fireTime,
  //   };

  //   $scope.shows.$add(newShow); // Push into array
  // };
 
  // $scope.deleteShow = function(show){
  //   $scope.shows.$remove(show);
  // };

  // $scope.expiredShow = function() {
  //   $scope.shows.forEach(function(show){
  //     var createdAt = show.created,
  //     currentTime = new Date().getTime(),
  //     expiredTime = 604800000;

  //     if( currentTime - createdAt > expiredTime ){
  //       console.log("Expire this show " + show);
  //       show.expired = true;
  //       $scope.shows.$save(show);
  //     }
  //   });
  // }

  // $interval( function(){ $scope.expiredShow(); }, 86400000);

 
    document.getElementById("navigation").onscroll = function() {

}

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