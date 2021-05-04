const APIKEY = "d5e71a830de88e8b827bce5cb4a8c679"

const requests = {
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/tv?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentries:`/discover/tv?api_key=${APIKEY}&with_genres=99`,
    
}
export default requests;