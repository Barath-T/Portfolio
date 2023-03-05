import { useState } from "react";

const useTextUpdate = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return { value, setValue, onChange };
};

export default useTextUpdate;
