import React, { useState, useContext } from 'react';
import '../styles/Login.css';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import registerImg from '../../assets/images/register.png';
import userIcon from '../../assets/images/user.png';
import { Link , useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';
import { BASE_URL } from '../../utils/config.js';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
  });


  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
    // Handle form submission
    try{
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json()

      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    }catch(err){
      alert(err.message);
    }
  };



  return (
    <section className="login-section">
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
            <img src={registerImg} alt="Login" />
            </div>
            <div className="login__form">
              <div className="user">
              <img src={userIcon} alt="User Icon" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                <Label for="userName">Username</Label>
                  <Input type="text"  id="username" placeholder="Enter your username" onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} required />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit' block>Create Acccount</Button>
              </Form>
              <p>Allready have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
