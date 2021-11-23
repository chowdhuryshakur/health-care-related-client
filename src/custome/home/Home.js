import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { Star } from 'react-feather'
import { Link } from 'react-router-dom';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import './home.css'

const Home = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Health is Matter</h3>
            <p>Ensure first about your health safty</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Surgery</h3>
            <p>Happy surgery from our sergant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Medicine</h3>
            <p>Medicine is more than it!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="p-5">
        <h1 className="title">Our Services</h1>
        <p className="subbrand">Some of Our Services</p>
        <Row xs={1} md={3} className="g-4">
          {courses.slice(0, 6).map(course => (
            <Col>
              <Card style={{ backgroundColor: '#EDF2FF' }}>
                <Card.Img style={{ height: '250px' }} variant="top" src={course.picture} />
                <Card.Body>
                  <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{course.name}</Card.Title>
                  <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                    {course.desc}
                  </Card.Text>
                  <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                    Cost: ${course.hadiya}
                  </Card.Text>
                  <Link className="button"
                    to = {`/details/${course._id}`}
                  >View Details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Home;