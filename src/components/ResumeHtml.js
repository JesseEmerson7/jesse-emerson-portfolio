const ResumeHtml = () => {
  return (
    <>
      <div className="mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Jesse Emerson</h1>
        <p className="mb-4 text-center">Orlando, FL</p>
        <p className="mb-8 text-center">
          Phone: 407-687-2391 | Email: jesseemerson7@gmail.com
        </p>
        <p className="mb-8 text-center">
          LinkedIn:{" "}
          <a href="linkedin.com/in/jesse-emerson57/">
            linkedin.com/in/jesse-emerson57/
          </a>
          <br />
          GitHub:{" "}
          <a href="https://github.com/JesseEmerson7">
            github.com/JesseEmerson7
          </a>
          <br />
          Portfolio:{" "}
          <a href="https://jesseemerson7.github.io/jesse-emerson-portfolio/">
            jesseemerson7.github.io/jesse-emerson-portfolio/
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Summary</h2>
        <p className="mb-8 text-center">
          Passionate Full Stack Developer with a strong dedication to continuous
          learning and mastery of JavaScript, HTML, CSS, and other relevant
          frameworks. Demonstrating leadership, creativity, effective problem
          solving, and attention to detail. Enthusiastically seeking
          opportunities to collaborate with accomplished software engineers in
          crafting intuitive web applications that prioritize user experience.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Technical Skills
        </h2>
        <p className="list-disc ml-8 mb-8">
          JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, Mongoose,
          MySQL, Sequelize, Express, React, Node, Handlebars, jQuery, Bootstrap,
          Tailwind CSS
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
        <h3 className="text-xl font-bold mb-2">BeeAware</h3>
        <p className="mb-2">
          Full stack education and blog application about Florida’s local
          pollinators.
        </p>
        <p className="mb-4">
          GitHub:
          <a href="https://github.com/JesseEmerson7/BeeAware">
            github.com/JesseEmerson7/<br/>BeeAware
          </a>
          <br />
          Live Application:{" "}
          <a href="https://radiant-ocean-19328.herokuapp.com/Project">
            radiant-ocean-19328.herokuapp.com/Project
          </a>
        </p>
        <p className="mb-8">
          Role: Project lead developer working in front and back end.
          <br />
          Tools: JavaScript, Tailwind CSS, Mongodb, Express, React, Node,
          Mongoose, Apollo, GraphQL.
        </p>
        <h3 className="text-xl font-bold mb-2">Burger Builder</h3>
        <p className="mb-2">
          Full stack application that allows users to view, save, and create
          burger recipes.
        </p>
        <p className="mb-4">
          GitHub:{" "}
          <a href="https://github.com/APereyro/BurgerBuilder">
            github.com/APereyro/BurgerBuilder
          </a>
          <br />
          Live Application:{" "}
          <a href="https://afternoon-peak-41409.herokuapp.com/">
            afternoon-peak-41409.herokuapp.com/
          </a>
        </p>
        <p className="mb-8">
          Role: Created and managed the MySQL database that powered the
          application's backend. Worked on front end JavaScript logic as well.
          <br />
          Tools: JavaScript, HTML, Tailwind CSS, MySQL, Sequelize, Express,
          Handlebars, Node.
        </p>
        <h3 className="text-xl font-bold mb-2">Weather Forecast</h3>
        <p className="mb-2">
          Front-end web application designed to retrieve weather data by the
          user's city and give a 6-day forecast.
        </p>
        <p className="mb-4">
          GitHub:{" "}
          <a href="https://github.com/JesseEmerson7/Weather-forecast">
            github.com/JesseEmerson7/Weather-forecast
          </a>
          <br />
          Live Application:{" "}
          <a href="https://jesseemerson7.github.io/Weather-forecast/">
            jesseemerson7.github.io/Weather-forecast/
          </a>
        </p>
        <p className="mb-8">
          Role: Sole developer.
          <br />
          Tools: HTML, CSS, JavaScript.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold">Honey Bee Relocation Technician</h3>
          <p className="mb-2">2021 – 2023</p>
          <p className="mb-2">Black Hammock Bee Farm, Oviedo, FL</p>
          <p>
            Effective communication skills when interacting with customers,
            providing clear and concise explanations about the inspection
            process, and addressing any concerns or questions they had.
            Attention to detail while inspecting life safety equipment.
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Rescued over 500 feral bee colonies.</li>
            <li>Led a team of two technicians.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold">
            Fire Alarm Inspection Technician
          </h3>
          <p className="mb-2">2018 – 2020</p>
          <p className="mb-2">Signature Systems of Florida, Casselberry, FL</p>
          <p>
            Responsible for inspecting fire alarm devices and equipment in
            commercial buildings. Effectively communicated with customers,
            providing clear and concise explanations about the inspection
            process, and addressing any concerns or questions they had.
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Assessed and tested thousands of life safety devices.</li>
            <li>Trained new employees.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold">
            Full Stack Web Development Certificate
          </h3>
          <p>The University of Central Florida, Orlando, FL</p>
          <p>
            A 24-week intensive program focused on gaining technical programming
            skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js,
            MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold">
            Seminole State College (Currently attending)
          </h3>
          <p>Oviedo, FL</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">High School Diploma</h3>
          <p>Hagerty, Oviedo, FL</p>
        </div>
      </div>
    </>
  );
};

export default ResumeHtml;
