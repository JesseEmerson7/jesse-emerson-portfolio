import '../../assets/css/contact.css'

export default function Contact() {


  return (
    <>
    <div id="form-container-div">
      <div  className="form-group">
        <label for="exampleInputEmail1">Full Name</label>
        <input
          id="name-input"
          type="text"
          className="form-control"
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          id="Email-input"
          type="text"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <input
          id="message-input"
          type="text"
          className="form-control"
          placeholder="Message"
        />
      </div>
      <button id='submit-btn' className="btn btn-primary">
        Submit
      </button>
      </div>
    </>
  );
}
