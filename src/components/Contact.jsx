import React from "react";
import { Button } from "react-bootstrap";
function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact">
      <h2 className="heading2">Contact Me</h2>
      <hr />
      <div className="contact-me">
        <p>Would love to get in touch with you and have a chat!</p>
        <Button variant="outline-light" href="mailto:vidhya.zorro@gmail.com">
          CONTACT ME
        </Button>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/vidhya-judith-09172919b"
        >
          LinkedIn
        </a>
        <a className="footer-link" href="https://github.com/vidhyajudith">
          Github
        </a>
        <p className="footer-p">Vidhya Judith {year}.</p>
      </div>
    </section>
  );
}

export default Contact;
