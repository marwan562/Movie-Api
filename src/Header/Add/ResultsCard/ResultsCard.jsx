import { useMovies } from '../../../Context/GlobalContext'
import './ResultsCard.css'
import * as actions from '../../../Context/ActionTypes'


function ResultsCard({movies}) {
  const movieContext = useMovies()
  const storeMovie = movieContext.watchlist.find((o) => o.imdbID === movies.imdbID);
  const storeMovieWatched = movieContext.watched.find((o) => o.imdbID === movies.imdbID);
  const watchlistDisabled = storeMovie ? true : storeMovieWatched ? true : false;
  const watchedDisabled = storeMovieWatched ? true : false;
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>    
            {movies.Poster ?
             <img src={movies.Poster} alt={movies.Title}/> 
             : (<div className='filter-poster'></div>)
             }
        </div>
        <div className='info'>
           <div className='heading'>
              <h3 className='title'>{movies.Title}</h3>
              {movies.Year ? <h4 className='release-date'>{movies.Year}</h4> : '-'}
        </div>
        <div className='controls'>
             <button
             disabled={watchlistDisabled}
             onClick={() => movieContext.MoviesDispatch(
              {type : actions.ADD_MOVIE_TO_WATCHLIST ,
               payload :movies
                }
             )}
              className='btn'>
             Add To Watchlist
             </button>

             <button
             disabled={watchedDisabled}
             onClick={() => movieContext.MoviesDispatch(
              {type : actions.ADD_MOVIE_TO_WATCHED ,
                payload : movies
              }
             )}
              className='btn'>
             Add To Watched
             </button>
             </div>
        </div>
    </div>
  )
}

export default ResultsCard
