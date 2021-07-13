import React, { Component } from "react";
import MainHeader from "./mainHeader";
import Expertise from "./expertise";
import RecentProjects from "./recentProjects";
import ProjectManagementPhylosophy from "./projectManagementPhylosophy";
import WorkTimeLine from "./workTimeLine";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MainHeader></MainHeader>
        <WorkTimeLine></WorkTimeLine>
        <Expertise></Expertise>
        <RecentProjects></RecentProjects>
        <ProjectManagementPhylosophy></ProjectManagementPhylosophy>
      </React.Fragment>
    );
  }
}

export default Home;
