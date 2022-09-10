import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";

import auth from "../../firebase";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading visible={true} />;
  } else if (!loading && !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
