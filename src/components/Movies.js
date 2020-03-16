import React from 'react'

import MovieInfo from './elements/MovieInfo'
import Navigation from './elements/Navigation'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

import { useMovieFetch } from './hooks/useMovieFetch'


const Movies = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId)

  console.info('movie', movie)
  return (
    <>
      <Navigation />
      <MovieInfo />
      <Grid>
        <Actor />
      </Grid>
      <Spinner />
    </>
  )
}

export default Movies