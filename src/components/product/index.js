import Header from '../layout/header.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo2 from '../../assets/photo2.jpg';
import Footer from '../layout/footer.js';


function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Searching for: ${query}`);
    // Implement search logic here
  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>

      <section>

        <Container>
          <Row className="g-4">
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
            <Col><img src={Photo2} /></Col>
          </Row>
        </Container>
        
      </section>

      
      <Footer />

    </>
  );
}

export default SearchBar;


