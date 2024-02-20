import React from 'react'

const MovieDisplay = ({movies}) => {
  return (
    <>
      <div>MovieDisplay</div>
      <p>{movies[0].title}</p>
      <p>{movies[0].overview}</p>
      <p>{movies[0].vote_average}</p>
    </>
  );
}

export default MovieDisplay
