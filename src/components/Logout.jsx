import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigationType } from "react-router-dom";
import { logout } from "../Redux/actions";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(logout(false))
    navigate("/")
  },[])

  return <></>;
};
