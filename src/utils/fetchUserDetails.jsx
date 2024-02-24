import { jwtDecode } from "jwt-decode"

async function fetchUserDetails(token, setBusy, setUser) {

    try {
        const userObj = jwtDecode(sessionStorage.getItem("token"))
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
            setBusy(false)
        } else {
            console.error("Failed to fetch user details", res.statusText)
        }
    } catch (error) {
        console.error("Error fetching user details", error)
}}

export { fetchUserDetails }