import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeadScreen from "../../components/headScreen";
import { Button, Form, Col, Row } from "react-bootstrap";
import "../../style/auth.css";

const RegisterScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post('https://e-food-api.herokuapp.com/api/user/register/',{
      name,email,password,confirmPassword
    }).then(
          res => console.log("response :",res.data),
          navigate('/login')
    )
      .catch(err=>{
        console.log(err.response.data)
        setError(err.response.data)
      })
  };

  return (
    <HeadScreen title="Register">
      <Form onSubmit={handleSubmit} className="formcontainer">
        <Form.Group className="mb-4" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Already Registered ?
          <Link
            to="/login"
            style={{
              color: "#DC3545",
              paddingLeft: "0.5rem",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </Col>

        {error && <Col>{error}</Col>}

      </Row>
    </HeadScreen>
  );
};

export default RegisterScreen;
