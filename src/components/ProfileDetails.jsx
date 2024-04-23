import React, { useState, useContext, useEffect } from 'react'
import { Context } from './App'

const ProfileDetails = () => {
  // Context State
  const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
  const [user, setUser] = loggedUser

  return (
    <div data-testid='profile-details' style={{ textAlign: 'left' }}>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <hr />
      <h4>Streaming Providers</h4>
      {user.streamingPlatform?.map((prov, index) => (
        <p key={index}>{prov.label}</p>
      ))}
      <hr />
      <h4>Preferred Language</h4>
      {/* Default display handling if user doesn't have language set */}
      {user.language ? (
        <p>
          {user.language.label} ({user.language.value})
        </p>
      ) : (
        <p>Please select a language</p>
      )}
      <hr />
      <h4>Preferred Region</h4>
      {/* Default display handling if user doesn't have region set */}
      {user.region ? (
        <p>
          {user.region.label} ({user.region.value})
        </p>
      ) : (
        <p>Please select a region</p>
      )}
    </div>
  )
}

export default ProfileDetails
