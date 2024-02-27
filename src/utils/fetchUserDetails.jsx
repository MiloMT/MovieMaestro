import { jwtDecode } from "jwt-decode"

function fetchUserDetails(token, setBusy, setUser) {

    try {
        const userObj = jwtDecode(sessionStorage.getItem("token"))
        fetch (
            `https://moviemaestro-api.onrender.com/users/${userObj.id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((res) => res.json())
        .then((data) => setUser(data))
        .then(() => setBusy(false))
    } catch (error) {
        console.error("Error fetching user details", error)
}}

export { fetchUserDetails }