import React from "react";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";

const LoginForm = ({ handleSubmit, onChangeHandler, password, loading }) => {
  return (
    <div className="text-center pt-4">
      <Form onSubmit={handleSubmit}>
        <h5 className="mb-3 mt-4">Login to Your Account</h5>
        <FormGroup className="mb-2">
          <Input type="text" placeholder="Username" />
        </FormGroup>
        <FormGroup className="mb-2">
          <Input
            placeholder="Password"
            value={password}
            onChange={onChangeHandler}
          />
        </FormGroup>
        <div className="d-grid gap-2">
          <Button type="submit" disabled={!password.length || loading}>
            Login{" "}
            {loading && (
              <Spinner animation="grow" role="status" size="sm">
                <span className="sr-only"></span>
              </Spinner>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
