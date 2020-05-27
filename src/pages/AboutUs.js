import React from 'react'
import BaseWrapper from '../components/BaseWrapper'
import { Container, Row, Col } from 'reactstrap';

const AboutUs = () => {
    return (
        <BaseWrapper>
            <Container className="about-content">
                <Row>
                    <Col sm={{size:4}}>
                        <h1>ABOUT US</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
        </BaseWrapper>
    )
}

export default AboutUs