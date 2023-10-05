import "../../assets/css/aboutMe.css";
import jax from "../../assets/images/jax.jpg";
import heroVid from "../../assets/videos/hero.mp4";
import jesse1 from "../../assets/images/profile-7.jpg";

// import { useState, useEffect } from "react";

export default function About() {

  //-----------------jsx return----------------------
  return (
    <div id="about-me-div">
      {/* hero video will be bg of section */}
      <section
        id="heroVideo"
        className=" flex flex-col justify-center items-center  bg-black"
      >
        {/* div housing the rotating logos - adjectives - learn more btn */}
        <div>
          {/* adjective text */}
          <div
            id="adjSection"
            className="flex justify-center items-center w-full"
          >
            <div className="w-vw">
              <h2 className="mb-10 font-bold text-4xl">Passionate</h2>
              <div className="w-full flex justify-center items-center">
                <button className=" text-sm font-semibold text-center bg-slate-300 bg-opacity-30 p-2 rounded-lg hover:bg-slate-400 duration-500 hover:text-black">
                  Learn More about Jesse
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* logos div */}
        <div id="my-logs" className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-center">
        <div className="LogoListDiv">Jquery, React, CSS, HTML, JavaScript, PHP, RESTful API calls</div>  <div className="LogoListDiv">Node, Express, MySQL, Sequilize, MongoDB, mongoose, GraphQL, API development </div>
        <div className="LogoListDiv">C#, Java</div>
        </div>
        {/* font end back end and more buttons */}
        <div className=" w-[80%] h-[100%] mt-5 mb-5 flex flex-row justify-between items-end">
          {/* front */}
          <div className="frontEnd">
            
            <h3 className="btn w-14 md:w-full">Front End</h3>
          </div>
          {/* back */}
          <div className="backEnd">
           
            <h3 className="btn w-14 md:w-full">Back End</h3>
          </div>
          {/* more */}
          <div className="moreBtn">
            
            <h3 className="btn w-14 md:w-full">More</h3>
          </div>
        </div>
      </section>
      {/* scrolling bg */}
      <div id="scrollingBgAbout" className="h-20 bg-slate-400"></div>
      <section className=" py-3 md:py-40 bg-slate-500">
        {/* about me section div */}
        <div className="w-full md:w-5/6 mx-auto pt-10">
          {/* header div */}
          <div className="flex justify-evenly">
            <h4 className="aboutMeTitle">About me</h4>
            <h4 className="aboutMeTitle">Education</h4>
            <h4 className="aboutMeTitle">Hobbies</h4>
          </div>
          {/* about me body - text to change on click of headers */}
          <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
          <img src={jesse1} alt="Jesse Emerson" className="aboutMeImg h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left "/>
          <p className="aboutText p-0 lg:p-8">
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
          
        </div>
      </section>
      {/* scrolling bg */}
      <div className="bg-white h-20"></div>
      <section className="bg-slate-500">
        {/* title of work experience */}
        <div className="w-full flex justify-center">
          <h5 className="bg-black w-40 text-center relative bottom-4 p-3 mb-7">Work Experience</h5>
        </div>
        {/* cards for work */}
        <div className="md:h-fit flex flex-col md:flex-row gap-6 md:gap-4 px-2 md:px-6 md:pt-5 pb-10">
          {/* card one for bees */}
          <div className=" jobCard w-full md:w-1/3 h-5/6">
            {/* img */}
            <p className="workTitle ">Bee Keeper</p>
            <p>info about this job</p>
          </div>
          {/* card about fire inspector */}
          <div className=" jobCard w-full md:w-1/3 h-5/6">
            {/* img */}
            <p className="workTitle ">Fire Alarm Technician</p>
            <p>info about this job</p>
          </div>
          {/* card about 1000 degrees */}
          <div className="jobCard w-full md:w-1/3 h-5/6">
            {/* img */}
            <p className="workTitle ">1000 Degrees Pizza</p>
            <p>Info about this job</p>
          </div>
        </div>
      </section>
    </div>
  );
}
