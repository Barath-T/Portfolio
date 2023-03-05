import { useNavigate } from "react-router-dom";

import Logo from "../svgs/Logo";

import { Link } from "react-router-dom";
import {Div} from "./BlogNav.styled";
import {NavLink} from "../navbar/Navbar.styled";

import blogService from "../../services/blog"; 


const BlogNav = ({ user, logout})=>{
    const navigate = useNavigate();

    const onClickPost = async()=>{
        try{
            await blogService.tokenValid();
        }
        catch(ex){
            navigate("/blog/login");
        }
    }

    return (
        <Div>
            <span className="logo">
                <Link to="/"><Logo className="logo" styles={{ width: "50px", height: "50px" }} /></Link>
            </span>
    
            <Link to="/Blog" className="text">
                <strong>Blog</strong>
            </Link>
            <div className="menu">
                {user && user.admin

                    ?<Link to="/blog/post" className="post" onClick={ onClickPost }>
                        Post Article
                     </Link>

                    : null
                }
                {user
                    ? <button onClick={logout} className="logout">logout</button>
                    :
                    <NavLink to="/blog/login" className="login" >
                        Login
                    </NavLink>
                }
            </div>

        </Div>
)
};

export default BlogNav;
