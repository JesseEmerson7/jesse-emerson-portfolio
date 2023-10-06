import About from "./body/aboutMe"

const AboutHeader = ({myTab, handleTab}) => {
    return (
        <div className="flex justify-evenly" onClick={(e) => handleTab(e)}>
        <h4
          className={
            myTab === "about"
              ? "aboutMeCurrent duration-500"
              : "aboutMeTitle duration-500"
          }
          name="about"
        >
          About me
        </h4>
        <h4
          className={
            myTab === "ed"
              ? "aboutMeCurrent duration-500"
              : "aboutMeTitle duration-500"
          }
          name="ed"
        >
          Education
        </h4>
        <h4
          className={
            myTab === "skill"
              ? "aboutMeCurrent duration-500"
              : "aboutMeTitle duration-500"
          }
          name="skill"
        >
          Skills
        </h4>
        <h4
          className={
            myTab === "hob"
              ? "aboutMeCurrent duration-500"
              : "aboutMeTitle duration-500"
          }
          name="hob"
        >
          Hobbies
        </h4>
      </div>
    )
}

export default AboutHeader;