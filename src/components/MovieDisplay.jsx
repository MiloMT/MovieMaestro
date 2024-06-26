import React, { useContext, useState, useEffect } from 'react'
import { Context } from './App.jsx'
import { jwtDecode } from 'jwt-decode'
// Bootstrap Components
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// Component Imports
import OtherMovies from './OtherMovies.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const MovieDisplay = () => {
  // Context States
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [apiDefaults, setApiDefaults] = api
  const [movies, setMovies] = movieList
  const [isLoggedIn, setLoggedIn] = LoggedIn
  const [user, setUser] = loggedUser
  // Component States
  const [selectedMovies, setSelectedMovies] = useState([])
  const [movieIndex, setMovieIndex] = useState([0])
  const [isBusy, setBusy] = useState(true)
  const [inWatchedList, setInWatchedList] = useState(false)
  const [inWishList, setInWishList] = useState(false)

  // Updates the movie list to re-render when movies state updated
  useEffect(() => {
    selectMovies()
    setBusy(false)
  }, [movies])

  // On state change, checks lists for button displays when logged in
  useEffect(() => {
    if (selectedMovies.length !== 0 && isLoggedIn) {
      setInWatchedList(false)
      setInWishList(false)
      checkWatchedList()
      checkWishList()
    }
  }, [movieIndex, selectedMovies])

  const checkWatchedList = () => {
    if (user) {
      if (
        user.watchList.some(
          movies => movies.title === selectedMovies[movieIndex].title
        )
      ) {
        setInWatchedList(true)
      }
    }
  }

  const checkWishList = () => {
    if (user) {
      if (
        user.wishList.some(
          movies => movies.title === selectedMovies[movieIndex].title
        )
      ) {
        setInWishList(true)
      }
    }
  }

  // Takes movie array from initial fetch and retrieves 4 random ones
  const selectMovies = () => {
    if (movies && movies.length > 0) {
      const movieList = []
      while (movieList.length < 4) {
        const randomIndex = Math.floor(Math.random() * movies.length)
        if (!movieList.includes(movies[randomIndex])) {
          movieList.push(movies[randomIndex])
        }
      }
      setSelectedMovies(movieList)
    }
  }

  const handleAddWatchedList = async () => {
    const user = jwtDecode(sessionStorage.getItem('token'))

    const response = await fetch(
      `https://moviemaestro-api.onrender.com/users/${user.id}/watchList`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(selectedMovies[movieIndex])
      }
    )
    const data = await response.json()
    setUser(data)
  }

  const handleAddWishList = async () => {
    const user = jwtDecode(sessionStorage.getItem('token'))

    const response = await fetch(
      `https://moviemaestro-api.onrender.com/users/${user.id}/wishList`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(selectedMovies[movieIndex])
      }
    )
    const data = await response.json()
    setUser(data)
  }

  const ScoreIndicator = ({ value, maxValue }) => {
    const val = (value / maxValue) * 100
    const deg = (180 / 100) * val
    return (
      <div className='indicator'>
        <span className='bar' style={{ transform: `rotate(${deg}deg)` }} />
        <span className='result'>
          <span>{value}</span>/<span>{maxValue}</span>
        </span>
      </div>
    )
  }

  const notifyWatch = () => {
    toast.success("Added to watch list!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }
  
  const notifyWish = () => {
    toast.success("Added to wish list!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }  

  return (
    <>
      {isBusy ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Stack gap={5}>
            {selectedMovies !== null && movies && movies.length > 0 && (
              <Row>
                <Col md={'auto'}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${selectedMovies[movieIndex].poster_path}`}
                    alt='Movie Poster Image'
                    className='movie-image'
                  />
                </Col>
                <Col>
                  <Stack gap={3} className='movie-info'>
                    <Row className='header-row'>
                      <Col>
                        <Row>
                          <h4>
                            {selectedMovies[movieIndex].title} (
                            {selectedMovies[movieIndex].release_date.substring(
                              0,
                              4
                            )}
                            )
                          </h4>
                        </Row>
                        <Row>
                          <p>
                            {selectedMovies[movieIndex].genre_ids
                              .map(
                                id =>
                                  apiDefaults.genreList.find(
                                    obj => obj.id === id
                                  ).name
                              )
                              .join(', ')}
                          </p>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <ScoreIndicator
                          value={
                            Math.round(
                              selectedMovies[movieIndex].vote_average * 10
                            ) / 10
                          }
                          maxValue={10}
                        />
                      </Col>
                    </Row>
                    <p>{selectedMovies[movieIndex].overview}</p>
                    <Row>
                      <Col></Col>
                    </Row>
                    {/* Buttons only show if user is logged in */}
                    {isLoggedIn && (
                      <Row md={2}>
                        <Col>
                          {inWatchedList ? (
                            <Button
                              variant='outline-success'
                              className='button-full'
                            >
                              Added
                            </Button>
                          ) : (
                            <Button
                              variant='outline-primary'
                              onClick={() => {
                                handleAddWatchedList()
                                setInWatchedList(true)
                                notifyWatch()
                              }}
                              className='button-full'
                            >
                              Watched
                            </Button>
                          )}
                        </Col>
                        <Col>
                          {inWishList ? (
                            <Button
                              variant='outline-success'
                              className='button-full'
                            >
                              Added
                            </Button>
                          ) : (
                            <Button
                              variant='outline-primary'
                              onClick={() => {
                                handleAddWishList()
                                setInWishList(true)
                                notifyWish()
                              }}
                              className='button-full'
                            >
                              Watch Later
                            </Button>
                          )}
                        </Col>
                      </Row>
                    )}
                  </Stack>
                </Col>
              </Row>
            )}
            <OtherMovies
              selectedMovies={selectedMovies}
              setMovieIndex={setMovieIndex}
            />
          </Stack>
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      )}
    </>
  )
}

export default MovieDisplay
