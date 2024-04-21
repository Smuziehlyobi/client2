import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "./routeConfig.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element, isPrivate }) => (

        <Route
          key={path}
          path={path}
          element={
            isPrivate
              ?
              (<PrivateRoute>{element}</PrivateRoute>)
              :
              (<div className={''}>{element}</div>)}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;