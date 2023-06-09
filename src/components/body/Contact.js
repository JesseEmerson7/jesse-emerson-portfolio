import "../../assets/css/contact.css";
import "animate.css";
import Hero from "../Hero";

export default function Contact() {
  //handle link clicks for chat bubbles
  const handleLink = (name) => {
    name == "email"
      ? window.open("mailto:jesseemerson7@gmail.com")
      : window.open("tel:4076872391");
  };

  return (
    <div className="h-full md:mb-20">
      {/* hero img */}
      <Hero title={"Contact Info"} id={"hero-image-contact"}/>
      <div className="w-full md:w-2/3 md:mx-auto py-6 pb-10 flex flex-col gap-4">
        <div className="chat chat-start w-full">
          <div className="chat-bubble bg-blue-600 text-white md:p-5 text-xl shadow-md shadow-black">
            I'm available via email, call, or text!
          </div>
        </div>
        <div className="chat chat-end w-full">
          <div className="animate__animated animate__fadeIn  chat-bubble text-white bg-green-600 md:p-5 text-xl shadow-md shadow-black">
            Email address?
          </div>
        </div>
        <div
          className="chat chat-start w-full  hover:cursor-pointer"
          onClick={() => handleLink("email")}
        >
          <div className="animate__animated animate__fadeIn animate__delay-1s  chat-bubble bg-blue-600 text-white md:p-5 text-xl shadow-md shadow-black hover:bg-cyan-200 hover:text-stone-950 hover:shadow-lg hover:shadow-sky-500">
            <p>
              <span className="material-symbols-sharp">mail</span>
              <span> </span>jesseemerson7@gmail.com
            </p>
          </div>
        </div>
        <div className="chat chat-end w-full">
          <div className="animate__animated animate__fadeIn animate__delay-2s chat-bubble text-white bg-green-600 md:p-5 text-xl shadow-md shadow-black">
            Phone number?
          </div>
        </div>
        <div
          id="phoneNumber"
          className="chat chat-start w-full hover:cursor-pointer "
          onClick={() => handleLink("Phone")}
        >
          <div className="animate__animated animate__fadeIn animate__delay-3s chat-bubble bg-blue-600 text-white md:p-5 text-xl shadow-md shadow-black hover:bg-cyan-200 hover:text-stone-950 hover:shadow-lg hover:shadow-sky-500">
            <p>
              <span className="material-symbols-sharp ">call</span> 407-687-2391
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
