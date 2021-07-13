import React, { Component } from "react";

class ProjectManagementPhylosophy extends Component {
  state = {};
  render() {
    return (
      <div className="mid-content-div" style={{ marginBottom: "5rem" }}>
        <div className="left-div-container">
          <div className="left-div-content">
            <p className="" style={{ whiteSpace: "pre-wrap" }}>
              <em>Project Management Phylosophy</em>
            </p>
            <hr className="left-div-hr" />
          </div>
        </div>

        <div className="right-div-container">
          <div className="right-div-content">
            <p style={{ whiteSpace: "pre-wrap" }}>
              I don’t have one — by which I mean, I am concerned with the
              success of the project and the team, not with the use of a
              particular workflow to get there. I work with the team to design a
              process that makes sense for the organization and supports its
              goals and constantly check in to see how it’s performing.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectManagementPhylosophy;
