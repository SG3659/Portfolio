import { logo } from "../assets";
import "./about.css";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto  black-gradient flex  items-center justify-center ">
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="profile_image hover:w-[18.5rem] cursor-pointer z-10 ">
          <img src={logo} alt=" Profile Image" />
        </div>
        <div className=" p-10 flex items-center justify-center flex-col font-light">
          <p className="font-bold hover:text-[#915eff] cursor-pointer">
            <span className="text-2xl">Hey There!</span>
          </p>
          <p className="font-bold hover:text-[#915eff] cursor-pointer">
            I'm Sahil Gupta, Software Developer 
            <br />
          </p>
          <p>"A guy immeresed in the exciting world of technology."</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
