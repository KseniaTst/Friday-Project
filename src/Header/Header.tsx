import {NavLink} from "react-router-dom";
import React from "react";

function Header(){
    return(
        <div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/newPass'}>New Password</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/recoveryPass'}>RecoPassword</NavLink>
            <NavLink to={'/testingPage'}>Testing</NavLink>
            <NavLink to={'/Profile'}>Profile</NavLink>
        </div>
    )
}
export default Header