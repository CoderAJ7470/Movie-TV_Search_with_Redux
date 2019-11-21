export const API = {
  getMovies: async (keyword, pageNumber) => {    
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&page=${pageNumber}`);
    const data = await api_call.json();

    return data;
  }
}
