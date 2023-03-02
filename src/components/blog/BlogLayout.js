import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import BlogNav from "./BlogNav";

const Blog = ()=>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const loggedInUser = window.localStorage.getItem("loggedInUser");
        if(loggedInUser){
            setUser(loggedInUser);
        }
    }, []);
    return (
    <>
        <BlogNav user={user}/>
        <Outlet />
    </>
    );
};

export default Blog;
