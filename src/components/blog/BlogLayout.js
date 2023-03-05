import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import blogService from "../../services/blog";
import BlogNav from "./BlogNav";

const Blog = ()=>{
    const [user, setUser] = useState(null);
      

    useEffect(()=>{
        (async()=>{
        const loggedInUser = window.localStorage.getItem("loggedInUser");
        if(loggedInUser){
            blogService.setToken(JSON.parse(loggedInUser).token);
            const u = await blogService.tokenValid();
            setUser(u);
        }
        })();
    }, []);
  
    const logout = (event)=>{
        event.preventDefault();
        setUser(null);
        window.localStorage.removeItem("loggedInUser");
    }
    return (
    <>
        <BlogNav user={ user } logout={ logout } />
        <Outlet context={{userLogged: user? true: false}}/>
    </>
    );
};

export default Blog;
