import React from 'react';
import Header from '../layout/header.js'
import Container from 'react-bootstrap/Container';
import Img1 from '../../assets/img1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../layout/footer.js';


const index = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                    <Col xs={12} md={6} className="text-start">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-end">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                    <Col xs={12} md={6} className="text-start">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-end">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                    <Col xs={12} md={6} className="text-start">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-end">
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={Img1} />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>


    )
}

export default index