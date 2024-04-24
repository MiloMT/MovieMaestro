import React from 'react'
// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
// Image import
import Logo from '../assets/TMDBLogo.svg'

const Footer = () => {
  return (
    <>
      <Navbar id='footer' fixed='bottom'>
        <Container>
          <Navbar.Brand href='https://www.themoviedb.org/'>
            <img src={Logo} alt='TMDB Logo' className='tmdb-logo' />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer
