import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/login";
import index from "./components/calendar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/calendar" component={index} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
