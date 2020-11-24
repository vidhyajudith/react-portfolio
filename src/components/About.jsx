import React from "react";
import profile from "../images/profile.png";

function About() {
  return (
    <div id="about" className="about">
      <h2 className="heading2">A little about me! </h2>
      <img className="profile-img" src={profile} alt="profile-img" />
      <p>
        I recently completed my engineering at CMR Institute of Technology. My
        major being Electronics and Communication never stopped me from learing
        how to code.
        <br />I love solving problems, whether it's finding the most elegant way
        to a write line of code or figuring out the solutions to puzzles. I have
        a passion for programming and am constantly updating my knowledge with
        the latest trends. <br /> Check out my{" "}
        <a
          href="https://drive.google.com/file/d/1VbUAxAY5yb1ko7U_UzaIZfA5zfnnDu6U/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          RESUME!
        </a>
      </p>
    </div>
  );
}

export default About;
