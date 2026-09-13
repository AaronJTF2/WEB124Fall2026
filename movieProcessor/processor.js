// Aaron Cole 9/9/26

function Movie(title, genre, rating, reviewEmail, ID) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail;
    this.ID = ID;
}

Movie.prototype.getSummary = function () {
    return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}/10.`;
};

Movie.prototype.isHighlyRated = function () {
    return this.rating >= 8;
};

Movie.prototype.getReviewEmail = function () {
    return typeof this.reviewEmail === "string" && this.reviewEmail.trim() !== ""
        ? this.reviewEmail
        : "none";
};

Movie.prototype.getID = function () {
    return this.ID;
};

// this is my movies. going to revist this and make a front end UI to add movies from a form.
const movieStrings = [
    "Inception,Science Fiction,2.8,aaron@example.com,1",
    "Jaws,Horror,8.1,aaron2@example.com,2",
    "Saving Private Ryan,War,9.6,aaron3@example.com,3",
    "The Godfather,Crime,9.2,aaron4@example.com,4",
    "errorrr handling movie,Comedy,not a number,",
    "missing fields movie,,7.5,"
];

const movies = movieStrings.map(function (movieString) {
    try {
        if (typeof movieString !== "string") {
            throw new Error("Movie data must be a string.");
        }

        const values = movieString.split(",");
        const [title, genre, rating, reviewEmail, ID] = values;

        if (!title || !genre || !rating) {
            throw new Error("Movie must have a title, genre, and rating.");
        }

        if (Number.isNaN(Number(rating))) {
            throw new Error("Movie rating must be a number.");
        }

        return new Movie(title, genre, Number(rating), reviewEmail, Number(ID));
    } catch (error) {
        console.error(`Skipping movie: ${error.message}`);
        return null;
    }
}).filter(function (movie) {
    return movie !== null;
});

console.log("All movies:");
movies.forEach(function (movie) {
    console.log(movie);
    console.log(movie.getSummary());
});

// FAVORITE MOVIE SECTION
// This finds Saving Private Ryan and prints its title and movie summary.
// We are using movie.title to access the title property of the movie object and movie.getSummary() to call the getSummary method of the movie object.
const favoriteMovie = movies.find(function (movie) {
    return movie.title === "Saving Private Ryan";
});
console.log(`My favorite movie is ${favoriteMovie.title}. ${favoriteMovie.getSummary()}`);

const highlyRatedMovies = movies.filter(function (movie) {
    return movie.isHighlyRated();
});

console.log("Highly rated movie titles:");
highlyRatedMovies.map(function (movie) {
    return movie.title;
}).forEach(function (title) {
    console.log(title);
});