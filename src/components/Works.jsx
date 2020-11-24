import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Works() {
  return (
    <section id="works">
      <h2 className="heading2">Personal projects and Resume</h2>
      <hr />

      <Button as={Link} to="/projects" className="m-2" variant="dark">
        Projects
      </Button>
      <a
        href="https://drive.google.com/file/d/1VbUAxAY5yb1ko7U_UzaIZfA5zfnnDu6U/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button className="m-2" variant="outline-dark">
          My Resume
        </Button>
      </a>
    </section>
  );
}

export default Works;
