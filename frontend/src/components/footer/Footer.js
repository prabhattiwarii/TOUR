import React from 'react'
import './Footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Footer = () => {

  const year = new Date().getFullYear()


  const quick__links = [
    {
      path: '/gallery',
      display: 'Gallery',
    },
    {
      path: '/login',
      display: 'Login',
    },
    {
      path: '/register',
      display: 'Register',
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <img src={logo} alt="" />
            <p>Welcome to our travelworld! Explore the world with our amazing tour packages.</p>

             <div className="social__links d-flex align-items-center gap-4 ">
             <Link to="/youtube"><i className="ri-youtube-line"></i></Link>
              <a href="https://github.com/prabhattiwarii"><i className="ri-github-fill"></i></a>
              <Link to="/facebook"><i className="ri-facebook-circle-line"></i></Link>
              <Link to="/instagram"><i className="ri-instagram-line"></i></Link>
             </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-titile'>Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>  
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-titile'>Quick Links</h5>
              <ListGroup className='footer__quick-links'>
                {
                  quick__links.map((item, index)=>(
                    <ListGroupItem key={index} className='ps-0 border-0'>  
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-titile'>Contact</h5>
              <ListGroup className='footer__quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span ><i className="ri-map-pin-line"></i></span>
                      Address:
                    </h6>

                    <p className='mb-0'>Rewa, India</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span ><i className="ri-mail-line"></i></span>
                      Email:
                    </h6>
                    <p className='mb-0'>anubhav9301@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span ><i className="ri-map-pin-line"></i></span>
                      Phone:
                    </h6>

                    <p className='mb-0'>+9301829416</p>
                </ListGroupItem>
              </ListGroup>
          </Col>
          <Col  lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year}, design and developed by Prabhat Tiwari. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer