import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section id="footerSection">
        <div className="footer-container">
          <h2 style={{ whiteSpace: "pre-wrap" }}>
            If you think I’d be a good fit for your team,{" "}
            <a href="mailto:ranjitrao2702@gmail.com">drop me a line</a> and
            let’s meet.
          </h2>

          <div style={{ padding: "5rem 0 2rem 0" }}>
            <a
              href="https://www.linkedin.com/in/s-ranjit-rao-8b10ab129"
              style={{
                cursor: "pointer",
                color: "black",
                backgroundImage: "none",
              }}
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
