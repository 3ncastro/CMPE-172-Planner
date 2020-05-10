import React, {Component, useState, Fragment } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
export const Form = ({ onSubmit }) => {
  const history = useHistory();
  class Form extends Component {
  
    constructor(props)
    {
    
      super(props);
      this.state={
        name:'',
        time:'',
        location:'',
        description:''
      }
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const{id, value} = event.target;
    this.setState({[id]:value});
    console.log(this.state);
    history.push("/calendar");
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Event Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input className="form-control" id="time"/>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input className="form-control" id="location"/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="description" />
      </div>
      {/* <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div> */}
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
