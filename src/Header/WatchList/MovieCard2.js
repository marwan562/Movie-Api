import './MovieCard2'
import MovieControls from './MovieControls'

function MovieCard2({movie , type }) {
  return (
    <div className="movie-card">
      <div className="overlay">
      </div>
      {movie.Poster ? 
        (<img src={movie.Poster} alt={movie.Title}/>)
        :
        (<div className="filter-poster">Not Have img</div>)
      }
      <MovieControls movie={movie} type={type}/>
    </div>
  )
}

export default MovieCard2
