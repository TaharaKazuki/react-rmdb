import React from 'react'

import MovieInfo from './elements/MovieInfo'
import Navigation from './elements/Navigation'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

const Movies = ({ movieId }) => (
  <>
    <Navigation />
    <MovieInfo />
    <Grid>
      <Actor />
    </Grid>
    <Spinner />
  </>
)

export default Movies