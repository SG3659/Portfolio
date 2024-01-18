import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { logo, resume } from "../assets";
import "./about.css";
import data from "./aboutdata";
import { HiDownload } from "react-icons/hi";

{
  /*const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    // cards outer container
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
      // card tilt property & ca
        <div
          options={{// property of tilt the card property
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};*/
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </div>
        <div className="container header__container">
          <div className="profile_image">
            <img src={logo} alt=" Profile Image" />
          </div>
          <div className="header_socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="black"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div>
            <p>
              <span className="text-[#915eff]">
                <b>Hi, I'm Sahil Gupta,</b>
              </span>{" "}
              Currently pursuing Bachelor in Technology
              <br />
              From Bhagwan Parshuram Institute of Technology which Affilated
              from GGSIPU.
              <br />
              In Specialisation Electrical & Electronics Engineering.
            </p>
            <br />
            <p>
              Motivated and hardworking individual with a passion for software
              <br />
              development seeks hands-on experience with a team of
              <br />
              professionals. Strong understanding of software development
              <br />
              concepts and eagerness to learn new technologies.
            </p>
            <br />
            <p>
              Thank you for taking the time to visit my website, and <br />I
              look forward to connecting with you.
            </p>
          </div>
        </div>
      </motion.div>
      <br />
      <br />

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        <a
          href={resume}
          download
          className="btn primary"
          target="black"
          rel="noopener noreferrer"
        >
          Download cv <HiDownload />
        </a>
      </motion.p>
      {/*service card 
      <div className="mt-4 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>*/}
    </>
  );
};

export default SectionWrapper(About, "about");
