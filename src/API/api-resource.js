const API_KEY = "a7d348df";

export const API = {
  getMovies = async (keyword, page = 1) => {    
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&${page}`);
    const data = await api_call.json();
  }
}