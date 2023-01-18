import axios from "axios";

const baseUrl = "http://localhost:3002";

const getAll = async (type) => {
  return (await axios.get(`${baseUrl}/${type}`)).data;
};

export { getAll };
