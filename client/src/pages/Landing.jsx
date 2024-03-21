import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby helvetica messenger bag keytar twee. Umami meh green juice,
            raw denim vexillologist shaman offal grailed coloring book blue
            bottle. Street art flexitarian woke, gluten-free helvetica jianbing
            unicorn drinking vinegar bespoke yuccie vinyl. Umami mustache
            authentic, cupping celiac mixtape gochujang. Poutine marxism fixie
            celiac jean shorts retro blue bottle tofu viral fashion axe craft
            beer.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
