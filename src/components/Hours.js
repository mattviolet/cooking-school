import React, { Component } from "react";
import "./Hours.css";

export default class Hours extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="hours">
        <div className="hours-container">
          <h1>School Hours</h1>
          <div className="row">
            <div className="col">Monday</div>
            <div className="col">9AM - 7PM</div>
          </div>
          <div className="row">
            <div className="col">Tuesday</div>
            <div className="col">9AM - 7PM</div>
          </div>
          <div className="row">
            <div className="col">Wednesday</div>
            <div className="col">9AM - 7PM</div>
          </div>
          <div className="row">
            <div className="col">Thursday</div>
            <div className="col">9AM - 7PM</div>
          </div>
          <div className="row">
            <div className="col">Friday</div>
            <div className="col">9AM - 7PM</div>
          </div>
          <div className="row">
            <div className="col">Saturday</div>
            <div className="col">9AM - 9PM</div>
          </div>
          <div className="row">
            <div className="col">Sunday</div>
            <div className="col">9AM - 9PM</div>
          </div>
        </div>
      </div>
    );
  }
}
