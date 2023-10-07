import { useState, useEffect, useRef } from "react";
import "../../assets/css/aboutMe.css";
import AboutCard from "../aboutCard"

export default function About() {
  //----global var----
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
      {/* hero will be bg of section */}
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
      <div className="scrollingBgAbout"></div>
      <section className=" py-3 md:py-40 ">
        {/* about me section div */}
        <div ref={aboutRef}>
        <AboutCard />
        </div>
        
        
      </section>
      {/* scrolling bg */}
      <div className="scrollingBgAbout"></div>
      {/* <section className="">
        
        <div className="w-full flex justify-center">
          <h5 className="bg-black w-40 text-center relative bottom-4 p-3 mb-7">
            Work Experience
          </h5>
        </div>
    
        <div className="md:h-fit flex flex-col md:flex-row gap-6 md:gap-4 px-2 md:px-6 md:pt-5 pb-10">
       
          <div className=" jobCard w-full md:w-1/3 h-5/6">
          
            <p className="workTitle ">Bee Keeper</p>
            <p>info about this job</p>
          </div>
          {/* card about fire inspector 
          <div className=" jobCard w-full md:w-1/3 h-5/6">
        
            <p className="workTitle ">Fire Alarm Technician</p>
            <p>info about this job</p>
          </div>
        
          <div className="jobCard w-full md:w-1/3 h-5/6">
            
            <p className="workTitle ">1000 Degrees Pizza</p>
            <p>Info about this job</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
