import "../../assets/css/resume.css";

export default function Resume() {
  const handleBtn = () => {
    window.open(
      "https://docs.google.com/document/d/19ORGKNzY3_gP4YXxHP__czSIeR66qwGkmT3Lw34UYVU/edit"
    );
  };
  return (
    <>
      <div id="container">
        <button
          id="resume-btn"
          onClick={handleBtn}
          className="btn btn-primary col-2"
        >
          Download Resume
        </button>
        <iframe
          className="resume-div col-10"
          title="Jesse's Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQm_Oaa6a0mRVJxxadB48gU6FTXk6clyunZnz-Nid8bG_n7gr8GGM-Qw_AeDKFf_mmyqTP7xInWOUOf/pub?embedded=true"
        ></iframe>
      </div>
    </>
  );
}
