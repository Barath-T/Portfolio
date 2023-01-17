import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div>
      <h1>Hi, I’m Barath T, a Full Stack Developer.</h1>
      <p>
        I am a open-minded individual ready to learn, experience and improve my
        skills to compete in an industrial environment and open to take on new
        challenges.
      </p>
      <button onClick={handleClick}>Hire Me</button>
    </div>
  );
};

export default Home;
