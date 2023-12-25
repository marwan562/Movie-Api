import { useMovies } from "../../Context/GlobalContext"
import MovieCard2 from "./MovieCard2";
import  './WatchList.css'

function WatchList() {
  const  movieContext = useMovies()

  return (
    <div className="watch-list">
        <div className="container">
          <div className="main-heading">
            <h1>My WatchList</h1>
            <span className="movies-count">{movieContext.watchlist.length} : Movies</span>
          </div>
          
            {movieContext.watchlist.length > 0 ? 
              (<div className="movie-grid">
                {movieContext.watchlist.map((movie) => (
                   <MovieCard2 key={movie.imdbID}  movie={movie} type='watchlist'/>
              ))}
              </div>)
              :
               (<h1 className="no-movies">No Movies in ur list , add some!</h1>)}       
                
          
        </div>
    </div>
  )
}

export default WatchList
