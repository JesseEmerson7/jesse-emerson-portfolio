import "../assets/css/header.css";

export default function header({currentPage, handlePageChange}) {
  return (
    <nav id="header" className="navbar row">
      <div id="my-name" className="col-sm-12 col-md  text-md-start text-sm-center">
        <h1>Jesse Emerson</h1>
        <p id="title-info" className="ps-md-4 text-md-start text-sm-center">Full Stack Developer</p>
      </div>
      <div id="navbar" className="col-sm-12 col-md-7 ">
        <ul className="row">
          <li className={currentPage === 'about'? 'col-lg-3 selected-tab col-md-2': 'col-lg-2 col-md-2'} onClick={() => handlePageChange('about')}><p>About</p></li>
          <li className={currentPage === 'portfolio'? 'col-lg-3 selected-tab col-md-2': 'col-lg-2 col-md-2'} onClick={() => handlePageChange('portfolio')}><p>Portfolio</p></li>
          <li className={currentPage === 'contact'? 'col-lg-3 selected-tab col-md-2': 'col-lg-2 col-md-2'} onClick={() => handlePageChange('contact')}><p>Contact</p></li>
          <li className={currentPage === 'resume'? 'col-lg-3 selected-tab col-md-2': 'col-lg-2 col-md-2'} onClick={() => handlePageChange('resume')}><p>Resume</p></li>
          
        </ul>
      </div>
    </nav>
  );
}
