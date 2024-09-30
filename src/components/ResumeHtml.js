import "../assets/css/resume.css";

const ResumeHtml = () => {
  return (
    <>
      <div className="mx-auto p-8">
        <div className="resume-container">
          <header>
            <h1>Jesse Emerson</h1>
            <p>
              Orlando, FL | Phone: 407-687-2391 | Email:{" "}
              <a href="mailto:jesseemerson7@gmail.com">
                jesseemerson7@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/jesse-emerson57/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jesse-emerson57/
              </a>{" "}
              | GitHub:{" "}
              <a
                href="https://github.com/JesseEmerson7"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/JesseEmerson7
              </a>{" "}
              | Portfolio:{" "}
              <a
                href="https://jesseemerson7.github.io/jesse-emerson-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jesseemerson7.github.io/jesse-emerson-portfolio/
              </a>
            </p>
          </header>

          <section>
            <h2>Summary</h2>
            <p>
              Versatile Web Developer with a passion for technology and
              continuous learning. Skilled in creating and maintaining dynamic
              web applications, proficient in both frontend and backend
              technologies. Excels in leveraging modern technologies to bring
              innovative solutions and strong problem-solving skills to the
              table. A proactive team player who thrives in collaborative
              environments and consistently delivers high-quality results.
            </p>
          </section>

          <section>
            <h2>Technical Skills</h2>
            <p>
              JavaScript ES6+, CSS3, HTML5, WordPress, PHP, SQL, NoSQL, GitHub,
              MongoDB, Mongoose, Sequelize, GraphQL, Express, React, Node,
              Handlebars, jQuery, Bootstrap, Tailwind, Python
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <ul>
              <li>
                Bachelor of Science in Information Systems Technology (Expected
                2026) - Seminole State College, Oviedo, FL
              </li>
              <li>
                Associate in Arts (2024) - Seminole State College, Oviedo, FL
              </li>
              <li>
                Full Stack Web Development Certificate (2023) - University of
                Central Florida, Orlando, FL
              </li>
            </ul>
          </section>

          <section>
            <h2>Projects</h2>
            <div className="project">
              <h3>BeeAware</h3>
              <p>
                Full stack educational and blog application focusing on
                Florida’s local pollinators.
                <br />
                GitHub:{" "}
                <a
                  href="https://github.com/JesseEmerson7/BeeAware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/JesseEmerson7/BeeAware
                </a>
                <br />
                Live Application:{" "}
                <a
                  href="https://radiant-ocean-19328.herokuapp.com/Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  radiant-ocean-19328.herokuapp.com/Project
                </a>
              </p>
              <p>
                Role: Lead Developer, responsible for both front-end and
                back-end development.
                <br />
                Technologies Used: JavaScript, Tailwind CSS, MongoDB, Express,
                React, Node.js, Mongoose, Apollo, GraphQL.
              </p>
            </div>

            <div className="project">
              <h3>Simplicity Login</h3>
              <p>
                Login form and website landing page that changes appearance
                based on the time of day.
                <br />
                GitHub:{" "}
                <a
                  href="https://github.com/JesseEmerson7/simplicity-login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/JesseEmerson7/simplicity-login
                </a>
                <br />
                Live Application:{" "}
                <a
                  href="https://jesseemerson7.github.io/simplicity-login/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jesseemerson7.github.io/simplicity-login/
                </a>
              </p>
              <p>Technologies Used: React, Tailwind</p>
            </div>
          </section>

          <section>
            <h2>Experience</h2>
            <div className="experience">
              <h3>Data Intelligence Intern</h3>
              <p>Bayer - Orlando, FL (Remote) | May 2024 – August 2024</p>
              <ul>
                <li>
                  Developed and maintained dashboards and reports to visualize
                  key performance indicators and business metrics.
                </li>
                <li>
                  Collaborated with cross-functional teams to identify data
                  needs and provide actionable insights.
                </li>
                <li>
                  Utilized SQL, Python, and various data visualization tools to
                  analyze and present data.
                </li>
              </ul>
            </div>

            <div className="experience">
              <h3>Web Developer</h3>
              <p>
                Figarelli House Corp - Orlando, FL | December 2023 – August 2024
              </p>
              <ul>
                <li>
                  Designed responsive and user-friendly frontend interfaces
                  using HTML, CSS, and JavaScript, ensuring compatibility across
                  browsers and devices.
                </li>
              </ul>
            </div>

            <div className="experience">
              <h3>Fire Alarm Technician</h3>
              <p>DynaFire - Castleberry, FL | October 2023 – May 2024</p>
              <ul>
                <li>
                  Installed and configured fire alarm monitoring devices,
                  ensuring compliance with local safety codes and regulations.
                </li>
                <li>
                  Conducted thorough testing and inspections of the installed
                  systems to verify operational efficiency and readiness in
                  emergency situations.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResumeHtml;
