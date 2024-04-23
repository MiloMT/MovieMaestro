import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App.jsx'
// React Bootstrap imports
import Form from 'react-bootstrap/Form'
import Select from 'react-select'

// Retrieves default settings if user logged in
function getDefault (user, isLoggedIn) {
  if (sessionStorage.getItem('token') && isLoggedIn) {
    return user.language
  } else {
    return {
      value: 'en',
      label: 'English'
    }
  }
}

const LanguageSelector = ({ setLanguage }) => {
  // Context States
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [apiDefaults, setApiDefaults] = api
  const [user, setUser] = loggedUser
  const [isLoggedIn, setLoggedIn] = LoggedIn

  const languageDefault = getDefault(user, isLoggedIn)

  // Component States
  const [selectValue, setSelectValue] = useState(languageDefault)

  // Hooks
  useEffect(() => setLanguage(selectValue), [selectValue])

  return (
    <Form.Group controlId='formLanguage' className='selector'>
      <Form.Label className='selector-label'>Language</Form.Label>
      <Select
        onChange={obj => setSelectValue(obj)}
        defaultValue={languageDefault}
        options={
          apiDefaults.languageList &&
          apiDefaults.languageList.map(lan => ({
            value: lan.iso_639_1,
            label: lan.english_name
          }))
        }
      />
    </Form.Group>
  )
}

export default LanguageSelector
