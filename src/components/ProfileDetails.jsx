import React, { useContext, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { Context } from "./App"


const ProfileDetails = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [user, setUser] = loggedUser

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            console.error("Token not found in session storage")
            return
        }

        const user = jwtDecode(sessionStorage.getItem("token"))

        const fetchUserDetails = async () => {
        try {
            const res = await fetch(
            `https://moviemaestro-api.onrender.com/users/${user.id}`,
            {
                method: "GET",
                headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                },
            }
            );
            if (res.ok) {
            const userData = await res.json();
            console.log("User details:", userData);
            setUser(userData);
            } else {
            console.error("Failed to fetch user details", res.statusText)
            }
        } catch (error) {
            console.error("Error fetching user details", error)
        }}
        fetchUserDetails()
    }, []);

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
        <h2>Profile Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        </div>
    )
}


export default ProfileDetails