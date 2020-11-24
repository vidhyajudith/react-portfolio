import React from "react";
import Buttons from "./Buttons";

function Landing() {
  return (
    <section id="landing">
      <div className="landing-container">
        <h1>Hello, I'm Vidhya</h1>
        <p>a web developer</p>
        <Buttons
          text="See More"
          link="about"
          smoothScroll="true"
          variant="outline-dark"
          size="lg"
        />
      </div>
    </section>
  );
}
export default Landing;
