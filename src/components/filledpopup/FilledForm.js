import React, { Component } from "react";
//import { Calendar } from "../calendar/index.js";
// /import Calendar from "../components/calendar/index";
export const FilledForm = ({ onSubmit }) => {
  

  return (
    <form onSubmit={onSubmit}>
      <div>
      <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">20-04-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">CMPE 172 Midterm</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">5:15 PM - 7:30 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Zoom</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Study hard!</p>
      </div>
      <div>
      <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">15-05-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">Senior Project Presentation</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">6:00 PM - 7:0 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Zoom</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Present senior project</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">05-18-2020</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">CMPE 172 Final</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">5:15 PM - 7:30 PM</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Zoom</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Study hard!</p>
      </div>
    </form>
  );
};

export default FilledForm;