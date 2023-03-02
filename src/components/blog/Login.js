import useTextUpdate from "../../myhooks/useTextUpdate"; 

import loginService from "../../services/login";
import articleService from "../../services/article";

const Login = ()=>{
    const username = useTextUpdate();
    const password = useTextUpdate();
    
    const handleLogin = async(e)=>{
        e.preventDefault();
        const response = await loginService.login({username:username.value, password:password.value});

        articleService.setToken(response.token);
        window.localStorage.setItem("loggedInUser", JSON.stringify(response));

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
