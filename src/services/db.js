import axios from "axios";


const getAll = async (type) => {
  return (await axios.get(`/api/${type}`)).data;
};
const post = async (type, obj) => {
  const response = await axios.post(`/api/${type}`, obj);
  return response.data;
};
export { getAll, post };
