import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onChangeHandler = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
  };
  return (
    <Container>
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
          <div className="mt-2">Invalid password</div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
