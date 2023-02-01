import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = async (type) => {
  return (await axios.get(`${baseUrl}/api/${type}`)).data;
};
const post = async (type, obj) => {
  const response = await axios.post(`${baseUrl}/api/${type}`, obj);
  return response.data;
};
export { getAll, post };
