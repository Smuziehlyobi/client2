
// По аналогии расширять компоненты начиная с appRoutes
import Login from "../../../pages/Login/Login.jsx";
import MainPage from "../../../pages/MainPage.jsx";

export const appRoutes = {
  MAIN : 'main',
  LOGIN : 'login',
  NOT_FOUND : 'not_found'
}

export const RoutePaths = {
  [appRoutes.MAIN]: '/',
  [appRoutes.LOGIN]: '/login',
  [appRoutes.NOT_FOUND]: '*'
}
export const RouteConfig = {
  [appRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  [appRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <Login/>
  },
  [appRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <>NotFoundComponent</>
  }
}