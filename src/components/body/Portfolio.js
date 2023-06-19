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
      name: "BeeAware",
      desc: "Full stack web application designed to inform users about Florida local pollinators and their importance. Users can view an information page and learn about various local bees, and post on the websites blog page for all to view.",
      tech: "MongoDB, Express, React, Node, Tailwind CSS, GraphQL, Apollo",
      contrib: "",
      image: BeeAware,
    },
  ];

  return (
    <>
      <section className="flex flex-col w-full"></section>
    </>
  );
}
