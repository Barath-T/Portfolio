import useTextUpdate from "../../myhooks/useTextUpdate";
import useImageUpdate from "../../myhooks/useImageUpdate";
import { post } from "../../services/db";

import { useState } from "react";

const InputTools = ({ handleTools }) => {
  const name = useTextUpdate();
  const img = useImageUpdate();

  return (
    <div>
      <label htmlFor="tool-name">name</label>
      <input type="text" name="tool-name" {...name} />
      <label htmlFor="tool-img">icon</label>
      <input type="file" name="tool-img" onChange={img.onChange} />
    </div>
  );
};

const SkillForm = () => {
  const title = useTextUpdate();
  const description = useTextUpdate();
  const [tools, setTools] = useState([]);

  const handleTools = (tool) => {
    const found = tools.find((t) => t.name === tool.name);
    setTools([...tools, tool]);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      title: title.value,
      description: description.value,
      tools: [...tools],
    };

    const postedData = await post("skills", obj);
    console.log(postedData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <input type="text" name="title" {...title} />
        <label htmlFor="description">description</label>
        <input type="text" name="description" {...description} />
        <br />
        Tools:<button>add</button>
        <br />
        <InputTools handleTools={handleTools} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SkillForm;
