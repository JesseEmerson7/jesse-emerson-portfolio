const Hero = ({ title, id }) => {
  return (
    <div id={id} className="flex justify-start">
      <h1 className="text-2xl font-semibold mt-10 ml-5 hero-text h-min p-2 md:p-4 rounded-xl text-white ">
        {title}
      </h1>
    </div>
  );
};

export default Hero;