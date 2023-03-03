
import Logo from "../svgs/Logo";

import {Div} from "./BlogNav.styled";
import {NavLink} from "../navbar/Navbar.styled";


const BlogNav = ({ user })=>{
return (
        <Div>
            <span className="logo">
                <Logo className="logo" styles={{ width: "50px", height: "50px" }} />
            </span>
            <span className="text">
                <strong>Blog</strong>
            </span>
            {user && user.admin

                ?<NavLink to="/post" className="login">
                    Post Article
                 </NavLink>

                : null
            }
            <div className="menu">
                {user
                    ? <p>logout</p>
                    :
                    <NavLink to="/login" className="login">
                        Login
                    </NavLink>
                }
            </div>

        </Div>
)
};

export default BlogNav;
