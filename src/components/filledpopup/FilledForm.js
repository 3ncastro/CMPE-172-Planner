import React from "react";
//import { Calendar } from "../calendar/index.js";
export const FilledForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="date">Event Date</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Event Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input className="form-control" id="time" />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input className="form-control" id="location" />
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
          Delete
        </button>
      </div>
    </form>
  );
};

export default FilledForm;
