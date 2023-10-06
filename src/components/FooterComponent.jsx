// import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className='footer py-5'>
      <Container>
        <Row>
          <Col>
            <h3 className='fw-bold'>BVR</h3>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse tempora sapiente culpa nobis, debitis dolorem amet obcaecati eum enim sunt ratione at molestias ipsam eos distinctio atque aliquam laboriosam?</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+62 0934019840981</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                  <p className='m-0'>asdas@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col'>
            <h5 className='fw-bold'>Menu</h5>
            <Link to="">Home</Link>
            <Link to="keals">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat dan jetentuan</Link>
          </Col>
          <Col>
            <h5>Subscribe untuk info menarik</h5>
            <div className='subscribes'>
              <input type="text" placeholder='asd' />
              <button>subcuy</button>
            </div>
            <div className='social'>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-youtube'></i>
              <i className='fa-brands fa-linkedin'></i>
              <i className='fa-brands fa-twitter'></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
 