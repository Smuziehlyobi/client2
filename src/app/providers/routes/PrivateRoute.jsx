import {useAppSelector} from "../Store/hooks.js";
import {Navigate} from "react-router";
import {selectAuth} from "../../../features/auth/authSlice.js";
import {appRoutes, RoutePaths} from "./routeConfig.jsx";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAppSelector(selectAuth)
  if (!isLoggedIn) {
    // not logged in so redirect to login page with the return url
    return <Navigate to={RoutePaths[appRoutes.UNREGISTERED]} state={{ from: history.location }} />
  }

  // authorized so return child components
  return children
}

export default PrivateRoute
