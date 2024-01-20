import { logo } from "../assets";
import "./about.css";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto  black-gradient flex  items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="profile_image hover:w-[18.5rem] cursor-pointer z-10 ">
          <img src={logo} alt=" Profile Image" />
        </div>
        <div className="flex items-center justify-center flex-col font-light">
          <p className="hover:font-bold text-[#915eff] cursor-pointer">
            <span>Hii, I'm Sahil Gupta(B.Tech(3rd))</span>
          </p>
          <p>
            "I'm not just a coder, I'm a web enthusiast with a passion for
            creating beautiful and <br />
          </p>
          <p className="flex items-center justify-center flex-col">
            meaningful digital experiences."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
