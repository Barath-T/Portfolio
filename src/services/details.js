import axios from "axios";

export const getDetails = async()=>{
  return (await axios.get(`/api/details`)).data;
};
  
