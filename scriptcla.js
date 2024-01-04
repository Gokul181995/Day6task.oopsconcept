// question A answer in day 6 task

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  talk() {
    console.log(this.title, "is streaming....");
  }
}

// const myMovie = new Movie("Love Today", "AVM", "PG-13");
// console.log(myMovie.title);
// console.log(myMovie.studio);
// console.log(myMovie.rating);

// const Movie1 = new Movie("VTV", "Studio Green", "U/A");

// console.log(Movie1);

// const Movie2 = new Movie("Vada Chennai", "VFF", "U/A");

// console.log(Movie2);

// B) class Movie will set the class property rating to "PG" as default when no rating is provided.

// class Movie {
//   constructor(title, studio, rating = "PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// const movie1 = new Movie("Inception", "Warner Bros");
// console.log(movie1);

// const movie2 = new Movie("The Dark Knight", "Warner Bros", "PG-13");
// console.log(movie2);

//c) method getPG

// class Movie {
//   constructor(title, studio, rating = "PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }

//   static getPG(movies) {
//     return movies.filter((movie) => movie.rating === "PG");
//   }
// }

// const movies = [
//   new Movie("Dum", "Simbu flim", "PG-13"),
//   new Movie("Ak47", "Venkat Prabu Flim", "U"),
//   new Movie("KGF", "Prasanth Neel Flim", "PG"),
//   new Movie("Leo", "Studio Green", "PG"),
// ];

// const pgMovies = Movie.getPG(movies);
// console.log(pgMovies);

//D) "Class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”//

// class Movie {
//   constructor(title, studio, rating = "PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// console.log(casinoRoyale);
// console.log(casinoRoyale.title);
// console.log(casinoRoyale.studio);
// console.log(casinoRoyale.rating);
