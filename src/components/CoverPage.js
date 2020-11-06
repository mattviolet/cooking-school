import React, { Component } from "react";
import CoverImage from "../images/school_cover_picture_1.jpg";
import "./CoverPage.css";

const CoverPage = () => (
  <div>
    <div className="container">
      <div className="bg-image">
        <img id="cover-image" src={CoverImage} />
      </div>
      <div className="bg-text">
        <h1>Killian Street Cooking School</h1>
      </div>
    </div>
  </div>
);

export default CoverPage;
