import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000, 

    responsive:[
        {
            beakpoint: 992,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
                infinite:true,
                dots: true,
            },
        },
        {
            beakpoint: 576,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
            },
        },
    ]
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
      "I recently went on a tour organized by your company and it was absolutely amazing!
      The itinerary was well-planned, the activities were diverse and exciting, and the tour guide was knowledgeable and friendly.
      I had the time of my life and created lifelong memories. Thank you!"
   
        <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Amit Tiwari</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        "I can't thank your team enough for the incredible tour I went on. From start to finish,
        everything was top-notch. The destinations,
        the accommodations, and the activities exceeded my expectations. It was truly a trip of a lifetime!"
        <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Vanshika Tiwari</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
      "I had an incredible experience with your touring service! The destinations were breathtaking,
       the guides were knowledgeable, and every aspect of the trip was well-organized. Highly recommended!"
      <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Prabhat Tiwari</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
      "Thank you for the unforgettable tour! Your attention to detail and personalized service made
      the trip truly special. I can't wait to book another tour with your team!"
        <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Akash Singh</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
      "I've been on many tours before, but yours exceeded all my expectations. The itinerary was well-balanced,
      the accommodations were comfortable, and the tour guides were exceptional. Thank you for a fantastic experience!"
        <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Rahul Mishra</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
      "I've been on multiple tours with your company and each one has been exceptional!
      The attention to detail, the knowledgeable guides, and the seamless organization make for an incredible experience.
      I highly recommend your touring services to anyone looking for an unforgettable adventure."

        <div className="d-felx align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5>Manish Dahayat</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
