import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "./routeConfig.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(<div className={''}>{element}</div>)}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;