// По аналогии расширять компоненты начиная с appRoutes
import Unregistered from "../../../components/Unregistered/Unregistered.jsx";
import Login from "../../../pages/Login/Login.jsx";
import MainPage from "../../../pages/MainPage.jsx";
import Wallet from "../../../pages/Wallet/Wallet.jsx";

export const appRoutes = {
  MAIN: "main",
  UNREGISTERED: "createcard",
  LOGIN: "login",
  WALLET: "wallet",
  NOT_FOUND: "not_found",
};

export const RoutePaths = {
  [appRoutes.MAIN]: "/",
  [appRoutes.UNREGISTERED]: "/createcard",
  [appRoutes.WALLET]: "/wallet",
  [appRoutes.LOGIN]: "/login",
  [appRoutes.NOT_FOUND]: "*",
};
export const RouteConfig = {
  [appRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [appRoutes.UNREGISTERED]: {
    path: RoutePaths.createcard,
    element: <Unregistered />,
  },
  [appRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <Login />,
  },
  [appRoutes.WALLET]: {
    path: RoutePaths.wallet,
    element: <Wallet />,
  },
  [appRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <>NotFoundComponent</>,
  },
};
