import "../../assets/css/aboutMe.css";
import jax from "../../assets/images/jax.jpg";

// import { useState, useEffect } from "react";

export default function About() {
  return (
    <>
      {/* hero video will be bg of section */}
      <section id="heroMp4">
        <div>
          {/* div housing the rotating logos - adjectives - learn more btn */}
          <div>
            {/* adjective text */}
            <div>
              <h2>Passionate</h2>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        {/* font end back end and more buttons */}
        <div>
          {/* front */}
          <div className="frontEnd">
            <div className="LogoListDiv"></div>
            <h3>Front End</h3>
          </div>
          {/* back */}
          <div className="backEnd">
            <div className="LogoListDiv"></div>
            <h3>Back End</h3>
          </div>
          {/* more */}
          <div className="moreBtn">
            <div className="LogoListDiv"></div>
            <h3>More</h3>
          </div>
        </div>
      </section>
      {/* scrolling bg */}
      <div id="scrollingBgAbout"></div>
      <section>
        {/* about me section div */}
        <div>
          {/* header div */}
          <div>
            <h4 className="aboutMeTitle">About me</h4>
            <h4 className="educationTitle">Education</h4>
            <h4 className="hobbiesTitle">Hobbies</h4>
          </div>
          {/* about me body - text to change on click of headers */}
          <img alt="Jesse Emerson" />
          <p className="aboutText">
            I am a full stack web developer certified by the University of
            Central Florida Coding Bootcamp Program. I am proficient in
            front-end technologies such as: HTML, CSS, and JavaScript. This
            allows me to create visually appealing and responsive user
            interfaces. With expertise in frameworks like React.js, I build
            unique, dynamic, and interactive web applications. On the back-end,
            I utilize Node.js and Express.js to develop RESTful APIs for data
            management. I excel at problem-solving, teamwork, and I always pay
            attention to detail. I'm excited to contribute to cutting-edge
            projects while continually enhancing my web development skills
          </p>
        </div>
      </section>
      <section>
        {/* title of work experience */}
        <div>
          <h5>Work Experience</h5>
        </div>
        {/* cards for work */}
        <div>
          {/* card one for bees */}
          <div>
            {/* img */}
            <p className="workTitle">Bee Keeper</p>
            <p>info about this job</p>
          </div>
          {/* card about fire inspector */}
          <div>
            {/* img */}
            <p>Fire Alarm Technician</p>
            <p>info about this job</p>
          </div>
          {/* card about 1000 degrees */}
          <div>
            {/* img */}
            <p>1000 Degrees Pizza</p>
            <p>Info about this job</p>
          </div>
        </div>
      </section>
    </>
  );
}
