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
     controller: 'Main.controller',
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
  $scope.songs = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP,
  songCollections = [];

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

 // songCollections.push($scope.oldiesSongs);

 // $scope.songs.$add(songCollections);

$scope.formattedSongs = function(song) {
  return song.artist + ":" + "\n"  + song.songs;
};

// songCollections.push(sixtiesSongs);



$scope.formattedShows = function(show) {
  return show.date + ":" + show.venue;
}
  // $scope.songs.$add(songCollections);
  
  // $interval( function(){ $scope.expiredShow(); }, 86400000);

 
    document.getElementById("navigation").onscroll = function() {

}

}]);

app.controller('Photo.controller', ['$scope', '$firebaseArray', 'Lightbox', function($scope, $firebaseArray, Lightbox){
  var ref = new Firebase("kents-page.firebaseIO.com");

  $scope.images = [
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
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
        'small': "images/kent_3.jpg",
        'url': "images/kent_3.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "images/kent_elvis.jpg",
        'url': "images/kent_elvis.jpg",
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
  var ref2 = new Firebase("kents-page.firebaseIO.com");

// create a synchronized (psuedo read-only) array
  $scope.songs = $firebaseArray(ref2);

  $scope.addSong = function() { // add song to list
    var newSong = {
      artist: $scope.newArtistText,
      songs: $scope.newSongText
    };

    $scope.songs.$add(newSong); // Push into array
    $scope.newSongText = "";
    $scope.newArtistText = ""
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


