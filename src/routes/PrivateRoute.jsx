import { useContext } from "react";

import { Navigate, useLocation } from "react-router";

import spin from '../assets/spin.gif'
import { UserContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <img className="w-40 mx-auto mt-80" src={spin} alt="loader" />;
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;