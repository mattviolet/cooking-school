import React, { Component } from "react";
import "./Reviews.css";
import { Container, Col, Row } from "react-bootstrap";

export default class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <div className="reviews-container">
          <h1>Reviews</h1>
          <Row>
            <Col>
              I had the best time ever at Matt's! I will definitely be back!
            </Col>
            <Col>
              My wife and I never cook. Matt made it easy for us to learn and
              have fun, not to mention it tasted great!
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
