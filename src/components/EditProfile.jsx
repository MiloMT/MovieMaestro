import { useContext, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import ProviderSelector from './filter_options/ProviderSelector'
import LanguageSelector from './filter_options/LanguageSelector'
import RegionSelector from './filter_options/RegionSelector'
import { Context } from './App'

function EditProfile ({ setAction }) {
  // Context State
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [user, setUser] = loggedUser
  // Component State
  const [provider, setProvider] = useState('')
  const [language, setLanguage] = useState('')
  const [region, setRegion] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectValue, setSelectValue] = useState('Edit')

  // Hooks
  useEffect(() => setAction(selectValue), [selectValue])

  const handleCancel = () => {
    setName('')
    setEmail('')
    setProvider('')
    setRegion('')
    setLanguage('')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // If some fields not adjusted, then it will use their previous setting.
    // Will also not run if nothing has been edited
    if (
      email !== '' ||
      name !== '' ||
      provider !== '' ||
      region !== '' ||
      language !== ''
    ) {
      const updatedEntry = {
        name: name == '' ? user.name : name,
        email: email == '' ? user.email : email,
        streamingPlatform: provider == '' ? user.provider : provider,
        region: region == '' ? user.region : region,
        language: language == '' ? user.language : language
      }

      fetch(`https://moviemaestro-api.onrender.com/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(updatedEntry)
      })
        .then(res => res.json())
        .then(data => setUser(data))
        .then(() => {
          setName('')
          setEmail('')
          setProvider('')
          setRegion('')
          setLanguage('')
        })
        // Change component on submit
        .then(() => setSelectValue('View'))
    }
  }

  return (
    <>
      <div style={{ textAlign: 'left' }} data-testid='profile-details'>
        <Form.Group className='selector'>
          <Form.Label htmlFor='nameField' className='selector-label'>
            Name
          </Form.Label>
          <Form.Control
            type='name'
            id='nameField'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={user.name}
          />
        </Form.Group>
        <Form.Group className='selector'>
          <Form.Label htmlFor='emailField' className='selector-label'>
            Email
          </Form.Label>
          <Form.Control
            type='email'
            id='emailField'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={user.email}
          />
        </Form.Group>
        <hr />
        <ProviderSelector setProvider={setProvider} />
        <hr />
        <LanguageSelector setLanguage={setLanguage} />
        <hr />
        <RegionSelector setRegion={setRegion} />
      </div>
      <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Button className='button-full' type='submit'>
            Save
          </Button>{' '}
          <Button
            className='button-full'
            onClick={() => {
              handleCancel()
              // Changes component back to viewing details
              setSelectValue('View')
            }}
            variant='secondary'
          >
            Cancel
          </Button>{' '}
        </Stack>
      </Form>
    </>
  )
}

export default EditProfile
