import Button from 'react-bootstrap/Button'
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from 'react-router-dom'


function RegisterButton() {
    return (
        <>
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
        </>
    )
}


export default RegisterButton