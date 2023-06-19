import "../../assets/css/portfolio.css";
import picture from "../../assets/images/afternoon-peak-41409.herokuapp.com_ (1).png";
import weatherApp from "../../assets/images/weather-app.png";
import bite from "../../assets/images/bite-bud.png";
import back from "../../assets/images/backend.png";
import test from "../../assets/images/test.png";
import pass from "../../assets/images/password.png";
import BeeAware from "../../assets/images/BeeAware.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "BeeAware",
      desc: "Full stack web application designed to inform users about Florida local pollinators and their importance. Users can view an information page and learn about various local bees, and post on the websites blog page for all to view.",
      tech: "MongoDB, Express, React, Node, Mongoose, React-Router, Tailwind CSS, GraphQL, Apollo",
      contrib: "",
      image: BeeAware,
    },
  ];

  const projectCards = projects.map(( item )=>{
    return(<div className="flex flex-col md:flex-row w-5/6 cardBg mx-auto rounded-lg" key={item.id}>
  <figure><img src={item.image} alt="web application screenshot"/></figure>
  <div className="card-body p-3 md:p-7">
    <h2 className="card-title text-2xl">{item.name}</h2>
    <p>{item.desc}</p>
    <h2 className=" font-medium text-lg text-white">Technologies Used:</h2>
    <p>{item.tech}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View application</button>
    </div>
  </div>
</div>)
  })

  return (
    <>
      <section className="flex flex-col w-full flex-wrap mt-5 text-white">
        {projectCards}
      </section>
      
    </>
  );
}
