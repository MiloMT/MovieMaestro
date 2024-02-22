import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function RegisterButton() {
    return (
        <>
            <div>Want faster searches? Don't want to input your streaming platform availability everytime? Than register for an account to get default settings applied straight away!</div>
            <Link to='/login'>
                <Button fixed="bottom" >Register</Button>
            </Link>
        </>
    );
}

export default RegisterButton;