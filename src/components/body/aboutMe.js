import "../../assets/css/aboutMe.css";

import profile from "../../assets/images/profile-2.jpg";

export default function About() {
  return (
    <>
    <div  id="about-me" className="container-fluid">
      <div className="row col-sm-12 vh-100">
      <div id="pic-container" className="col-md-4 col-lg-4 col-sm-12 text-center">
       
          <img id="profile-pic" src={profile} alt=" Profile pic" />
          <p id="picture-text">Jesse Emerson (something about myself)</p>
        </div>
        <div id="bio" className=" col-md col-lg col-sm-12">
        <div id="bio-card" className="card">
          <div className="card-body">
            <h5 className="card-title">Bio</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
