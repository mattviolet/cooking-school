import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/Courses";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  /*callAPI() {
    fetch("http://localhost:9000/account")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }*/

  /*componentDidMount() {
    this.callAPI();
  }
  
  <div>{this.state.apiResponse}</div>
  */

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={Courses} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
