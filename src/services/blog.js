import axios from "axios";

let token = null;

const setToken = (newToken)=>{
  token = "bearer "+newToken;
}

const login = async (credentials)=>{
  const response = await axios.post("/api/login", credentials);
  return response.data;
  
};
const tokenValid = async (token)=>{
  const config = {
    Headers: {Authorization: token},
  };
  const response = await axios.post("/api/login/tokenValid", token, config);
  return response.data;
};

const services = { login, tokenValid, setToken };
export default services;
