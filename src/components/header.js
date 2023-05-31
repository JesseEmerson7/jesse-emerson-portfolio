import "../assets/css/header.css";
import {useState} from 'react'

export default function header({handlePageChange}) {
  return (
    <nav id="header" className="navbar row">
      <div id="my-name" className="col-sm-12 col-md  text-md-start text-sm-center">
        <h1>Jesse Emerson</h1>
        <p id="title-info" className="ps-md-4 text-md-start text-sm-center">FullStack Developer</p>
      </div>
      <div id="navbar" className="col-sm-12 col-md-7 ">
        <ul className="row">
          <li className="col-lg-2 col-md-2" onClick={() => handlePageChange('about')}><p>About Me</p></li>
          <li className="col-lg-2 col-md-2"><a href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</a></li>
          <li className="col-lg-2 col-md-2"><a href="#contact" onClick={() => handlePageChange('contact')}>Contact Me</a></li>
          <li className="col-lg-2 col-md-2"><a href="#resume" onClick={() => handlePageChange('resume')}>Resume</a></li>
        </ul>
      </div>
    </nav>
  );
}
