import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"
// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
 const status=useSelector(store=>store.isLoggedIn)
  if (!status)return <Navigate to="/login"/>

    return children
};
