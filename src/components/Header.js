import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Header.css'
import image from './assets/img/avataaars.svg'

function Header() {
    return (
        <div id="header">
            <Container fluid className="jumb d-flex flex-column justify-content-center pt-5 pb-4">
                <Container>
                    <Row>
                        <Col>
                            <img className="mb-5" style={{height:"240px",width:"254.5px"}} src={image} alt="" />
                            <h1 className="masthead-heading .masthead text-uppercase mb-0 tagsss">Start Bootstrap</h1>
                            <p className="mt-3 mb-0 pt-3 ggg">Graphic Artist - Web Designer - Illustrator</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Header
