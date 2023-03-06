import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import useTextUpdate from "myhooks/useTextUpdate"; 

import blogService from "services/blog";

const Login = ()=>{
    const username = useTextUpdate();
    const password = useTextUpdate();
    
    const navigate = useNavigate();
    const { userLogged } = useOutletContext();
    
    useEffect(()=>{
        if(userLogged){
            navigate("/blog");
        }
    }, [userLogged, navigate]);

    const handleLogin = async(e)=>{
        e.preventDefault();
        const response = await blogService.login({username:username.value, password:password.value});
        window.localStorage.setItem("loggedInUser", JSON.stringify(response));
        navigate(-2);
        window.location.reload();
    };
    return(
        <div>
              <input type="text" value={username.value} onChange={(e)=>username.onChange(e)} name="username" placeholder="Username" />
              <input type="password" value={password.value} onChange={(e)=>password.onChange(e)} name="password" placeholder="Password" />
              <button type="submit" onClick={(e)=>handleLogin(e)}>Login</button>
          </div>
    );
};
export default Login;
