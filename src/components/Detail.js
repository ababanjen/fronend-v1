import React from 'react'
import {detail} from '../fakeAPI'
import { Container, Row, Col } from 'reactstrap';

const Detail = () => {
    return (
        <div className="colored-bg">
            <Container fluid={true}>
                <Row>
                    <Col sm={{size:12}} md={{size:6}} lg={{size:6}} style={{padding:0}}>
                        <div>
                            <img src={detail.img}/>
                        </div>
                    </Col>
                    <Col sm={{size:12}} md={{size:6}} lg={{size:5}}>
                        <div className="detail-content">
                            <span className="content-title">Let's make magic.</span>
                            <p>{detail.content}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail