/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace="true" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
