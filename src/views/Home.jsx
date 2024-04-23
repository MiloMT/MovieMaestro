import React, { useContext } from 'react'
import { Context } from '../components/App.jsx'
import { Link } from 'react-router-dom'
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// Component Imports
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
// Icons
import { IconContext } from 'react-icons'
import { BiCameraMovie } from 'react-icons/bi'
import { SiScrollreveal } from 'react-icons/si'

const Home = () => {
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [isLoggedIn, setLoggedIn] = LoggedIn

  return (
    <>
      <Container>
        <Stack gap={3}>
          <Row className='header-row'>
            <Col className='header-row-left mobile-wrap'>
              <h1>Stuck Doom Scrolling?</h1>
            </Col>
            <Col className='mobile-hide'>
              <hr className='header-hr' />
            </Col>
            <Col md={1} className='mobile-hide'>
              <IconContext.Provider value={{ size: 50 }}>
                <SiScrollreveal />
              </IconContext.Provider>
            </Col>
          </Row>
          <Row className='header-row'>
            <Col md={1} className='mobile-hide'>
              <IconContext.Provider value={{ size: 50 }}>
                <BiCameraMovie />
              </IconContext.Provider>
            </Col>
            <Col className='mobile-hide'>
              <hr className='header-hr' />
            </Col>
            <Col className='header-row-right mobile-wrap'>
              <h1>Let us choose for you!</h1>
            </Col>
          </Row>
          <FastSearch />
          <AdvancedSearch />
          {!isLoggedIn ? (
            <>
              <Row>
                <div>
                  Want faster searches? Don't want to input your streaming
                  platform availability everytime? Then register for an account
                  to get default settings applied straight away!
                </div>
              </Row>
              <Row>
                <Link to='/login'>
                  <Button fixed='bottom'>SIGN UP</Button>
                </Link>
              </Row>
            </>
          ) : null}
        </Stack>
      </Container>
    </>
  )
}

export default Home
