import React from "react";
import { useState } from "react";
import {
  Form,
  Input,
  FormFeedback,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

export default function Login() {
  //console.log(process.env.REACT_APP_USERNAME)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidU, setIsValidU] = useState(null);
  const [isValidP, setIsValidP] = useState(null);
  const handleCheckUserName = () => {
    username == process.env.REACT_APP_USERNAME
      ? setIsValidU(true)
      : setIsValidU(false);
  };
  const handleCheckPassword = () => {
    password == process.env.REACT_APP_PW
      ? setIsValidP(true)
      : setIsValidP(false);
  };
  return (
    <div className="row justify-content-center">
      <Form className="myform border shadow p-3">
        <h3>Login Form</h3>
        <FormGroup>
          <Label for="examplePassword">Username:</Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            onBlur={handleCheckUserName}
            className={
              isValidU == null ? "" : isValidU ? "is-valid" : "is-invalid"
            }
          />
          <FormFeedback>Hibás név</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password:</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            onBlur={handleCheckPassword}
            className={
              isValidP == null ? "" : isValidP ? "is-valid" : "is-invalid"
            }
          />
          <FormFeedback>Hibás jelszó</FormFeedback>
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    </div>
  );
}
