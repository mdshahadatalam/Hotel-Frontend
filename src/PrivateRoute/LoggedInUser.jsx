import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../Pages/Login";

export default function LoggedInUser(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Outlet/> : <Login/>
}