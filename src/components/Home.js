/*
Bundling the home page components into one component to hopefully help with rendering
*/
import React, { Component } from "react";
import CoverPage from "./CoverPage";
import Hours from "./Hours";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { Router, Link, RouteComponentProps } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <CoverPage />
        {/* <Link to="/classes"> Check out our classes</Link> */}
        <button
          onClick={() => {
            //api call
            //change to classes page
            this.props.history.push("/courses");
          }}
        >
          Click to see classes!
        </button>
        <Hours />
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default Home;
