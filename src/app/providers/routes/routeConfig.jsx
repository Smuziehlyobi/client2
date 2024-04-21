// По аналогии расширять компоненты начиная с appRoutes
import Unregistered from "../../../pages/Unregistered/Unregistered.jsx";
import Login from "../../../pages/Login/Login.jsx";
import Wallet from "../../../pages/Wallet/Wallet.jsx";
import Settings from "../../../pages/Settings/Settings.jsx";
import News from "../../../pages/News/News.jsx";

export const appRoutes = {
  UNREGISTERED: "createcard",
  LOGIN: "login",
  WALLET: "wallet",
  NOT_FOUND: "not_found",
  SETTINGS: "settings",
  NEWS: "news",
};

export const RoutePaths = {
  [appRoutes.WALLET]: "/",
  [appRoutes.UNREGISTERED]: "/createcard",
  [appRoutes.LOGIN]: "/login",
  [appRoutes.NOT_FOUND]: "*",
  [appRoutes.SETTINGS]: "/settings",
  [appRoutes.NEWS]: "/news",
};
export const RouteConfig = {
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
  [appRoutes.SETTINGS]: {
    path: RoutePaths.settings,
    element: <Settings />,
  },
  [appRoutes.NEWS]: {
    path: RoutePaths.news,
    element: <News />,
  },
};
