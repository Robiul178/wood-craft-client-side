import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, reload } = useContext(AuthContext)
    const location = useLocation()

    if (reload) {
        return <>
            <span className="loading loading-ring loading-lg"></span>
        </>
    }

    if (!user) {
        return <Navigate to='/login' state={location.pathname} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.func
};
export default PrivateRoute;