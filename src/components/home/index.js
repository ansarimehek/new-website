import React from 'react'
import Header from '../layout/header.js'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import Container from 'react-bootstrap/Container';
import Img1 from '../../assets/img1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../layout/footer.js';




const index = () => {
  return (
    <>
      <Header />

      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={Banner1} height={450} width={1310} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Banner2} height={450} width={1310} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner3} height={450} width={1310} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col xs={6} md={4} >
            <img src={Img1} height={300} width={350} />
          </Col>
          <h1 className='justify-content-end'>
            Lorem ipsum Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h1>
        </Row>
      </Container>

    

      <Footer />
    </>


  )
}

export default index