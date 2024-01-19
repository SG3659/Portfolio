import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-secondary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas />
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
