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
                <Row>
                    <Col>
                        <img src={Img1} />
                    </Col>
                    <Col><h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h1>Right Side Text</h1>
                        <p>This text is aligned to the right side of the container.</p>
                    </Col>
                    <Col>
                        <img src={Img1} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>









            <Footer />
        </>


    )
}

export default index