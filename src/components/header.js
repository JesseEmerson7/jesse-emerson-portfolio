import "../assets/css/header.css";
import "animate.css";

export default function header({ currentPage, handlePageChange }) {
  return (
    <nav id="header" className="w-full flex-col flex flex-wrap md:flex-row">
      <div id="my-name" className="w-full my-5 md:w-1/3 rounded-sm">
        <h1 className=" text-5xl text-center w-full">Jesse Emerson</h1>
        <p
          id="title-info"
          className="w-full text-center animate__animated animate__fadeIn"
        >
          Full Stack Developer
        </p>
      </div>
      <div id="navbar" className="w-full md:w-2/3">
        <ul className=" flex flex-col w-5/6 mb-2 mx-auto md:flex-row md:4/6 md:mt-[5%]">
          <li
            className={
              currentPage === "about"
                ? "selected-tab md:w-2/6 transition-all"
                : "md:w-1/4  transition-all"
            }
            onClick={() => handlePageChange("about")}
          >
            <p className="mt-1">About</p>
          </li>
          <li
            className={
              currentPage === "portfolio"
                ? "selected-tab md:w-2/6 transition-all"
                : "md:w-1/4 transition-all"
            }
            onClick={() => handlePageChange("portfolio")}
          >
            <p className="mt-1">Portfolio</p>
          </li>
          <li
            className={
              currentPage === "contact"
                ? "selected-tab md:w-2/6 transition-all"
                : "md:w-1/4 transition-all"
            }
            onClick={() => handlePageChange("contact")}
          >
            <p className="mt-1">Contact</p>
          </li>
          <li
            className={
              currentPage === "resume"
                ? "selected-tab md:w-2/6 transition-all"
                : "md:w-1/4 transition-all"
            }
            onClick={() => handlePageChange("resume")}
          >
            <p className="mt-1">Resume</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
