import "../../assets/css/portfolio.css";
import picture from "../../assets/images/afternoon-peak-41409.herokuapp.com_ (1).png";
import weatherApp from "../../assets/images/weather-app.png";
import bite from "../../assets/images/bite-bud.png";
import back from "../../assets/images/backend.png";
import test from "../../assets/images/test.png";
import pass from "../../assets/images/password.png";
import BeeAware from "../../assets/images/BeeAware.png";
import Hero from "../Hero";
import simple from "../../assets/images/simplicity.png";
import wordPress from "../../assets/images/wordPress.png";
import { useEffect } from "react";

export default function Portfolio() {
  //on load the page will scroll to the top of the port
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 0,
      name: "BeeAware",
      desc: "Full stack web application designed to inform users about Florida local pollinators and their importance. Users can view an information page and learn about various local bees, and post on the websites blog page for all to view.",
      tech: "MongoDB, Express, React, Node, Mongoose, React-Router, Tailwind CSS, GraphQL, Apollo",
      contrib: "",
      image: BeeAware,
      webPage: "https://radiant-ocean-19328.herokuapp.com/",
      gitHub: "https://github.com/JesseEmerson7/BeeAware",
    },

    {
      id: 1,
      name: "Simplicity Login",
      desc: "Florida Realtor's Form Simplicity login page recreated using React.",
      tech: "React, Tailwind, CSS",
      contrib: "",
      image: simple,
      webPage: "https://jesseemerson7.github.io/simplicity-login/",
      gitHub: "https://github.com/JesseEmerson7/simplicity-login",
    },
    {
      id: 2,
      name: "Seminole Farmers Market",
      desc: "Local farmers market information, contact, and blog website.",
      tech: "WordPress, HTML, CSS",
      contrib: "",
      image: wordPress,
      webPage: "https://ljd.vcj.mybluehost.me/website_61648545/",
      gitHub: "",
    },

    {
      id: 3,
      name: "Burger Builder",
      desc: "Full stack web application that allows users to view, save, create burger recipes, and share recipes with others.",
      tech: "CSS, HTML, JavaScript, Node.js, MySQL, Sequelize.js,  Express.js, Handlebars.js, GitHub, Tailwind",
      contrib: "",
      image: picture,
      webPage: "https://afternoon-peak-41409.herokuapp.com/",
      gitHub: "https://github.com/APereyro/BurgerBuilder",
    },
    {
      id: 4,
      name: "Weather Forecast",
      desc: "Front end web application that allows users to search any city by name and receive a 6 day weather forecast.",
      tech: "CSS, HTML, JavaScript, Open Weather API",
      contrib: "",
      image: weatherApp,
      webPage: "https://jesseemerson7.github.io/Weather-forecast/",
      gitHub: "https://github.com/JesseEmerson7/Weather-forecast",
    },
    {
      id: 5,
      name: "Bite Bud",
      desc: "Front end web application that allows users to search any city by name and receive a list of places to eat along with videos of things to do in that city.",
      tech: "CSS, HTML, JavaScript, Restaurant API, Youtube API",
      contrib: "",
      image: bite,
      webPage: "https://suzakijun1.github.io/BiteBud/",
      gitHub: "https://github.com/Suzakijun1/BiteBud",
    },
    {
      id: 6,
      name: "Quiz Time",
      desc: "Front end web application that tests the user's JavaScript knowledge.",
      tech: "CSS, HTML, JavaScript",
      contrib: "",
      image: test,
      webPage: "https://jesseemerson7.github.io/quiz-time/",
      gitHub: "https://github.com/JesseEmerson7/quiz-time",
    },
    {
      id: 7,
      name: "Password Generator ",
      desc: "Front end web application that generates a random secure password.",
      tech: "CSS, HTML, JavaScript",
      contrib: "",
      image: pass,
      webPage: "https://jesseemerson7.github.io/password-gen/",
      gitHub: "https://github.com/JesseEmerson7/password-gen",
    },
    {
      id: 8,
      name: "MongoDB Social Network ",
      desc: "Back end social network RESTful web API",
      tech: "JavaScript, MongoDb, Mongoose, Express, Node",
      contrib: "",
      image: back,
      webPage: "",
      gitHub: "https://github.com/JesseEmerson7/mongo-social-network",
    },
  ];

  const projectCards = projects.map((item) => {
    return (
      <div
        className=" flex flex-col md:flex-row md:w-5/6 cardBg mx-auto rounded-lg w-[95%]"
        data-aos="fadeIn"
        data-aos-duration="1000"
        key={item.id}
      >
        <figure className="flex justify-center items-center md:w-4/6">
          <img
            className=" md:h-96 w-full rounded-lg"
            src={item.image}
            alt="web application screenshot"
          />
        </figure>
        <div className="card-body p-3 md:p-7 md:w-1/2">
          <h2 className="card-title text-2xl">{item.name}</h2>
          <p>{item.desc}</p>
          <h2 className=" font-medium text-lg text-white">
            Technologies used:
          </h2>
          <p>{item.tech}</p>
          <div className="card-actions justify-center">
            {item.gitHub != "" ? (
              <a
                className="btn btn-primary port-btn"
                href={item.gitHub}
                target="_blank"
              >
                View code
              </a>
            ) : (
              ""
            )}

            {item.webPage != "" ? (
              <a
                className="btn btn-primary port-btn"
                href={item.webPage}
                target="_blank"
              >
                View application
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Hero title={"Portfolio"} id={"hero-image-portfolio"} />
      <section className="flex flex-col w-full flex-wrap mt-5 text-white gap-5 mb-10">
        {projectCards}
      </section>
    </>
  );
}
