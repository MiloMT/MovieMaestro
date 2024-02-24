import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "./App"
import { fetchUserDetails } from "../utils/fetchUserDetails"
import EditProfile from "./EditProfile"

const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser
    const [isLoggedIn, setLoggedIn] = LoggedIn
    // Component State
    const [isBusy, setBusy] = useState(true)
    // Object Initialization
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (!token) {
            console.error("Token not found in session storage")
            setLoggedIn(false)
            navigate("/login")
            return
        }
        
        fetchUserDetails(token, setBusy, setUser)
    }, [])

    return (
        <>
            { isBusy ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h2>Profile Details</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            )}
            
        </>
    )
}


export default ProfileDetails