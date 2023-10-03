import React, { useState } from "react";

import Lottie from "lottie-react";
import Github from "../assets/github.json";
import Linkedin from "../assets/linkedin11.json";

function Footer() {
  const [linkedinStopped, setLinkedinStopped] = useState(false);
  const [githubStopped, setGithubStopped] = useState(false);

  const onMouseEnterLinkedin = () => {
    setLinkedinStopped(true);
    console.log("LinkedIn animate");
  };

  const onMouseLeaveLinkedin = () => {
    setLinkedinStopped(false);
    console.log("LinkedIn stop");
  };

  const onMouseEnterGithub = () => {
    setGithubStopped(true);
    console.log("GitHub animate");
  };

  const onMouseLeaveGithub = () => {
    setGithubStopped(false);
    console.log("GitHub stop");
  };

  return (
    <footer>
      <div className="down">
        <section className="socials">
          <div className="social-icons-container">
            <a
              href="https://github.com/temez26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="icon-container1"
                onMouseEnter={onMouseEnterGithub}
                onMouseLeave={onMouseLeaveGithub}
              >
                <Lottie animationData={Github} loop={githubStopped} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/teemu-kalmari-755469169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="icon-container"
                onMouseEnter={onMouseEnterLinkedin}
                onMouseLeave={onMouseLeaveLinkedin}
              >
                <Lottie animationData={Linkedin} loop={linkedinStopped} />
              </div>
            </a>
          </div>
        </section>

        <section className="footer-section">
          <section>
            {" "}
            <p>Bonkkers oy</p>
          </section>
          <section>
            <p>Teemu Kalmari</p>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
