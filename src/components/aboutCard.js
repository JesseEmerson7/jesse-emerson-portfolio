import { useState } from "react";
import AboutHeader from "./aboutCardHeader";
import jesse1 from "../assets/images/profile-7.jpg";
import ed from "../assets/images/ed.png";
import reactImg from "../assets/images/react.png";
import javaScript from "../assets/images/javascript.png";
import css from "../assets/images/csslogo.png";
import html from "../assets/images/htmllogo.png";
import php from "../assets/images/php.png";
import jquery from "../assets/images/jquery.png";
import cs from "../assets/images/cs.png";
import graph from "../assets/images/graphql.png";
import java from "../assets/images/java.png";
import mongo from "../assets/images/mongodb.png";
import mongoose from "../assets/images/mongoose.png";
import mysql from "../assets/images/mysql.png";
import node from "../assets/images/node.png";
import rest from "../assets/images/rest.png";
import seq from "../assets/images/se.png";
import boot from "../assets/images/boot.jfif";
import tail from "../assets/images/tail.png";
import express from "../assets/images/express.png";
import hiking from "../assets/images/hiking.jpg";
import gardening from "../assets/images/gardening.jpg";
import beekeeping from "../assets/images/beekeeping.jpg";
import BeeAware from "../assets/images/BeeAware.png";

const AboutCard = ({ handlePageChange, renderPage }) => {
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

  const handlePortBtn = () => {
    handlePageChange("portfolio");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full md:w-5/6 mx-auto pt-10">
        <AboutHeader myTab={myTab} handleTab={handleTab} />
        {aboutText}
      </div>
      <buttoon id="viewPort" className="btn mt-2" onClick={handlePortBtn}>
        View Portfolio
      </buttoon>
    </div>
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
        Hello, I'm Jesse Emerson, a 27-year-old full-stack developer based in
        Orlando, Florida. In my professional journey, I've had the opportunity
        to work as a Web Developer at a startup, where I honed my front-end and
        JavaScript skills by building a crypto wallet dashboard application that
        integrates with web APIs to dynamically display user wallet information.
        Additionally, I served as a Data Intelligence Intern at Bayer Crop
        Science, where I developed dashboards for large data sets and created
        data visualization tools to help employees gain deeper insights into
        their information.
        <br></br>
        <br></br>
        My passion lies in information technology, software development, and web
        design. Currently, I am pursuing a bachelor's degree in Information
        Systems Technology with a specialization in programming. I've also
        earned a certification in full-stack web development from the University
        of Central Florida.
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
      <div>
        <p className="aboutText p-0 lg:p-8">
          I am currently attending Seminole State College for my bachelors in
          <a
            className=" text-blue-800 hover:text-stone-900 hover:underline"
            href="https://www.seminolestate.edu/catalog/programs/ist-bs"
            target="blank"
          >
            {" "}
            Information Systems Technology
          </a>{" "}
          with a specialization in programming.
        </p>
        <p className="aboutText p-0 lg:p-8">
          I have a certification in full-stack web development from the
          University of Central Florida's{" "}
          <a
            className=" text-blue-800 hover:text-stone-900 hover:underline"
            href="https://api.badgr.io/public/assertions/GtDchawlSKCrzqRE2EH0yA?identity__email=jesseemerson7%40gmail.com"
            target="blank"
          >
            Coding Boot Camp.
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

const SkillText = () => {
  const frontEnd = [
    javaScript,
    css,
    html,
    jquery,
    php,
    boot,
    tail,
    rest,
    reactImg,
  ];
  const backEnd = [node, express, mysql, seq, mongo, mongoose, graph];
  const more = [cs, java];
  return (
    <div className="flex flex-col items-center aboutDescDiv text-center py-10 px-3">
      <div>
        <h4 className=" font-bold">Transferable</h4>
        <p>
          Quick Learner, Calm under pressure, excellent communication,
          leadership experience, and adaptable.{" "}
        </p>
      </div>
      <div>
        <h4 className=" font-bold">Front End</h4>
        <div className="LogoListDiv flex justify-center flex-wrap">
          {frontEnd.map((image) => {
            return <img src={image} alt="logo" className="logoImages" />;
          })}
        </div>
      </div>
      <div>
        <h4 className=" font-bold">Back End</h4>
        <div className="LogoListDiv flex justify-center flex-wrap">
          {backEnd.map((image) => {
            return <img src={image} alt="logo" className="logoImages" />;
          })}
        </div>
      </div>
      <div>
        <h4 className=" font-bold">More Languages</h4>
        <div className="LogoListDiv flex justify-center flex-wrap">
          {more.map((image) => {
            return <img src={image} alt="logo" className="logoImages" />;
          })}
        </div>
      </div>
    </div>
  );
};

const HobText = () => {
  return (
    <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3 justify-center text-center">
      <div>
        <img src={gardening} alt="tomatoes" className="h-64 mx-auto" />
        <h4>Gardening</h4>
      </div>
      <div>
        <img src={hiking} alt="forest" className="h-64 mx-auto" />
        <h4>Hiking</h4>
      </div>
      <div>
        <img src={beekeeping} alt="bees" className="h-64 mx-auto" />
        <h4>BeeKeeping</h4>
      </div>
      <div>
        <img
          src={BeeAware}
          alt="website profile page"
          className="h-64 mx-auto"
        />
        <h4>web development</h4>
      </div>
    </div>
  );
};

export default AboutCard;
