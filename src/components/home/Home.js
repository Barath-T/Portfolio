import { useNavigate } from "react-router-dom";
import { Div, Button } from "./Home.styled";

const Home = ({ details }) => {
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(`/${to}`);
  };
  return (
    <Div>
      <div className="hi">
        <h1>
          Hi, I’m Barath T,
          <span>
            a <span className="role">Full Stack Developer.</span>
          </span>
        </h1>
        <p className="content">
          I am a open-minded individual ready to learn, experience and improve
          my skills to compete in an industrial environment and open to take on
          new challenges.
        </p>
        <Button onClick={() => handleClick("contact")}>Hire Me</Button>
        <Button onClick={() => handleClick("projects")}>See My Work</Button>
        <p className="findme"> You can find me on <a href={details.github}>Github</a> and <a href={details.linkedin}>LinkedIn</a>.</p>
      </div>
    </Div>
  );
};

export default Home;
