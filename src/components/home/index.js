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
import Photo1 from '../../assets/photo1.jpg';
import Photo2 from '../../assets/photo2.jpg';
import Photo3 from '../../assets/photo3.jpg';
import Photo4 from '../../assets/photo4.jpg';
import Card from 'react-bootstrap/Card';




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
        <Row>
          <Col xs={12} md={3} className="mb-3">
            <img src={Photo1} />
          </Col>
          <Col xs={12} md={3} className="mb-3">
            <img src={Photo2} />
          </Col>
          <Col xs={12} md={3} className="mb-3">
            <img src={Photo3} />
          </Col>
          <Col xs={12} md={3} className="mb-3">
            <img src={Photo4} />
          </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={Banner1} height={450} width={1310} />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Banner2} height={450} width={1310} />

        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner3} height={450} width={1310} />

        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className="text-center my-4">
          <Col>
            <h2>What Our Customers Say</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  "This product exceeded my expectations. The quality is outstanding and the service was impeccable."
                </Card.Text>
                <Card.Footer className="text-muted">
                  <strong>Jane Doe</strong><br />
                  CEO, Example Company
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  "An incredible experience from start to finish. Highly recommended for anyone looking for top-notch service."
                </Card.Text>
                <Card.Footer className="text-muted">
                  <strong>John Smith</strong><br />
                  Marketing Director, Another Company
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  "Absolutely wonderful! The team was professional and the results were beyond what I had hoped for."
                </Card.Text>
                <Card.Footer className="text-muted">
                  <strong>Emily Johnson</strong><br />
                  Freelancer
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Text>
                  "A fantastic company with amazing support. They went above and beyond to ensure everything was perfect."
                </Card.Text>
                <Card.Footer className="text-muted">
                  <strong>Michael Brown</strong><br />
                  Business Owner
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>









      <Footer />
    </>

  )

}

export default index