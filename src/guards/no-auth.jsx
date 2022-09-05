import React, { useEffect } from 'react'
import {Outlet, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

export default function NoAuthGuard() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.userReducer);
    useEffect(() => {
        if(userState.user){
            navigate("/");
        }
    },[])
  return (
   <Outlet/>
  )
}
