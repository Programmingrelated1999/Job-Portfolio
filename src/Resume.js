import React from "react";
import "./Resume.css";
import pdf from "./resume2.0.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h4 className="resume-text">
        Wanna Learn more about me? Click the button to get a copy of my resume
      </h4>
      <a href={pdf} download>
        <button type="submit" className="button">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
