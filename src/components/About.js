import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './About.css'
function About() {
    return (
        <div id="about">
            <Container fluid className="py-5 about_style">
                <h1 className="my-5 portff">About</h1>
                <Container >
                        <Row className="mx--5">
                            <Col className="text-left style pb-3" md="6" >
                                Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </Col>
                            <Col className="text-left style" md="6">
                                You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                            </Col>
                        </Row>
                </Container>
                <Container className="my-5">
                    <button type="button" class="btn1 text-white">Free Download!</button>
                </Container>
            </Container>
        </div>
    )
}

export default About
