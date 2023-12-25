import { useMovies } from "../../Context/GlobalContext";
import * as actions from '../../Context/ActionTypes'


function MovieControls({movie , type}) {
    const movieContext = useMovies()
  return (
    <div className="inner-card-controls">
        {
            type === 'watchlist' && (
                <div>
                    <button
                    onClick={() => movieContext.MoviesDispatch({
                        type : actions.ADD_MOVIE_TO_WATCHED ,
                        payload : movie ,
                    })}
                    className="ctrl-btn">
                        <i title="Add Movie To Watched" className="fa-solid fa-eye"/>
                    </button>                
                    <button
                     onClick={() => movieContext.MoviesDispatch({
                        type : actions.REMOVE_MOVIE_FROM_WATCHLIST ,
                        payload : movie.imdbID , 
                    })}
                     className="ctrl-btn">
                        <i title="Remove Movie From Watchlist" className="fa-fw fa fa-times"/>
                    </button>
                </div>
            )
        }   

        {
            type === 'watched' && (
                <div>
                    <button 
                    onClick={() => movieContext.MoviesDispatch({
                        type : actions.MOVE_TO_WATCHLIST,
                        payload : movie,
                    })}
                    className="ctrl-btn">
                        <i className="fa-solid fa-eye-slash"/>
                    </button>                
                    <button 
                    onClick={() => movieContext.MoviesDispatch({
                        type : actions.REMOVE_MOVIE_FROM_WATCHED ,
                        payload : movie.imdbID
                    })}
                    className="ctrl-btn">
                        <i className="fa-fw fa fa-times"/>
                    </button>
                </div>
            )
        }   


        
    </div>
  )
}

export default MovieControls;
