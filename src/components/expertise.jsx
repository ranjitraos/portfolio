import React, { Component } from "react";

class Expertise extends Component {
  state = {};
  render() {
    return (
      <div className="mid-content-div">
        <div className="left-div-container">
          <div className="left-div-content">
            <p className="" style={{ whiteSpace: "pre-wrap" }}>
              <em>Areas of Expertise</em>
            </p>
            <hr className="left-div-hr" />
          </div>
        </div>

        <div className="right-div-container">
          <div className="right-div-content">
            <h2 style={{ whiteSpace: "pre-wrap" }}>ASP.Net</h2>
            <h2 style={{ whiteSpace: "pre-wrap" }}>React</h2>
            <h2 style={{ whiteSpace: "pre-wrap" }}>Redux</h2>
            <h2 style={{ whiteSpace: "pre-wrap" }}>javascript</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Expertise;
