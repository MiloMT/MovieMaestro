import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
// Bootstrap Components
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
// Component Imports
import ProfileDetails from '../components/ProfileDetails'
import EditProfile from '../components/EditProfile.jsx'
import WatchedList from '../components/WatchedList.jsx'
import WishList from '../components/WishList.jsx'
import { Context } from '../components/App.jsx'



const Profile = () => {
    // Context State
    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    // Component State
    const [isBusy, setBusy] = useState(true)
    const [action, setAction] = useState("View")
    // Object Initialization
    const navigate = useNavigate()

    // If direct navigation to profile without token or login, directs to login route
    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if (!token || !isLoggedIn) {
            console.error("This page requires an active login")
            setLoggedIn(false)
            navigate("/login")
            return
        }

        setBusy(false)
    }, [])

    return (
        <>
            { isBusy ? (
                <h1>Loading...</h1>
            ) : (
                <Row style={{ width: "min(100vw, 1280px)" }}>
                    <Col lg={4} md={12}>
                        <Stack gap={3} style={{ marginBottom: "2rem" }}>
                            {/* Swaps between view and edit mode for details */}
                            {action === "View" ? (
                                <>
                                    <ProfileDetails />
                                    <Button variant="primary" onClick={() => setAction("Edit")}>
                                        Edit Profile
                                    </Button>
                                </>
                            ) : (
                                <EditProfile setAction={setAction} />
                            )}
                        </Stack>  
                    </Col>
                    <Col lg={8} md={12}>
                        <Stack gap={3}>
                            <WatchedList />
                            <WishList />
                        </Stack>
                    </Col>
                </Row>
            )}
        </>
    )
}


export default Profile