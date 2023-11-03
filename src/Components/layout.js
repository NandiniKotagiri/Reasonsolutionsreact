import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    
    return(
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/myapplication" >MyApplication</Link>
                </li>
                <li style={{marginTop:"15px"}}>
                    <Link to="/form">Form</Link>
                </li>
                <li style={{marginTop:"15px"}}>
                    <Link to="/welcome">Welcome</Link>
                </li>
            </ul>
        </nav>
       
        <Outlet/>
     </div>
    )
};
export default Layout