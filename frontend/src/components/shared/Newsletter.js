import React, { useState } from 'react';
import './Newsletter.css';
import { Container, Col, Row } from 'reactstrap';
import maletourist from '../../assets/images/male-tourist.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle the form submission
    console.log(email);
    // You can send the email to your server or perform any other action here
    // For example, you can make an API call to subscribe the user to the newsletter

    // Simulating a successful submission
    setSubmissionStatus('success');
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <form onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn newsletter__btn">
                    Subscribe
                  </button>
                </div>
              </form>
              {submissionStatus === 'success' && (
                <p className="success-message">Subscription successful!</p>
              )}
              <p>
                Stay updated with the latest travel tips, destination guides,
                and exclusive offers. Our newsletter delivers valuable insights
                and inspiration straight to your inbox. Don't miss out on the
                opportunity to enhance your travel experience!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maletourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
