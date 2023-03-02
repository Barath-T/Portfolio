import axios from "axios";

let token = null;

const setToken = (newToken)=>{
  token = newToken;
  console.log(token);
}

const services = { setToken }
export default services;
