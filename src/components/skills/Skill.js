import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Div } from "./Skill.styled.js";
import { Button } from "../home/Home.styled.js";

const Skill = () => {
  let { skill, colors } = useOutletContext();
  const navigate = useNavigate();
  
  const handleClick = (to)=>{
    navigate(`/${to}`);
  }
  if (!skill) {
    return <></>;
  } else {
    return (
      <Div mycolor={colors.get(skill._id)}>
        <div className="desc">
          <h1 className="main-desc">
            {skill.description[0]}
          </h1>
          <p className="p-desc">
            {skill.description[1]}
          </p>
          <Button mycolor="#ffffff7f" onClick={()=>{handleClick("contact")}}>Get in touch</Button>
        </div>
        <div className="tool-logo">
        {skill.tools.map((tool) => (
            <img src={tool.img} key={tool.name} alt="img not found" />
        ))}
        </div>
      </Div>
    );
  }
};

export default Skill;
