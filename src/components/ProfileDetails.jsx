import React, { useState, useContext, useEffect } from "react"
import { Context } from "./App"
import ProviderSelector from "./filter_options/ProviderSelector"

const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser

    return (
        <div style={{textAlign: "left"}}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <hr />
            <h4>Streaming Providers</h4>
            {user.streamingPlatform.map((prov) => (
                <p>{prov.label}</p>
            ))}
            <hr />
            <h4>Preferred Language</h4>
            <p>{user.language.label} ({user.language.value})</p>
            <hr />
            <h4>Preferred Region</h4>
            <p>{user.region.label} ({user.region.value})</p>
        </div>
    )
}


export default ProfileDetails