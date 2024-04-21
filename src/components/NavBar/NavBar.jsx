import React from "react";
import Styles from "./NavBar.module.css";
import wallet from "../../assets/img/icons/wallet-ico.svg";
import calendarImg from "../../assets/img/icons/calendar.svg";
import newspaper from "../../assets/img/icons/newspaper.svg";
import cardChecklist from "../../assets/img/icons/card-checklist.svg";
import { Link } from "react-router-dom";
import { appRoutes, RoutePaths } from "../../app/providers/routes/routeConfig.jsx";

const NavBar = () => {
  return (
    <div className={Styles.nav}>
      <div className={`${Styles.navSlot} ${Styles.bgWhite} ${Styles.roundTopLeft}`}>
        <Link className={`${Styles.navLink} ${Styles.active}`} to={RoutePaths[appRoutes.WALLET]}>
          <img src={wallet} alt={"#wallet"} />
        </Link>
      </div>
      <div className={`${Styles.navSlot} ${Styles.bgWhite}`}>
        <Link to={RoutePaths[appRoutes.PRIVILEGES]} className={`${Styles.navLink}`}>
          <img src={calendarImg} alt={"#patch"} />
        </Link>
      </div>
      <div className={`${Styles.navSlot} ${Styles.curve}`}>
        <Link
          to={RoutePaths[appRoutes.QRREADER]}
          role="button"
          className={`${Styles.floatingButton}`}>
          <i className="fa fa-plus"></i>
        </Link>
      </div>
      <div className={`${Styles.navSlot} ${Styles.bgWhite}`}>
        <Link to={RoutePaths[appRoutes.NEWS]} className={`${Styles.navLink}`}>
          <img src={newspaper} alt={"#newspaper"} />
        </Link>
      </div>
      <div className={`${Styles.navSlot} ${Styles.bgWhite} ${Styles.roundTopRight}`}>
        <Link to={RoutePaths[appRoutes.HOSPITALS]} className={`${Styles.navLink}`}>
          <img src={cardChecklist} alt={"#cardChecklist"} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
