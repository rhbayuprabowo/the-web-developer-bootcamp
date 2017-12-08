console.log("Connected");

var myMovie = [
    {title: "In Bruges",
    rating: 5,
    hasWatched: true},
    {title: "Frozen",
    rating: 4.5,
    hasWatched: false},
    {title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true},
    {title: "Les Miserables",
    rating: 3.5,
    hasWatched: false}
];

function listMovies(movies) {
    movies.forEach(function(movie){
        console.log(areYouAlreadyWatched(movie.hasWatched)+ " \"" +movie.title+ "\" - " +movie.rating);
    });
}

function areYouAlreadyWatched(yesNo){
    if (yesNo) {
        return "You have watched";
    } else {
        return "You have not seen";
    }
}

listMovies(myMovie);