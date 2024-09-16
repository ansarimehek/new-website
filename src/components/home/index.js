import React from 'react'
import Header from '../layout/header.js'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import Banner4 from '../../assets/banner4.jpg';
import Banner5 from '../../assets/banner5.jpg';
import Banner6 from '../../assets/banner6.jpg';
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
          <img src={Banner1} height={750} width={1310} />
          <Carousel.Caption>
            {/* <h3></h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Banner2} height={750} width={1310} />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner3} height={750} width={1310} />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            <img src={Img1} />
          </Col>
          <Col>
            <h1>GLOBAL VILLAGE</h1>
            <p>Global Village Dubai is a vibrant cultural and entertainment destination
              that brings together the best of the world’s cultures in one place.  
              Global Village in Dubai is a popular cultural, entertainment, and shopping destination that offers a unique experience 
              combining diverse cultural themes with a wide range of attractions. 
              Global Village in Dubai offers a vibrant and diverse experience, combining international culture, entertainment, shopping, and dining.
              It's a place where visitors can explore the world's cultures in one location, enjoy live performances, and indulge in a variety of activities.
              Whether you're interested in shopping, dining, or experiencing different cultures, Global Village provides a unique and enjoyable destination in Dubai.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row md={4}>
          <Col><img src={Photo1} height={300} width={270} /></Col>
          <Col xs={6}> <img src={Photo2} height={300} width={270} /></Col>
          <Col> <img src={Photo3} height={300} width={270} /></Col>
          <Col> <img src={Photo4} height={300} width={270} /></Col>
        </Row>
      </Container>


      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={Banner4} height={650} width={1310} />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Banner5} height={650} width={1310} />

        </Carousel.Item>
        <Carousel.Item>
          <img src={Banner6} height={650} width={1310} />

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