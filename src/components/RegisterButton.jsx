import Button from 'react-bootstrap/Button';

function RegisterButton() {
    return (
        <>
            <div>Want faster searches? Don't want to input your streaming platform availability everytime? Than register for an account to get default settings applied straight away!</div>
            <Button fixed="bottom" href="/login">Register</Button>
        </>
    );
}

export default RegisterButton;