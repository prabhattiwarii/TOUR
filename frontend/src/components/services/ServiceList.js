import React from 'react';
import { Col } from 'reactstrap';

import weatherImg from '../../assets/images/weather.png';
import guideImg from '../../assets/images/guide.png';
import customizationImg from '../../assets/images/customization.png';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Plan your trips effectively by accessing accurate weather forecasts for your destinations. Stay prepared for any weather conditions and make the most of your travel experience.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Experience the expertise and knowledge of our professional tour guides. They will accompany you throughout your journey, providing insights, historical context, and recommendations to make your trip truly memorable.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your travel experience to match your preferences and interests. Our team will work closely with you to design a personalized itinerary, ensuring that every aspect of your trip reflects your unique tastes and desires.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
