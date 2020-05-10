import React, { Component } from "react";
//import { Calendar } from "../calendar/index.js";
// /import Calendar from "../components/calendar/index";
export const FilledForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <p class="text-lg-center font-weight-bold">Date</p>
        <p class="text-lg-center ">Put the Date Here</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Event Name</p>
        <p class="text-lg-center ">Put the Name Here</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Time</p>
        <p class="text-lg-center ">Put the Time Here</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Location</p>
        <p class="text-lg-center ">Put the Location Here</p>
      </div>
      <div>
        <p class="text-lg-center font-weight-bold">Description</p>
        <p class="text-lg-center ">Put the Description Here</p>
      </div>
    </form>
  );
};

export default FilledForm;
