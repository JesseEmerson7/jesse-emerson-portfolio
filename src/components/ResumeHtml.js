import "../assets/css/resume.css";
// import { useEffect } from "react";
import profile from ".././assets/images/IMG_2885.jpg";

const ResumeHtml = () => {
  const expertice = [
    "Full-Stack Development",
    "Proficient Troubleshooting",
    "Mobile App Development",
    "Data Intelligence",
    "Web Application Development",
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "NoSQL",
    "React.js",
    "React Native",
    "jQuery",
    "WordPress",
    "Bootstrap",
    "Tailwind",
    "Python",
    "PHP",
  ];

  return (
    <>
      <div id="intro">
        <img
          id="resume-img"
          src={profile}
          alt="Jesse Emerson"
          height={150}
          style={{ borderRadius: "10px" }}
        />
        <div>
          <h1>Jesse Emerson</h1>
          <h2>Software Engineer</h2>
          <p>
            Dedicated Software Engineer skilled in creating responsive web and
            mobile applications. Proficient in frontend and backend development,
            with a focus on delivering seamless user experiences and robust
            functionality. Committed to continuous learning and high-quality
            solutions, and thrives in collaborative environments. Passionate
            about solving complex technical challenges and staying updated on
            emerging technologies.
          </p>
        </div>
      </div>

      <section id="contact">
        <ul>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <p>jesseemerson7@gmail.com</p>
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <p>Orlando, FL</p>
          </li>
          <li>
            <i class="fa-solid fa-mobile"></i>
            <p>407-687-2391</p>
          </li>
        </ul>
        <ul>
          <li>
            <i class="fa-brands fa-github"></i>
            <p>github.com/jesseemerson7</p>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
            <p>linkedin.com/in/jesseemerson7</p>
          </li>
          <li>
            <i class="fa-solid fa-briefcase"></i>
            <p>github.com/jesseemerson7/jesse-emerson-portfolio</p>
          </li>
        </ul>
      </section>
      <div id="info-container">
        <section id="exp">
          <h2 class="section-title">AREAS OF EXPERTISE</h2>
          <div id="expertise">
            {expertice.map((value) => (
              <p>{value}</p>
            ))}
          </div>
        </section>

        <section id="work">
          <h2 class="section-title">WORK EXPERIENCE</h2>
          <div class="job-gap">
            <div class="job">
              <h3>Software Engineer</h3>
              <p>Figarelli House Corp</p>
              <div>
                <p>12/23 - Present</p>
                <p>Orlando, FL</p>
              </div>
              <ul>
                <li>
                  Developed responsive and user-friendly mobile and web-based
                  financial tracking applications, enhancing user engagement
                  through intuitive interfaces and seamless navigation.
                </li>
                <li>
                  Enhanced mobile applications by troubleshooting, testing, and
                  fixing user reported errors.
                </li>
              </ul>
            </div>
            <div class="job">
              <h3>Software Engineering Intern</h3>
              <p>Bayer Crop Science</p>
              <div>
                <p>5/24 - 8/24</p>
                <p>Orlando, FL (Remote)</p>
              </div>
              <ul>
                <li>
                  Developed full-stack web based dashboards and reports using
                  Python, HTML, CSS, JavaScript, and React to visualize key
                  performance indicators and business metrics.
                </li>
                <li>
                  Collaborated with team members to implement and enhance
                  additional features in a Next.js project. Provided support in
                  refining user interface components, optimizing code for
                  performance, and ensuring seamless integration of new
                  functionalities within the existing architecture.
                </li>
              </ul>
            </div>
            <div class="job">
              <h3>Fire Alarm Technician</h3>
              <p>DynaFire</p>
              <div>
                <p>10/23 - 5/24</p>
                <p>Casselberry, FL</p>
              </div>

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
          </div>
        </section>

        <section>
          <h2 class="section-title">TECHNICAL SKILLS</h2>
          <div id="tech">
            {skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 class="section-title">PROJECTS</h2>
          <div>
            <h3>BeeAware</h3>
            <p>
              MERN Stack Educational and Blog Application: Led a remote team in
              developing a platform focused on Florida's local pollinators,
              utilizing GraphQL and Mongoose on the backend, and React on the
              frontend. Implemented features such as user authentication and
              content management to enhance user engagement.
            </p>
            <p>github.com/JesseEmerson7/BeeAware</p>
          </div>
          <div>
            <h3>Simplicity Login</h3>
            <p>
              Dynamic Front-End React Login Page: Developed a responsive login
              form and landing page that changes appearance based on the time of
              day. Utilized React for state management and implemented CSS
              transitions for enhanced user experience
            </p>
            <p>github.com/JesseEmerson7/simplicity-login</p>
          </div>
        </section>
        <section>
          <h2 class="section-title">EDUCATION</h2>
          <div class="job-gap">
            <div>
              <h3>Bachelor of Science in Information Systems Technology</h3>
              <p>Seminole State College</p>
              <p>2024 - 2026</p>
            </div>
            <div>
              <h3>Associate in Arts</h3>
              <p>Seminole State College</p>
              <p>2022 - 2024</p>
            </div>
            <div>
              <h3>Full Stack Coding Bootcamp</h3>
              <p>University of Central Florida</p>
              <p>2023</p>
            </div>
          </div>
        </section>
      </div>
      <script
        src="https://kit.fontawesome.com/0badf1a3ce.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default ResumeHtml;
