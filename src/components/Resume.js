import "./Resume.css";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Interests from "./Interests";

function Resume({
  fName,
  lName,
  email,
  phone,
  position,
  desc,
  experience,
  education,
  projects,
  skills,
  interests,
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{fName}</span>
            <span className="last-name">{lName}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{email}</span>
            <span className="separator" />
            <span className="phone">Phone: </span>
            <span className="phone-val">{phone}</span>
          </div>
          <div className="about">
            <span className="position">{position}</span>
            <span className="desc">{desc}</span>
          </div>
        </div>
        <div className="details">
          <Experience {...education}></Experience>
          <Education></Education>
          <Projects></Projects>
          <Skills></Skills>
          <Interests></Interests>
        </div>
      </div>
    </>
  );
}

export default Resume;
