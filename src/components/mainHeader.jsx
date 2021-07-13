import React, { Component } from "react";

class MainHeader extends Component {
  state = {};
  render() {
    return (
      <div id="mainHeaderText">
        <h2 style={{ whiteSpace: "pre-wrap" }}>
          I’m a <strong>Software Developer</strong> who is passionate about
          developing different applications to make a task easier than ever and
          enabling one to accomplish something in a snap which might have taken
          a while otherwise. I have worked in a team to develop a web-based
          pricing management system, with direct responsibility for implement
          various functionalities in different modules as well as various bug
          fixes.
        </h2>
      </div>
    );
  }
}

export default MainHeader;
