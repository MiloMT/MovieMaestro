import React from 'react'
// Bootstrap Components
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// Component Imports
import FastSearch from '../components/FastSearch'
import AdvancedSearch from '../components/AdvancedSearch'
import RegisterButton from '../components/RegisterButton'
import Header from '../components/HomeHeader'


const Home = () => {
    return (
        <>
            <Container>
                <Stack gap={5}>
                    <Row>
                        <Col md={12}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Stack gap={3}>
                                <FastSearch />
                                <AdvancedSearch />
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <RegisterButton />
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </>
    );
}


export default Home