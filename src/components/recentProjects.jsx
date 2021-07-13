import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Icon from "@material-ui/core/Icon";
import { SimpleGrid, Box, Divider } from "@chakra-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const RecentProjects = () => {
  const classes = useStyles();
  return (
    <div className="mid-content-div">
      <div className="left-div-container">
        <div className="left-div-content">
          <p className="" style={{ whiteSpace: "pre-wrap" }}>
            <em>Recent Projects</em>
          </p>
          <hr className="left-div-hr" />
        </div>
      </div>

      <div className="right-div-container">
        <div className="right-div-content">
          <h2 style={{ whiteSpace: "pre-wrap" }}>
            A Web-based platform to track progress and monitor training of newly
            joined trainees for current organization.
          </h2>
          <h2 style={{ whiteSpace: "pre-wrap" }}>
            A Web-based Pricing Management System for a client.{" "}
          </h2>
          <h2 style={{ whiteSpace: "pre-wrap" }}>
            <IconButton
              style={{
                color: "#fff",
                position: "absolute",
                marginLeft: "-50px",
              }}
              aria-label="add an alarm"
              href="https://eventsisland.herokuapp.com/"
              target="_blank"
            >
              <BsBoxArrowUpRight />
            </IconButton>
            A Web application to implement Authentication, Role-based
            Authorization, Routing , etc. in MERN stack.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
