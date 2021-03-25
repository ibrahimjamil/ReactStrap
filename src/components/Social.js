import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Social.css'
function Social() {
    return (
        <div>
            <Container fluid className="social_style">
               <Container className="py-2 px-2">
                   <Row>
                       <Col lg="4" className="text-white text-center">
                            <h4 className="tags">LOCATION</h4>
                            <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
                       </Col>
                       <Col lg="4" className="text-white">
                            <h4 className="tags">AROUND THE WEB</h4>
                            <Row className="d-flex flex-row flex-start justify-content-center">
                                <div>
                                    <a className="social"><i class="fab fa-facebook"></i></a>
                                    <a className="social"><i class="fab fa-twitter"></i></a>
                                    <a className="social"><i class="fab fa-linkedin"></i></a>
                                    <a className="social"><i class="fab fa-dribbble-square"></i></a>
                                </div>
                            </Row>
                       </Col>
                       <Col lg="4" className="text-white">
                            <h4 className="tags">ABOUT FREELANCERS</h4>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                       </Col>
                   </Row>
               </Container>
            </Container>
        </div>
    )
}

export default Social
