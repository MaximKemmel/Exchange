import { useState } from "react";

import HomeImage from "../../assets/home.png";
import HomeImageDisabled from "../../assets/home_disabled.png";
import WalletImage from "../../assets/wallet.png";
import WalletImageDisabled from "../../assets/wallet_disabled.png";
import WorkImage from "../../assets/ticket.png";
import WorkImageDisabled from "../../assets/ticket_disabled.png";
import IcoImage from "../../assets/doc.png";
import IcoImageDisabled from "../../assets/doc_disabled.png";
import SettingsImage from "../../assets/settings.png";
import SettingsImageDisabled from "../../assets/settings_disabled.png";
import "./layout.css";

import Home from "../Home/Home";
import Wallet from "../Wallet/Wallet";
import Work from "../Work/Work";

const Layout = () => {
  const [activeNav, setActiveNav] = useState(0);
  const parts = [<Home />, <Wallet />, <Work />] as JSX.Element[];

  return (
    <div className="wrapper">
      {parts[activeNav]}
      <div className="navigation">
        <div className={`item ${activeNav === 0 ? "active" : null}`} onClick={() => setActiveNav(0)}>
          <img src={activeNav == 0 ? HomeImage : HomeImageDisabled} alt="" />
          <div className="label">Home</div>
        </div>
        <div className={`item ${activeNav === 1 ? "active" : null}`} onClick={() => setActiveNav(1)}>
          <img src={activeNav == 1 ? WalletImage : WalletImageDisabled} alt="" />
          <div className="label">Wallet</div>
        </div>
        <div className={`item ${activeNav === 2 ? "active" : null}`} onClick={() => setActiveNav(2)}>
          <img src={activeNav == 2 ? WorkImage : WorkImageDisabled} alt="" />
          <div className="label">Work</div>
        </div>
        <div className={`item ${activeNav === 3 ? "active" : null}`} onClick={() => setActiveNav(3)}>
          <img src={activeNav == 3 ? IcoImage : IcoImageDisabled} alt="" />
          <div className="label">ICO</div>
        </div>
        <div className={`item ${activeNav === 4 ? "active" : null}`} onClick={() => setActiveNav(4)}>
          <img src={activeNav == 4 ? SettingsImage : SettingsImageDisabled} alt="" />
          <div className="label">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
