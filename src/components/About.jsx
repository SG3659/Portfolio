import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { resume } from "../assets";
import "./about.css";
import data from "./aboutdata";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </div>
        <div className="container header__container mt-[60px]">
          <div className="header_socials ">
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
              Completed My Bachelor in Technology
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
              <br />
              <br />
              I am a proficient engineer with expertise in web development
              technologies,
              <br />
              including HTML, CSS, JavaScript, TypeScript, Node.js, React.js,
              Framer Motion,
              <br />
              Redux, Three.js, Express.js, Tailwind CSS, Socket.io, MongoDB,
              PostgreSQL, Restfull API. Additionally,
              <br />I am skilled in Java programming.
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
    </>
  );
};

export default SectionWrapper(About, "about");
