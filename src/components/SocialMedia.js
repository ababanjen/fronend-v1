import React from 'react'
import {socialSites} from '../fakeAPI'
import SpaceHeading from './SpaceHeading'
import { Container, Col } from 'reactstrap';

const SocialMedia = () =>{
    return(
        <div className="row-content social">
            <Container fluid={true}>
                <Col sm={{size:12}} className="d-flex justify-content-center link">
                    <div className="circle"/>
                </Col>
                <div className="d-lg-flex d-md-flex  d-block justify-content-center text-center flex-wrap">
                    {
                        socialSites.map(social => (
                            <SpaceHeading key={social.id} title={social.title} isSocialMedia={true}
                                className="social-text"
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
} 

export default SocialMedia 