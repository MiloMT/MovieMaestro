import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Context } from "./App"


const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser
    // Object Initialization
    const navigate = useNavigate()

    const fetchUserDetails = async (token, userObj) => {
        try {
            const res = await fetch(
                `https://moviemaestro-api.onrender.com/users/${userObj.id}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                const userData = await res.json()
                setUser(userData)
            } else {
                console.error("Failed to fetch user details", res.statusText)
            }
        } catch (error) {
            console.error("Error fetching user details", error)
    }}

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            console.error("Token not found in session storage")
            navigate("/login")
            return
        }

        const userObj = jwtDecode(sessionStorage.getItem("token"))
        
        fetchUserDetails(token, userObj)
    }, [])

    return (
        <>
            <h2>Profile Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}


export default ProfileDetails