import { useMovies } from "../../Context/GlobalContext"
import MovieCard2 from "../WatchList/MovieCard2"



function Watched() {
  const movieContext = useMovies()
  return (
    <div className="watch-list">
        <div className="container">
          <div className="main-heading">
            <h1>My Watched </h1>
            <span className="movies-count">{movieContext.watched.length} : Movies</span>
          </div>
          
            {movieContext.watched.length > 0 ? 
              (<div className="movie-grid">
                {movieContext.watched.map((movie) => (
               <MovieCard2 key={movie.imdbID} movie={movie} type='watched'/>
              ))}
              </div>)
              :
               (<h1 className="no-movies">No Movies in ur list , add some!</h1>)}       
                
          
        </div>
    </div>
  )
}

export default Watched
