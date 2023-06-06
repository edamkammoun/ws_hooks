import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,deleteFunction}) => {
  return (
    <div className='movie-list' >
        {
            React.Children.toArray(movies.map(el=><MovieCard movie={el} deleteMethode={deleteFunction}  />))
        }
    </div>
  )
}

export default MovieList