const API_KEY = "efadfec07c2eb38bacc32de13e17c844";

const requests = {
    fetchTrending: `/trending/all/week?api_keys=${API_KEY}&language=en-US`,
    fectchNetflixOriginals: `/discover/tv?api_keys=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_keys=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_keys=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_keys=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_keys=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_keys=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_keys=${API_KEY}&width_genres=99`,
}

export default requests;
