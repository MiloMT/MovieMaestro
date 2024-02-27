import React, { useState, useContext, useEffect } from "react"
import { Context } from "./App"
import ProviderSelector from "./filter_options/ProviderSelector"

const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser

    return (
        <>
            <h2>Profile Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Language: {user.language.label}</p>
            <p>Region: {user.region.label}</p>
            <ul>Streaming Providers:
                {user.streamingPlatform.map((prov) => (
                <li>{prov.label}</li>
                ))}
            </ul>
        </>
    )
}


export default ProfileDetails