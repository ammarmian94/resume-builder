import "./App.css";
import Resume from "./components/Resume";

function App() {
  let resume = {
    fName: "Ahmad",
    lName: "Goraya",
    email: "ahmadprince@gmail.com",
    phone: "+92090078601",
    position: "Front-end Developer",
    desc: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
    experience: [
      {
        cname: "KlowdBox",
        addr: "San Fr, CA",
        duration: "Jan 2011 - Feb 2015",
        name: "Fr developer",
        desc: "did This and that",
      },
      {
        cname: "KlowdBox",
        addr: "San Fr, CA",
        duration: "Jan 2011 - Feb 2015",
        name: "Fr developer",
        desc: "did This and that",
      },
    ],
    education: [
      {
        iname: "Sample Institute of technology",
        addr: "San Fr, CA",
        duration: "Jan 2011 - Feb 2015",
        name: "Fr developer",
        desc: "did This and that",
      },
      {
        iname: "Akount",
        addr: "San Fr, CA",
        duration: "Jan 2011 - Feb 2015",
        name: "Fr developer",
        desc: "did This and that",
      },
    ],
    projects: [
      {
        name: "DSP",
        desc: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      },
      {
        name: "DSP",
        desc: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      },
    ],
    skills: ["Javascript", "CSS"],
    interests: ["Footbal", "Programming"],
  };
  return <Resume {...resume}></Resume>;
}

export default App;
