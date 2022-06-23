import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import HeadScreen from '../../components/headScreen'
import "../../style/auth.css"

const LoginScreen = () => {
  const navigate = useNavigate(); 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await axios.post("http://localhost:8080/api/user/login",{
      email,password
    }).then(
          res => {
            console.log(res.data)
            localStorage.setItem("userInfo",JSON.stringify(res.data))
          },
          navigate('/home')
    )
      .catch(err=>console.log(err.response.data))
  }

  return (
    <HeadScreen title="Login">
      <Form onSubmit={handleSubmit} className="formcontainer">

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          size="lg"
          type="submit"
          style={{
            filter: "drop-shadow(4px 8px 70px #DC3545)",
            marginBottom: "1rem",
          }}
        >
          Submit
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Not a registered user ?
          <Link
            to="/register"
            style={{
              color: "#DC3545",
              paddingLeft: "0.5rem",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </Col>
      </Row>

    </HeadScreen>
  );
}

export default LoginScreen
