import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function WorkTimeLine() {
  const classes = useStyles();

  return (
    <div className="mid-content-div">
      <div className="left-div-container">
        <div className="left-div-content">
          <p className="" style={{ whiteSpace: "pre-wrap" }}>
            <em>Experience</em>
          </p>
          <hr className="left-div-hr" />
        </div>
      </div>

      <div className="right-div-container" style={{ paddingLeft: 0 }}>
        <div className="timeline-right-div-content">
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" style={{ color: "white" }}>
                  July 2020 - Now
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  style={{ backgroundColor: "rgb(223, 224, 225)" }}
                  className={classes.paper}
                >
                  <Typography variant="h6" component="h1">
                    Software Engineer
                  </Typography>
                  <Typography>@ Mindifire Solutions</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" style={{ color: "white" }}>
                  July 2019 - June 2020
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  style={{ backgroundColor: "rgb(223, 224, 225)" }}
                  className={classes.paper}
                >
                  <Typography variant="h6" component="h1">
                    Trainee Software Engineer
                  </Typography>
                  <Typography>@ Mindifire Solutions</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" style={{ color: "white" }}>
                  January 2019 - June 2019
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  style={{ backgroundColor: "rgb(223, 224, 225)" }}
                  className={classes.paper}
                >
                  <Typography variant="h6" component="h1">
                    Internship
                  </Typography>
                  <Typography>@ Mindifire Solutions</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
