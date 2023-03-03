import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import blogRouter from "../../services/blog";
import BlogNav from "./BlogNav";

const Blog = ()=>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        (async()=>{
        const loggedInUser = window.localStorage.getItem("loggedInUser");
        if(loggedInUser){
            const u = await blogRouter.tokenValid(loggedInUser.token);
            console.log(u);
            setUser(u);
        }
        })();
    }, []);
    return (
    <>
        <BlogNav user={user}/>
        <Outlet />
    </>
    );
};

export default Blog;
