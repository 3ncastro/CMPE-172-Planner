import React, { Component } from "react";
//import { Calendar } from "../calendar/index.js";
// /import Calendar from "../components/calendar/index";
export const FilledForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <p class="text-lg-center font-weight-bold">All Events</p>
      <hr />
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">20-04-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">Testing</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">6:00 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Home</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Testing Phone</p>
      </div>
      <hr />
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">20-04-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">Testing</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">6:00 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Home</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Testing Phone</p>
      </div>
      <hr />
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">18-05-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">CMPE 172 Final</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">6:00 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Zoom</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Study</p>
      </div>
      <hr />
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">09-03-2021</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">Concert</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">7:00 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">SJSU Event Center</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Bring Ticket!</p>
      </div>
    </form>
  );
};

export default FilledForm;
