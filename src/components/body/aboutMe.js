import { useState, useEffect, useRef } from "react";
import "../../assets/css/aboutMe.css";
import jesse1 from "../../assets/images/profile-7.jpg";
import javaScript from "../../assets/images/javascript.png"
import css from "../../assets/images/csslogo.png"
import html from "../../assets/images/htmllogo.png"
import php from "../../assets/images/php.png"
import jquery  from "../../assets/images/jquery.png"
import cs from "../../assets/images/cs.png"
import graph from "../../assets/images/graphql.png"
import java from "../../assets/images/java.png"
import mongo from "../../assets/images/mongodb.png"
import mongoose from "../../assets/images/mongoose.png"
import mysql from "../../assets/images/mysql.png"
import node from "../../assets/images/node.png"
import rest from "../../assets/images/rest.png"
import seq from "../../assets/images/se.png"
import boot from "../../assets/images/boot.jfif"
import tail from "../../assets/images/tail.png"
import express from "../../assets/images/express.png"

export default function About() {
  //----global var----
  const frontEnd = [javaScript,css,html,jquery,php,boot,tail,rest];
  const backEnd = [node,express,mysql,seq,mongo,mongoose,graph];
  const more = [cs,java];
  const adjectives = [
    "Passionate",
    "Determined",
    "Team Oriented",
    "Organized",
    "Inquisitive",
    "Hard Working",
  ];
  //---- ref ----
  const aboutRef = useRef(null);
  //-------creating state-----
  const [adjText, setAdj] = useState(0);
  // ----useEffect---
  //change adj text on load and add fade in class on change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAdj((adjText) => (adjText + 1) % adjectives.length);
    }, 2300);
    return () => clearInterval(intervalId);
  }, [adjectives.length]);

  //---- function handlers -----
  const handleScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //-----------------jsx return----------------------
  return (
    <div id="about-me-div">
      {/* hero video will be bg of section */}
      <section
        id="heroVideo"
        className=" flex flex-col justify-center items-center"
      >
        {/* div housing the rotating logos - adjectives - learn more btn */}
        <div>
          {/* adjective text */}
          <div
            id="adjSection"
            className="flex justify-center items-center w-full "
          >
            <div className="w-v bg-gray-800 bg-opacity-60 rounded-3xl pb-4">
              <h2 className=" font-bold text-4xl text-center text-white rounded-xl h-20 w-80 flex flex-col justify-center bg-opacity-80">
                {adjectives[adjText]}
              </h2>
              <div
                onClick={handleScroll}
                className="w-full flex justify-center items-center"
              >
                <button className=" forestBtn text-sm font-semibold text-center  rounded bg-opacity-70 p-2  hover:bg-slate-400 duration-500 hover:text-black">
                  Learn More about Jesse
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* logos div */}
        <div className=" w-full">
        {/* <div
          id="my-logs"
          className="flex flex-col md:flex-row gap-2 items-center text-center w-full"
        >
        
          <div className="LogoListDiv flex justify-center">
          {frontEnd.map((image)=>{
            return(
              <img src={image} alt="logo" className="logoImages"/>
            )
          })}
          </div>{" "}
          <div className="LogoListDiv flex justify-center">
          {backEnd.map((image)=>{
            return(
              <img src={image} alt="logo" className="logoImages"/>
            )
          })}
          </div>
          <div className="LogoListDiv flex justify-center">  {more.map((image)=>{
            return(
              <img src={image} alt="logo" className="logoImages"/>
            )
          })}</div>
        </div> */}
        {/* font end back end and more buttons */}
        <div className=" hidden w-full md:gap-28 h-[100%] mt-5 mb-5 md:flex flex-row justify-evenly items-end">
          {/* front */}
          <div className="frontEnd">
            <h3 className="frontBack w-14 md:w-full">Front End</h3>
          </div>
          {/* back */}
          <div className="backEnd">
            <h3 className=" frontBack w-14 md:w-full">Back End</h3>
          </div>
          {/* more */}
          <div className="moreBtn">
            <h3 className="frontBack w-14 md:w-full">More</h3>
          </div>
        </div>
        </div>
        
      </section>
      {/* scrolling bg */}
      <div  className="scrollingBgAbout"></div>
      <section ref={aboutRef} className=" py-3 md:py-40 bg-slate-500">
        {/* about me section div */}
        <div className="w-full md:w-5/6 mx-auto pt-10">
          {/* header div */}
          <div className="flex justify-evenly">
            <h4 className="aboutMeTitle">About me</h4>
            <h4 className="aboutMeTitle">Education</h4>
            <h4 className="aboutMeTitle">Skills</h4>
            <h4 className="aboutMeTitle">Hobbies</h4>
          </div>
          {/* about me body - text to change on click of headers */}
          <div className="flex flex-col md:flex-row aboutDescDiv py-10 px-3">
            <img
              src={jesse1}
              alt="Jesse Emerson"
              className="aboutMeImg h-52 md:h-60 lg:h-80 mx-auto lg:mx-9 float-left "
            />
            <p className="aboutText p-0 lg:p-8">
              I am a full stack web developer certified by the University of
              Central Florida Coding Bootcamp Program. I am proficient in
              front-end technologies such as: HTML, CSS, and JavaScript. This
              allows me to create visually appealing and responsive user
              interfaces. With expertise in frameworks like React.js, I build
              unique, dynamic, and interactive web applications. On the
              back-end, I utilize Node.js and Express.js to develop RESTful APIs
              for data management. I excel at problem-solving, teamwork, and I
              always pay attention to detail. I'm excited to contribute to
              cutting-edge projects while continually enhancing my web
              development skills
            </p>
          </div>
        </div>
      </section>
      {/* scrolling bg */}
      <div className="scrollingBgAbout"></div>
      <section className="bg-slate-500">
        {/* title of work experience */}
        <div className="w-full flex justify-center">
          <h5 className="bg-black w-40 text-center relative bottom-4 p-3 mb-7">
            Work Experience
          </h5>
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
