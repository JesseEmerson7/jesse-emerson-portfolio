import "../../assets/css/aboutMe.css";

import profile from "../../assets/images/profile-pic3.jpg";

export default function About() {
  return (
    <>
      <div id="about-me" className="container-fluid">
        <div className="row col-sm-12">
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
                I'm Jesse, a certified full stack web developer from the UCF Coding Bootcamp. Proficient in front-end technologies like HTML, CSS, and JavaScript, I create visually appealing and responsive user interfaces. With expertise in frameworks like React.js, I build dynamic and interactive web applications. On the back-end, I utilize Node.js and Express.js to develop robust server-side applications, implementing RESTful APIs for data management. I excel at problem-solving and pay attention to detail, striving for efficient and scalable code. Collaboration is my strength, and I'm excited to contribute to cutting-edge projects while continually enhancing my web development skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
