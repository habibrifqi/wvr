// import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../assets/img/hero.png'

import {kelasTerbaru,dataSwiper} from "../data/index"
import {useNavigate} from "react-router-dom"

import FaqComponent from '../components/FaqComponent'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


function HomePage() {
  let navigate = useNavigate();
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col lg='6'>
              <h1 className='mb-4'>Lorem <br /><span>Ipsum Dolor Sit Amet Consectetur</span></h1>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae cupiditate amet, odio quos labore esse corporis explicabo molestiae consequuntur provident eius sed sapiente et inventore reiciendis mollitia sequi vero.
              </p>
              <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2'>Lihat Kelas</button>
              <button  className='btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2'>Lihat Promo</button>
            </Col>
            <Col lg='6' className='pt-lg-0 pt-5'>
            <img src={HeroImage} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className='text-center fw-bold'>Kelas Terbaru</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut placeat, eum minus ipsa Laborum!</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) =>{
              return <Col key={kelas.id} className='shadow-sm rounded'>
                <img src={kelas.image} alt="uplash.com"  className='mb-5 rounded-top'/>
                <div className='start mb-2 px-3'>
                  <i className={kelas.star1}></i>
                  <i className={kelas.star1}></i>
                  <i className={kelas.star1}></i>
                  <i className={kelas.star1}></i>
                  <i className={kelas.star1}></i>
                </div>
                <h5 className='mb-5 px-3'>{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className='m-0 text-primary fw-bold'>{kelas.price}</p>
                  <button className='btn btn-danger rounded-1'>{kelas.buy}</button>
                </div>
              </Col>
            })}
          </Row>
          <Row>
            <Col className='text-center'>
              <button className='btn btn-success rounded-5 btn-lg' onClick={()=> navigate("/kelas")}>Lihat semua kelas  <i className='fa-solid fa-chevron-right ms-3'></i></button>
             
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
            <h1 className='text-center fw-bold my-5'>
              Testimonial
            </h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return <SwiperSlide key={data.id} className='shadow-sm'>
            <p className='desc'>{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt="" />
              <div>
                <h5 className='mb-1'>{data.name}</h5>
                <p className='m-0 fw-bold'>{data.skill}</p>
              </div>
            </div>
          </SwiperSlide>
          
        })}
       
        
      </Swiper>
          </Row>
        </Container>
      </div>

      {/* section FAQ */}
        <FaqComponent />
    </div>
  )
}

export default HomePage
