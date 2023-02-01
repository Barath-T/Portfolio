import { useOutletContext } from "react-router-dom";

const Skill = ({ selectedSkill }) => {
  let { skill } = useOutletContext();
  skill = selectedSkill || skill;

  if (!skill) {
    return <></>;
  } else {
    return (
      <div>
        name:{skill.title}
        <br />
        id:{skill._id}
        <br />
        tools:
        {skill.tools.map((tool) => (
          <>
            <p key={tool._id}>{tool.name}</p>
            <img src={tool.img} alt="img not found" />
          </>
        ))}
      </div>
    );
  }
};

export default Skill;
