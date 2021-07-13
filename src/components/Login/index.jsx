import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [loading, setloading] = useState(false);

  const onChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("http://my-node-test2.herokuapp.com/bbtest-auth", { password })
      .then((res) => {
        setloading(false);
        setLoginState(true);
        if (res.data) {
          setSuccessMessage(res.data.success);
          setErrorMessage("");
          setPassword("");
        }
      })
      .catch((err) => {
        setloading(false);
        if (err.response) {
          setErrorMessage(err.response.data.error);
        } else {
          setErrorMessage("Something went wrong, try again");
        }
      });
  };

  const handleLogout = () => {
    setLoginState(false);
    setSuccessMessage("");
  };
  return (
    <Container>
      {loginState ? (
        <>
          <h3 className="mt-5 mb-4 text-success">{successMessage}</h3>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Row>
          <Col
            lg={{ size: 4, order: 2, offset: 4 }}
            md={{ size: 6, order: 2, offset: 3 }}
            sm={{ size: 8, order: 2, offset: 2 }}
          >
            <LoginForm
              password={password}
              onChangeHandler={onChangeHandler}
              handleSubmit={handleSubmit}
              loading={loading}
            />
            {!!errorMessage.length && (
              <h6 className="mt-3 text-center text-danger">{errorMessage}</h6>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LoginPage;
