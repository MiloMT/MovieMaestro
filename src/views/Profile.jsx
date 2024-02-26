import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
// Component Imports
import ProfileDetails from '../components/ProfileDetails'
import EditProfile from '../components/EditProfile.jsx'
import { fetchUserDetails } from "../utils/fetchUserDetails.jsx"
import { Context } from '../components/App.jsx'



const Profile = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    const [user, setUser] = loggedUser
    // Component State
    const [isBusy, setBusy] = useState(true)
    // Object Initialization
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (!token || !isLoggedIn) {
            console.error("This page requires an active login")
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
                    <ProfileDetails />
                    <EditProfile />
                </>
            )}
        </>
    )
}


export default Profile