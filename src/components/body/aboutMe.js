import "../../assets/css/aboutMe.css";

import profile from "../../assets/images/profile-pic3.jpg";

export default function About() {
  return (
    <>
      <div id="about-me" className="container-fluid">
        <div className="row col-sm-12 vh-100">
          <div
            id="pic-container"
            className="col-md-4 col-lg-4 col-sm-12 text-center"
          >
            <img id="profile-pic" src={profile} alt=" Profile pic" />
            <div id="picture-text">
              <p>Jesse Emerson</p>
              <p>
                MERN stack developer certified by <br />
                the University of Central Florida
              </p>
              <p></p>
            </div>
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
