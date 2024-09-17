import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If there's no token, redirect to the homePage
    return <Navigate to="/" replace />;
  }

  // Otherwise, make the road accessible
  return children;
};

export default PrivateRoute;