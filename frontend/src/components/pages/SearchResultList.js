import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection.js';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard.js';
import Newsletter from '../shared/Newsletter.js'
const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
 

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {
              data.length ===0 ?Col(
                <h4 className="text-center">No Tour found</h4>
              ) : (
                data?.map(tour => (
                  <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour}/> 
                  </Col>
                  ))
              )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default SearchResultList;
