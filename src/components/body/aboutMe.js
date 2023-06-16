import "../../assets/css/aboutMe.css";

import profile from "../../assets/images/profile-pic3.jpg";
import profile2 from "../../assets/images/profile-4.jpg";
//replace this pic below
import profile3 from "../../assets/images/profile-2.jpg";
import { useState, useEffect } from "react";


export default function About() {
  const [currentPic, ChangePic] = useState(0);
  const [skillButton, changeSkill] = useState(false);

  const pictureList = [profile, profile2, profile3];

  useEffect(() => {
    const interval = setInterval(() => {
      ChangePic((prevIndex) => (prevIndex + 1) % pictureList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pictureList.length]);

  const toggleSkill = ()=>{
    changeSkill(!skillButton);
  }

  return (
    <>
      <div id="about-me" className="w-full flex flex-col">
        {/* about me section */}
        <section className="flex flex-col md:flex-row md:mt-9">
          <div
            id="pic-container"
            className="flex flex-col text-center md:w-1/3"
          >
            <img
              id="profile-pic"
              src={pictureList[currentPic]}
              alt=" Profile pic"
            />
            <div id="picture-text">
              <p className="text-xl">Jesse Emerson</p>
              <p className=" text-lg">
                MERN stack developer certified by <br />
                the University of Central Florida
              </p>
              <p></p>
            </div>
          </div>
          <div
            id="bio"
            className=" w-[95%] mx-auto mb-5 md:w-2/3 md:h-2/3 md:my-auto md:mx-5"
          >
            <div id="bio-card" className="">
              <div className="">
                <h5 className="text-xl mb-2">Bio</h5>
                <p className="text-xl pb-5 text-center">
                  I am a full stack web developer certified by the University of
                  Central Florida Coding Bootcamp Program. I am proficient in
                  front-end technologies such as: HTML, CSS, and JavaScript.
                  This allows me to create visually appealing and responsive
                  user interfaces. With expertise in frameworks like React.js, I
                  build unique, dynamic, and interactive web applications. On
                  the back-end, I utilize Node.js and Express.js to develop
                  RESTful APIs for data management. I excel at problem-solving,
                  teamwork, and I always pay attention to detail. I'm excited to
                  contribute to cutting-edge projects while continually
                  enhancing my web development skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* skills section */}
        <section className="flex flex-col flex-wrap my-10">
          {/* daisy button start */}
          <div id="skill-scroll" className={skillButton?"collapse bg-base-200 text-amber-200 ":"collapse bg-base-200 "} onClick={toggleSkill}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-center">
              {skillButton?"Skills":"Click to show skill list"}
            </div>
            <div className="collapse-content">
              <marquee id="scroll-text">
              JavaScript ES6+,  CSS3,  HTML5,  SQL,  NoSQL,  GitHub,  MongoDB,  Mongoose,  MySQL,  Sequelize,  Express,  React,  Node,  Handlebars,  jQuery,  Bootstrap,  Tailwind CSS

              </marquee>
            </div>
          </div>
          {/* end */}
        </section>
      </div>
    </>
  );
}
