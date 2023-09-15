import ResumeHtml from "../ResumeHtml";
import "animate.css";

export default function Resume() {
  const handleBtn = () => {
    window.open(
      "https://docs.google.com/document/d/1F-r4H8MZH0nI_MfvvuB4wFfrzDrAlQ_Y1-BHZKnvx54/edit?usp=drive_link"
    );
  };
  return (
    <>
      <div id="container" className="min-h-screen flex flex-col mx-auto">
        <button
          onClick={handleBtn}
          className="btn btn-primary mt-5 rounded-b-none w-full md:w-2/3 mx-auto"
        >
          Download via google docs
        </button>
        <div className=" animate__animated animate__fadeIn bg-white text-black w-full md:w-2/3 md:mx-auto mb-5">
          <ResumeHtml />
        </div>

        {/* <iframe
          className=" w-full h-full md:w-3/6 mb-5"
          title="Jesse's Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQU4AWKPLA2YzvPXCesPVB6ZIMTak1lycmkW5OpUF3MsshntNoPY19jGf5ZIwUUWDPdSv04uzx8pR1l/pub?embedded=true"
        ></iframe> */}
      </div>
    </>
  );
}
