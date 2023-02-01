import { useState } from "react";

const useImageUpdate = () => {
  const [image, setImage] = useState(" ");

  const onChange = (event) => {
    const [imageFile] = event.target.files;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
      console.log(fileReader.result);
    };
    fileReader.readAsDataURL(imageFile);
  };
  return { image, onChange };
};

export default useImageUpdate;
