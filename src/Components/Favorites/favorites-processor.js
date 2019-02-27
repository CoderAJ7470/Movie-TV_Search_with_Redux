function addToFavorites(movie) {
  const movies = JSON.parse(localStorage.getItem("movies")) ? JSON.parse(localStorage.getItem("movies")) : [];

  console.log("Movie is: ", movie);

  if(movies.length === 0){
    movies.unshift(movie);
    
    console.log("Movies is: ", movies);

    localStorage.setItem("movies", JSON.stringify(movies));
  }
  else if (movies.find((movieData) => movie.title === movieData.title && movie.directedBy === movieData.directedBy)) {
    alert("You already have this item in your favorites");
    return;
  }
  else {
    movies.unshift(movie);

    localStorage.setItem("movies", JSON.stringify(movies));
  }
}

export default addToFavorites;