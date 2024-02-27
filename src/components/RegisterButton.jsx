import Button from 'react-bootstrap/Button'
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import { Link } from 'react-router-dom'
import { Context } from "./App.jsx"
import React, { useContext } from 'react'


function RegisterButton() {

    const { api, LoggedIn, loggedUser, movieList } = useContext(Context)
    const [isLoggedIn, setLoggedIn] = LoggedIn
    return (
        <>
            {!isLoggedIn ? (
                <Stack gap={3}>
                    <Row>
                        <div>
                            Want faster searches? Don't want to input your streaming platform
                            availability everytime? Than register for an account to get default
                            settings applied straight away!
                        </div>
                    </Row>
                    <Row>
                        <Link to='/login'>
                            <Button fixed="bottom">Register</Button>
                        </Link>
                    </Row>
                </Stack>
            ) : null
            }
        </>
    )
}


export default RegisterButton