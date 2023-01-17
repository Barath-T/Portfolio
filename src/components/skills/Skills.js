import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const getSkillsData = () => {
  return [
    { id: 1, name: "HTMLandCSS" },
    { id: 2, name: "Javascipt" },
    { id: 3, name: "Frontend" },
    { id: 4, name: "Backend" },
    { id: 5, name: "C++" },
  ];
};
const Skills = ({ selectedSkill }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(getSkillsData());
  }, []);

  const { name } = useParams();
  return (
    <div>
      <p>Skills:</p>

      {name ? (
        <div>
          {skills.map((skill) => (
            <Link to={`/skills/${skill.name}`} key={skill.id}>
              {skill.name}
            </Link>
          ))}
        </div>
      ) : (
        <div>
          {skills.map((skill) => (
            <Link to={`/skills/${skill.name}`} key={skill.id}>
              -{skill.name}-
            </Link>
          ))}
        </div>
      )}

      <Outlet
        context={{ skill: skills.find((skill) => skill.name === name) }}
      />
    </div>
  );
};

export default Skills;
