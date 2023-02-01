import { useState } from "react";

const useTextUpdate = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return { value, onChange };
};

export default useTextUpdate;
