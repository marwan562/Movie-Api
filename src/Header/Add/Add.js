
import './Add.css'
import { useState , useEffect } from 'react'
import axios from 'axios'
import ResultsCard from './ResultsCard/ResultsCard'

function Add() {
  const [searchValue, setSearchValue] = useState('')
  const [movies , setMovies] = useState([])
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=63adf70b`)
      .then((response) =>{ 
      if(response.data.Search){
        setMovies(response.data.Search)
      }
      })
      .catch((error) => console.log(error))
  },[searchValue])
    
  return (
    <div className="add-page">
         <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input 
                    type='text'
                    placeholder='search for movies...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
               {
                movies.length > 0 &&  <ul className='results'>
                  {movies.map((movies) => <li key={movies.imdbID}>{<ResultsCard movies={movies}/>}</li>)}
                </ul>
               }
            </div>
        </div>
    </div>
  )
}

export default Add
