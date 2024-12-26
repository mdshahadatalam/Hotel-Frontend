import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function LoggedOutUser(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Navigate to ='/' /> : <Outlet/>;
}