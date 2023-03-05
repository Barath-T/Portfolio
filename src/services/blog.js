import axios from "axios";

let token = null;

const setToken = (newToken)=>{
  token = `bearer ${newToken}`;
}

const login = async (credentials)=>{
  const response = await axios.post("/api/login", credentials);
  return response.data;
  
};
const tokenValid = async ()=>{
  const config = {
    headers: {Authorization: token},
  };
  const response = await axios.post("/api/login/tokenValid", token, config);
  return response.data;
};

const getArticles = async (limit)=>{
  const response = await axios.get(`/api/articles?limit=${limit}`);
  return response.data;
};

const getArticle = async (id)=>{
  const response = await axios.get(`/api/articles/${id}`);
  return response.data;
}

const postArticle = async(obj)=>{
  const config = {
    headers: {Authorization: token},
  };
  const response = await axios.post("/api/articles", obj, config);
  return response.data;
}

const postComment = async(articleId, comment)=>{
  const config = {
    headers: {Authorization: token},
  };
  const response = await axios.post(`/api/articles/${articleId}/comment`, { comment }, config);
  return response.data;
};


const services = { setToken, login, tokenValid, getArticles, getArticle, postArticle, postComment };
export default services;
