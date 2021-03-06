import React, { useState, Fragment } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";

export default function ShowEvents() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {controlId, value} = event.target;
    this.setState({[controlId]:value});
    console.log(this.state);
    history.push("/calendar");
  }

  return (
    <div className="Login">
      <h1 className="textLogo">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
      </form>
    </div>
  );
}
