import "../../assets/css/aboutMe.css";

import profile from "../../assets/images/profile.jpg";

export default function About() {
  return (
    <>
      <div className="container row vw-100 vh-100">
      <div className="col">
        <h1>About Me</h1>
          <img id="profile-pic" src={profile} alt=" Profile pic" />
          <p>Jesse Emerson</p>
        </div>
        <div className="card col m-4">
          <div className="card-body">
            <h5 className="card-title">Bio</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
