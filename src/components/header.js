import "../assets/css/header.css";
import {useState} from 'react'

export default function header({handlePageChange}) {
  return (
    <nav id="header" className="navbar row">
      <div id="my-name" className="col-sm-12 col-md  text-md-start text-sm-center">
        <h1>Jesse Emerson</h1>
        <p id="title-info" className="ps-md-4 text-md-start text-sm-center">FullStack Developer</p>
      </div>
      <div id="navbar" className="col-sm-12 col-md ">
        <ul className="row">
          <li className="col-lg col-md"><a href="#aboutMe"  onClick={() => handlePageChange('about')}>About Me</a></li>
          <li className="col-lg col-md "><a href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</a></li>
          <li className="col-lg col-md"><a href="#contact" onClick={() => handlePageChange('contact')}>Contact Me</a></li>
          <li className="col-lg col-md"><a href="#resume" onClick={() => handlePageChange('resume')}>Resume</a></li>
        </ul>
      </div>
    </nav>
  );
}