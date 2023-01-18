import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getAll } from "../../services/db";

const Skills = ({ selectedSkill }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => setSkills(await getAll("skills")))();
  }, []);

  const { name } = useParams();
  return (
    <div>
      <p>Skills:</p>
      <div>
        {name
          ? skills.map((skill) => (
              <Link to={`/skills/${skill.name}`} key={skill.id}>
                {skill.name}
              </Link>
            ))
          : skills.map((skill) => (
              <Link to={`/skills/${skill.name}`} key={skill.id}>
                -{skill.name}-
              </Link>
            ))}
      </div>
      <Outlet
        context={{ skill: skills.find((skill) => skill.name === name) }}
      />
    </div>
  );
};

export default Skills;
