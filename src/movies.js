
const getAllDirectors = (moviesArg) => {
  const directors = moviesArg.map((movieItem) => {
    return movieItem.director;
  });

  const uniqueDirectors = directors.filter((element, index) => {
    return directors.indexOf(element) === index;
  });

  return uniqueDirectors;
};


function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((item) => {
    if (item.director === "Steven Spielberg" && item.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });

  return spielbergMovies.length;
}


const scoresAverage = (moviesArray) => {
  const sum = moviesArray.reduce((accumulator, currentValue) => {
    if (!currentValue.score) {
      return accumulator;
    } else {
      return accumulator + currentValue.score;
    }
  }, 0);

  let average = Math.round((sum / moviesArray.length) * 100) / 100;

  if (moviesArray.length === 0) {
    return 0;
  }

  return average;
};


const dramaMoviesScore = (moviesArray) => {
  const dramaArray = moviesArray.filter((item) => item.genre.includes("Drama"));
  return scoresAverage(dramaArray);
};


function orderByYear(movies) {
  const sortedMovies = movies.slice();
  
  sortedMovies.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year
    } else {
      return a.title.localeCompare(b.title); // Sort alphabetically by title
    }
  });

  return sortedMovies;
}


function orderAlphabetically(moviesArray) {
  const alphabetArray = [];
  for (i=0; i< moviesArray.length; i++){
    alphabetArray.push(moviesArray[i].title);
       }
alphabetArray.sort();
if (alphabetArray.length>20){
  for (j=20; j<alphabetArray.length - 20; j++){
    delete alphabetArray[j];
       }
}
return alphabetArray;
}

