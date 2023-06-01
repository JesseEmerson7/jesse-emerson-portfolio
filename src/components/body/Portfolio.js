import "../../assets/css/portfolio.css";
import picture from "../../assets/images/afternoon-peak-41409.herokuapp.com_ (1).png";
import weatherApp from "../../assets/images/weather-app.png";
import bite from "../../assets/images/bite-bud.png";
import back from "../../assets/images/backend.png";
import test from "../../assets/images/test.png";
import pass from "../../assets/images/password.png";

export default function Portfolio() {
  return (
    <>
      <div id="container-div" className=" col ">
        <div id="row-div" className="row  m-4 gap-4">
          <div id="first-card" className="card card-size w-25  col-4 col-sm-12 project-bg">
            <img src={picture} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>Burger Builder</h2>
              <p className="site-info">
                Full stack application built using: Node, Express, MySQL,
                Sequelize, and Handlebars.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://afternoon-peak-41409.herokuapp.com/"
                  target="_blank"
                >
                  View Live Site
                </a>
                <a
                  className="btn project-bg"
                  href="https://github.com/APereyro/BurgerBuilder"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="card card-size w-25  col-4  project-bg col-sm-12">
            <img src={weatherApp} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>Weather Forecast</h2>
              <p className="site-info">
                Front end application built using: HTML CSS JavaScript, and
                RESTful API data.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://jesseemerson7.github.io/Weather-forecast/"
                  target="_blank"
                >
                  View Live Site
                </a>
                <a
                  className="btn project-bg"
                  href="https://github.com/JesseEmerson7/Weather-forecast"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="card card-size w-25  col-4  project-bg col-sm-12">
            <img src={bite} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>Bite Bud</h2>
              <p className="site-info">
                Front end application built using: HTML, CSS, JavaScript, and
                RESTful API data.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://suzakijun1.github.io/BiteBud/"
                  target="_blank"
                >
                  View Live Site
                </a>
                <a
                  className="btn project-bg"
                  href="https://github.com/Suzakijun1/BiteBud"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="row-div2" className="row justify-content-center m-4 gap-4">
          <div className="card card-size w-25  col-4  project-bg">
            <img src={back} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>MongoDb Social Network</h2>
              <p className="site-info">
                Back end application built with: Node, Express, Mongoose, and
                MongoDB.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://github.com/JesseEmerson7/mongo-social-network"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="card card-size w-25  col-4  project-bg">
            <img src={test} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>Quiz Time</h2>
              <p className="site-info">
                Front end JavaScript quiz application built using: HTML CSS, and
                JavaScript.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://jesseemerson7.github.io/quiz-time/"
                  target="_blank"
                >
                  View Live Site
                </a>
                <a
                  className="btn project-bg"
                  href="https://github.com/JesseEmerson7/quiz-time"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="card card-size w-25  col-4  project-bg">
            <img src={pass} alt="Burger Builder website" />
            <div className="project-detail">
              <h2>Password Generator</h2>
              <p className="site-info">
                Front end application built using: HTML, CSS, and JavaScript.
              </p>
              <div className="d-flex flex-row justify-content-between flex-wrap">
                <a
                  className="btn project-bg"
                  href="https://jesseemerson7.github.io/password-gen/"
                  target="_blank"
                >
                  View Live Site
                </a>
                <a
                  className="btn project-bg"
                  href="https://github.com/JesseEmerson7/password-gen"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
