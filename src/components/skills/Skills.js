import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getAll } from "../../services/db";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => setSkills(await getAll("skills")))();
  }, []);

  const { title } = useParams();
  return (
    <div>
      <p>Skills:</p>
      {title ? (
        <div>
          {skills.map((skill) => (
            <Link to={`/skills/${skill.title}`} key={skill._id}>
              {skill.title}
            </Link>
          ))}
        </div>
      ) : (
        <div>
          {skills.map((skill) => (
            <Link
              style={{ display: "block" }}
              to={`/skills/${skill.title}`}
              key={skill._id}
            >
              {skill.title} - tools:{" "}
              {skill.tools.map((tool) => (
                <img
                  style={{ width: "auto", height: "20px" }}
                  src={tool.img}
                  alt="no img"
                />
              ))}
            </Link>
          ))}
        </div>
      )}

      <Outlet
        context={{ skill: skills.find((skill) => skill.title === title) }}
      />
    </div>
  );
};

export default Skills;
