import React, { Component } from "react";
import Course from "./Course";
import "./Courses.css";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      visible: false,
    };
  }

  async componentDidMount() {
    //call api to get courses
    const url = "http://localhost:9000/courses";
    const response = await fetch(url);
    const data = await response.json();
    //set new state

    this.setState({
      courses: data,
    });
    console.log(data);
  }

  render() {
    return (
      <div className="courses-container">
        <h1>Current Classes</h1>
        <div className="courses">
          {this.state.courses.map((course, i) => (
            <Course
              key={course.id}
              name={course.name}
              price={course.price}
              location={course.location}
              description={course.description}
              seatsLeft={course.seats_left}
              date={course.date}
            />
          ))}
        </div>
        {/* <Course
          name="test"
          price={20}
          location="Atlanta, GA"
          description="this is the description for a class! It's going to be tons of fun."
          seatsLeft={10}
          date="11-17-2020"
        />
        <Course
          name="test"
          price={20}
          location="Atlanta, GA"
          description="this is the description for a class! It's going to be tons of fun."
          seatsLeft={10}
          date="11-17-2020"
        />*/}
        <button
          onClick={() => {
            //api call
            //change to courses page
            this.props.history.push("/");
          }}
        >
          Click here to go back home
        </button>
      </div>
    );
  }
}

export default Courses;
