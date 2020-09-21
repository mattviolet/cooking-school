import React, { Component } from "react";
import CoverImage from "../images/school_cover_picture_1.jpg";
import "./CoverPage.css";

const CoverPage = () => (
  <div>
    <img id="cover-image" src={CoverImage} />
    <div id="cover-text">Matt's Cooking School</div>
  </div>
);

export default CoverPage;
