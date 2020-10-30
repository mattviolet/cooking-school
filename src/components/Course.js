import React, { Component } from "react";
import "./Course.css";
/*
A potential data model for a class.
Title: String
Descritpion : String
Location : String
Date: String
Price : Number
Seats Left: Number
*/

export default class Course extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="course-container">
        <div className="title-section">
          <h3>{this.props.name}</h3>
          <p>${this.props.price}</p>
        </div>
        <div className="description">
          <p>{this.props.description}</p>
        </div>
        <div className="other-info">
          <div>{this.props.location}</div>
          <div>{this.props.seatsLeft} seats left</div>
          <div>{this.props.date}</div>
        </div>
      </div>
    );
  }
}
