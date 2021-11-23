import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './doctor.css'
import { Card, Row, Col } from 'react-bootstrap';

const Teachers = () => {
  const [teachers, setTeachers] = useState([])
  useEffect(() => {
    fetch('./scholars.json')
      .then(res => res.json())
      .then(data => setTeachers(data))
  }, [])
  const head = {
    position: "absolute",
    top: "200px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main>
      <div className="p">
        <img style={{ height: '200px' }} className='w-100' src={a} alt="" />
        <h1 style={head}>Our Doctors</h1>
      </div>
      <div className="p-5">
        <Row xs={1} md={3} className="g-5">
          {teachers.slice(0, 6).map(teacher => (
            <Col>
              <Card>
                <Card.Img style={{height: '300px'}} variant="top" src={teacher.picture} />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>
                    Expert: {teacher.major}
                  </Card.Text>
                  <Card.Text>
                    Email: {teacher.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Teachers;