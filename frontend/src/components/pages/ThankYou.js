import React from 'react';
import '../styles/Thankyou.css'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you">
    <span>
        <i className='ri-checkbox-circle-line'></i>
    </span>
      <h1 className="thank-you__title">Thank You!</h1>
      <p className="thank-you__message">
        We appreciate your booking. We can't wait to create amazing memories with you!
      </p>
      <h6>Your tour is booked.</h6>
      <Button className='btn primary__btn'><Link to='/home'>Back to home</Link></Button>
    </div>
  );
};

export default ThankYou;
