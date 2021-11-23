import React from 'react';
import a from '../../img/about-banner.jpeg'
import { Container, Row, Col } from 'react-bootstrap';
import './aboutus.css'

const AboutUs = () => {
  const head = {
    position: "absolute",
    top: "450px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main style={{ backgroundColor: '#1F2235' }}>
      <div className="p">
        <img className='w-100' src={a} alt="" />
        <h1 style={head}>About us</h1>
      </div>
      <Container fluid className= 'p-5'>
        <Row className= 'p-3'>
          <Col><h1>Hello. Our institution has been present for over 20 decades in this field. We make the most of all our students.</h1></Col>
          <Col>
            <Row className= 'p-3'>
              <Col className= 'pb-4 pe-3'>
                <h5>
                  We are trying to help ummah by providing good courses bases on various topics. We always committed for providing best content to our students and stackholders.
                </h5>
              </Col>
              <Col>
                <h5>
                  We are trying to help ummah by providing good courses bases on various topics. We always committed for providing best content to our students and stackholders.
                </h5>
              </Col>
            </Row>
            <Row className= 'p-3'>
              <Col>
                <h5>
                  We are trying to help ummah by providing good courses bases on various topics. We always committed for providing best content to our students and stackholders.
                </h5>
              </Col>
              <Col>
                <h5>
                  We are trying to help ummah by providing good courses bases on various topics. We always committed for providing best content to our students and stackholders.
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AboutUs;