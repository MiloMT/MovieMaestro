import React from 'react'

const MovieDisplay = ({movies}) => {
  return (
    <>
    <div>MovieDisplay</div>
    <p>{movies[0].title}</p>
    </>
  )
}

export default MovieDisplay
