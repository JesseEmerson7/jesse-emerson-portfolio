import { useState } from "react";
import AboutHeader from "./aboutCardHeader";
import jesse1 from "../assets/images/profile-7.jpg";
import ed from "../assets/images/ed.png";
import reactImg from "../assets/images/react.png"
import hob from "../assets/images/profile-1.jpg"

const AboutCard = () => {
  const [myTab, setTab] = useState("about");
  const [aboutText, setText] = useState(<AboutText />);
  //on click of tab changes state of the component to show different information
  const handleTab = (e) => {
    const tabName = e.target.getAttribute("name");
    if (tabName === "about") {
      setTab("about");
      setText(<AboutText />);
    } else if (tabName === "ed") {
      setTab("ed");
      setText(<EdText />);
    } else if (tabName === "skill") {
      setTab("skill");
      setText(<SkillText />);
    } else if (tabName === "hob") {
      setTab("hob");
      setText(<HobText />);
    }
  };
  return (
    <>
      <div className="w-full md:w-5/6 mx-auto pt-10">
        <AboutHeader myTab={myTab} handleTab={handleTab} />
        {aboutText}
        {/* <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
            <img
              src={jesse1}
              alt="Jesse Emerson"
              className="aboutMeImg h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left shadow-lg "
            />
            <p className="aboutText p-0 lg:p-8">
              Hello, I'm Jesse Emerson, a 26-year-old full-stack developer
              residing in Orlando, Florida. Throughout my professional journey,
              I've served in roles such as Shift Manager and two technician
              positions, where I refined my customer service, problem-solving,
              and teamwork skills.
              <br></br>
              <br></br>
              My passion lies in Information Technology, software development,
              and web design. Currently, I am pursuing a bachelor's degree in
              Information Systems Technology with a specialization in software
              development. I've also earned a certification in full-stack web
              development from the University of Central Florida.
              <br></br>
              <br></br>
              Outside of academia, I dedicate my free time to personal projects,
              where I build web applications and continually explore and
              practice new technologies, frameworks, and coding languages. This
              hands-on experience complements my formal education, enriching my
              skills and keeping me at the forefront of the ever-evolving tech
              landscape.
            </p>
          </div> */}
      </div>
    </>
  );
};

const AboutText = () => {
  return (
    <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
      <img
        src={jesse1}
        alt="Jesse Emerson"
        className="aboutMeImg h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left shadow-lg "
      />
      <p className="aboutText p-0 lg:p-8">
        Hello, I'm Jesse Emerson, a 26-year-old full-stack developer residing in
        Orlando, Florida. Throughout my professional journey, I've served in
        roles such as Shift Manager and two technician positions, where I
        refined my customer service, problem-solving, and teamwork skills.
        <br></br>
        <br></br>
        My passion lies in Information Technology, software development, and web
        design. Currently, I am pursuing a bachelor's degree in Information
        Systems Technology with a specialization in software development. I've
        also earned a certification in full-stack web development from the
        University of Central Florida.
        <br></br>
        <br></br>
        Outside of academia, I dedicate my free time to personal projects, where
        I build web applications and continually explore and practice new
        technologies, frameworks, and coding languages. This hands-on experience
        complements my formal education, enriching my skills and keeping me at
        the forefront of the ever-evolving tech landscape.
      </p>
    </div>
  );
};

const EdText = () => {
  return (
    <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
      <img
        src={ed}
        alt="Jesse Emerson"
        className="h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left shadow-lg "
      />
      <p className="aboutText p-0 lg:p-8">I attend Seminole State college</p>
    </div>
  );
};

const SkillText = () => {
  return (
    <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
      <img
        src={reactImg}
        alt="Jesse Emerson"
        className="aboutMeImg h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left shadow-lg "
      />
      <p className="aboutText p-0 lg:p-8">I got skills.</p>
    </div>
  );
};

const HobText = () => {
  return (
    <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
      <img
        src={hob}
        alt="Jesse Emerson"
        className="aboutMeImg h-52 md:h-80 lg:h-80 mx-auto lg:mx-9 float-left shadow-lg "
      />
      <p className="aboutText p-0 lg:p-8">bees.</p>
    </div>
  );
};

export default AboutCard;
