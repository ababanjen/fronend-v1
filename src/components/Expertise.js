import React, { useState } from 'react'
import {expertiesList} from '../fakeAPI'
import { Container, Row, Col, Progress } from 'reactstrap';

const Expertise = () => {
    const [expertise] = useState(expertiesList)
    return (
        <div className="row-content">
            <Container>
                <Row>
                    <Col sm={{size:12}}>
                        <span className="content-title">Our Expertise</span>
                    </Col>
                    <Col sm={{size:12}} md={{size:4}} lg={{size:4}} className="expetise">
                        {expertise.list.map(e => (
                            <div  key={e.id} className="bar-col">
                                <Progress value={e.percentage} className="custom-progress" barClassName="custom-bar-progress-bar"/>
                                <div style={{
                                    display: 'flex',
                                    width: `${e.percentage}%`
                                }}>
                                    {e.title.toUpperCase()}
                                    <div className="progress-percentage" >{`${e.percentage}%`}</div>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col sm={{size:12}} md={{size:8}} lg={{size:8}} className="expetise">
                        <p className="expetise-p">{expertise.detail}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Expertise