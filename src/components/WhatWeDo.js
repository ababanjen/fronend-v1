import React, { useState } from 'react'
import {whatWeDoList} from '../fakeAPI'
import SpaceHeading from './SpaceHeading'
import { Container, Row, Col } from 'reactstrap';

const WhatWeDo = () => {
    const [data] = useState(whatWeDoList)
    return (
        <div className="row-content colored-bg">
            <Container>
                <Row >
                    {data.map(item => (
                        <>
                        <Col xs={{size:2}} sm={{size:2}} md={{size:1}} lg={{size:1}} key={`i-${item.id}`}>
                            <img src={item.icon} className="img-responsive"/>
                        </Col>
                        <Col xs={{size:10}} sm={{size:10}} md={{size:5}} lg={{size:3}} key={`c-${item.id}`}>
                            <SpaceHeading title={item.title}/>
                            <p>{item.content}</p>
                        </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default WhatWeDo