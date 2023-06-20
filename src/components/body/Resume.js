import "../../assets/css/resume.css";

export default function Resume() {
  const handleBtn = () => {
    window.open(
      "https://docs.google.com/document/d/13VHmJZDtbdPDRRBUbh3u9E-hdlLN-V7lI_g1xpTZvJs/edit?usp=sharing"
    );
  };
  return (
    <>
      <div id="container">
        <button
          onClick={handleBtn}
          className="btn btn-primary mt-5 rounded-b-none w-full md:w-3/6"
        >
          Download via google docs
        </button>
        <iframe
          className=" w-full h-full md:w-3/6 mb-5"
          title="Jesse's Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQU4AWKPLA2YzvPXCesPVB6ZIMTak1lycmkW5OpUF3MsshntNoPY19jGf5ZIwUUWDPdSv04uzx8pR1l/pub?embedded=true"
        ></iframe>
      </div>
    </>
  );
}
