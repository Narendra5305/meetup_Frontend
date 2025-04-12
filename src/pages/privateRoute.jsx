import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authData = JSON.parse(localStorage.getItem('authData')) 
  const token = authData?.token 
  

  return token ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
