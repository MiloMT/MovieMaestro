import React, { useState, useContext, useEffect } from "react"
import { Context } from "./App"

const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser

    return (
        <>
            <h2>Profile Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}


export default ProfileDetails