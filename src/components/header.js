import "../assets/css/header.css";

export default function header() {
  return (
    <nav id="header" className="navbar bg-body-tertiary bg-primary row">
      <div id="my-name" className="d-inline col">
        <h1>Jesse Emerson</h1>
        <p id="title-info">FullStack Developer</p>
      </div>
      <div id="navbar" className="col">
        <ul className=" flex-md-row d-inline-flex justify-content-between">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
}
