import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Context } from './App'
import Button from 'react-bootstrap/Button'
import { jwtDecode } from 'jwt-decode'

import { IconContext } from 'react-icons'
import { RiDeleteBin6Line } from 'react-icons/ri'

const WatchedList = () => {
  const { loggedUser } = useContext(Context)
  const user = loggedUser[0]
  const setUser = loggedUser[1]

  // Check if the user and watchList are defined before rendering
  if (!user || !user.watchList || user.watchList.length === 0) {
    return <div>Search movies to add to your watch list.</div>
  }

  const removeMovie = async movie => {
    const user = jwtDecode(sessionStorage.getItem('token'))
    const response = await fetch(
      `https://moviemaestro-api.onrender.com/users/${user.id}/watchList`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(movie)
      }
    )
    const updatedUser = await response.json()
    setUser(updatedUser)
  }

  return (
    <>
      <h3 style={{ textAlign: 'left' }}>Watched list</h3>
      <div className='watched-container'>
        {user.watchList.map((movie, index) => (
          <div key={index} className='watched-card-container'>
            <Card style={{ padding: 0 }}>
              <IconContext.Provider
                value={{
                  color: 'white',
                  size: '2.5em',
                  className: 'movie-remove-button'
                }}
              >
                <RiDeleteBin6Line onClick={() => removeMovie(movie)} />
              </IconContext.Provider>
              <Card.Img
                variant='top'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                style={{ height: '200px' }}
              />
              <Card.Body className='other-movie-title'>{movie.title}</Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default WatchedList
