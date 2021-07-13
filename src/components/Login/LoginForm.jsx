import React from "react";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";

const LoginForm = ({ handleSubmit, onChangeHandler, password, loading }) => {
  return (
    <div className="text-center pt-4">
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 font-weight-bold">Login to your account</div>
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
          {loading ? (
            <Button
              type="submit"
              color="success"
              disabled
              block
              variant="success"
            >
              <span className="p-1">
                <Spinner animation="grow" role="status" size="sm">
                  <span className="sr-only"></span>
                </Spinner>
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              color="success"
              disabled={!password || loading}
              block
              variant="success"
            >
              Login
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
