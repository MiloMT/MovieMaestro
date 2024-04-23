import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from './App'
// Bootstrap Components
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
// Filter Components
import GenreSelector from './filter_options/GenreSelector'
import LanguageSelector from './filter_options/LanguageSelector'
import ProviderSelector from './filter_options/ProviderSelector'
import RegionSelector from './filter_options/RegionSelector'
import PrioritySelector from './filter_options/prioritySelector'

function AdvancedSearch ({ onHide = null }) {
  // Context States
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [movies, setMovies] = movieList
  // Component States
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState('')
  const [provider, setProvider] = useState('')
  const [region, setRegion] = useState('')
  const [priority, setPriority] = useState('')
  // Object Initialization
  const navigate = useNavigate()

  function MovieRequest () {
    const url =
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1` +
      `&language=${language.value}` +
      `&watch_region=${region.value}` +
      `&with_genres=${genre.value}` +
      // joining the array with the unicode for | for an 'or' url request join
      `&with_watch_providers=${provider.map(prov => prov.value).join('%7C')}` +
      `&sort_by=${priority.value}`

    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
      // Navigates to movie page after fetch and goes to top of page
      .then(() => navigate('/movie'))
      .then(() => window.scrollTo(0, 0))
  }

  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Advanced Search</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Stack gap={3}>
              <GenreSelector setGenre={setGenre} />
              <LanguageSelector setLanguage={setLanguage} />
              <RegionSelector setRegion={setRegion} />
              <ProviderSelector setProvider={setProvider} />
              <PrioritySelector setPriority={setPriority} />
              <Form.Group className='button' controlId='submitButton'>
                {/* If the component is in the side menu, will
                                close the side menu on movie search */}
                <Button
                  onClick={() => {
                    MovieRequest()
                    if (onHide) {
                      onHide()
                    }
                  }}
                  variant='primary'
                >
                  Search Movie
                </Button>{' '}
              </Form.Group>
            </Stack>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AdvancedSearch
