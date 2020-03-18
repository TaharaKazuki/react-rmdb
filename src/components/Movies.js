import React from 'react'

import MovieInfo from './elements/MovieInfo'
import MovieInfoBar from './elements/MovieInfoBar'
import Navigation from './elements/Navigation'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

import { useMovieFetch } from './hooks/useMovieFetch'


const Movies = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId)
  console.info('movie', movie)

  if (error) return <div>Something went wrong ...</div>
  if (loading || !movie.original_title) return <Spinner />

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar 
        time={movie.time}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Actors'>
        {movie.actors.map(actor=> (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  )
}

export default Movies