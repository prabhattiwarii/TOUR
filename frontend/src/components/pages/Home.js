import React from 'react'
import '../styles/Home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import exprienceImg from '../../assets/images/experience.png'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from '../shared/Subtitle'


import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../feature-tour/FeaturedTourList'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'
import Testimonial from '../Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
           <Col lg='6'>
            <div className="hero__content">
                 <div className="hero__subtitles d-flex align-items-center">
                  <Subtitle Subtitle={'know Before You Go'}/>
                  <img src={worldImg} alt="" />
                 </div>
                 <h1>Travaling opens the door to creating <span className='highlight'>memories</span></h1>
                 <p>
                 Experience the joy of exploring new destinations and immersing yourself in different cultures.
                 Whether you're seeking adventure or relaxation,
                 travel allows you to create lifelong memories and broaden your horizons.
                 </p>
            </div>
           </Col>
           <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
           </Col>
           <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
           </Col>
           <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
           </Col>
           <SearchBar/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle Subtitle={'Explore'}/>
              <h2 className="featured__tour-title">
                Our featured tour
              </h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle Subtitle={'Experience'}/>

                <h2>with our all experience <br /> we will serve you</h2>
                <p>
                  Traveling is more than just visiting new places. It's about creating lasting memories, immersing yourself in diverse cultures, and discovering the world's hidden gems.
                  We take pride in our successful tours, loyal clientele, and the knowledge we've gained throughout the years.
                  Let us share our passion for travel with you and create an extraordinary experience that will stay with you for a lifetime.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successfull Tour</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regural Client</h6>
                </div>
                <div className="counter__box">
                  <span>10</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="expeince__img">
                <img src={exprienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'Gallery'}/>
              <h2 className='gallery__title'> Visit our customer tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
                <Subtitle Subtitle={'Fans Love'}/>
                <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Home