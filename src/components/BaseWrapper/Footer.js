import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Container className="footer-container" fluid={true}>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} className="footer-content">@{new Date().getFullYear()} Demo</Col>
            </Row>
        </Container>
    )
}

export default Footer