var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;
showMovieInfo();



movie = movie2;

var movie2 = {};
movie = movie2;
showMovieInfo();

movie2.title = "Avatar";
movie2.actors = "Sam Worthington";
movie2.directors = "James Cameron";

movie = movie2;
showMovieInfo(); 
