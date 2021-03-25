import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import './Portfolio.css'
import P1 from './assets/img/portfolio/cabin.png'
import P2 from './assets/img/portfolio/cake.png'
import P3 from './assets/img/portfolio/circus.png'
import P4 from './assets/img/portfolio/game.png'
import P5 from './assets/img/portfolio/safe.png'
import P6 from './assets/img/portfolio/submarine.png'

function Portfolio() {
    return (
        <div id="portfolio">
            <Container fluid sm ="12"  className="my-5">
                <h1 className="my-5 portf">PORTFOLIO</h1>
                <Container className="py-4">
                    <Row>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P1} alt=""></img>
                        </Col>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P2} alt=""></img>
                        </Col>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P3} alt=""></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P4} alt=""></img>
                        </Col>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P5} alt=""></img>
                        </Col>
                        <Col lg="4">
                            <img className="img-thumbnail rounded" src={P6} alt=""></img>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Portfolio
