import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getAll } from "../../services/db";

import { AllDispDiv, SkillsLink, Div } from "./Skills.styled.js";
const colors = ["#d4ee9b", "#51e2c4", "#61d9ff", "#bdaaf6", "#ff6d70"];
const Skills = () => {
  const [skills, setSkills] = useState([]);

  let color = -1;
  let colorsMap = new Map();
  let imgCount = 0;

  skills.map((skill)=>{
    color = (colors.length-1>color)?color+1:0;
    colorsMap.set( skill._id, colors[color]);
    return null;
  });
  
  useEffect(() => {
    (async () => setSkills(await getAll("skills")))();
    
  }, []);
    
  const { title } = useParams();

  return (
    <Div titlesize={title?("1.5rem"):("")}>
      <span className="title" >Skills:</span>
      {title ? (
        <span className="title-list">
          {skills.map((skill) => (
            <Link to={`/skills/${skill.title}`} key={skill._id} >
              {skill.title}
            </Link>
          ))}
        </span>
      ) : (
        <AllDispDiv>
          {skills.map((skill) => {
            imgCount = 0;
            return (<SkillsLink
              to={`/skills/${skill.title}`}
              key={skill._id}
              linkcolor={colorsMap.get(skill._id)}
            >
              <span className="title-desc">
                <span className="skill-title">{skill.title}</span>
                <span className="desc">{skill.quick}</span>
              </span>
              <span className="img-span">
              {skill.tools.map((tool) => {
                    imgCount++;
                    if(imgCount>3){

                      return null;
                    }
                    else{
                      return (<img
                      key={tool.name}
                      src={tool.img}
                      alt="no img"
                    />);
                    }})}
              </span>
            </SkillsLink>
          )})}
        </AllDispDiv>
      )}

      <Outlet
        context={{ skill: skills.find((skill) => skill.title === title), colors:colorsMap }}
      />
    </Div>
  );
};

export default Skills;
