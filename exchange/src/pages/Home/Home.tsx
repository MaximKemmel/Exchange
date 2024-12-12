import NotificationsImage from "../../assets/notification.png";
import USDTImage from "../../assets/ic_usdt.png";
import USDTImageCircle from "../../assets/ic_usdt_circle.png";
import EtheriumImage from "../../assets/etherium.png";
import TriangleImage from "../../assets/triangle.png";
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
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="container_block usdt_count">
            <img src={USDTImage} alt="" />
            <div className="count">0.001916894</div>
          </div>
          <div className="container_block notifications">
            <div className="icon">
              <img src={NotificationsImage} alt="" />
              <div className="indicator" />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className={`card container_block ${activeCard === 0 ? "active" : null}`} onClick={() => setActiveCard(0)}>
            <div className="header_info">
              <img src={EtheriumImage} alt="" />
              <div className="more_info">
                <div className="end">End of sale</div>
                <div className="date">15.10.24</div>
              </div>
            </div>
            <div className="count">0.00191 ETH</div>
            <div className="currency">Etherium</div>
          </div>
          <img className="triangle" src={TriangleImage} alt="" />
          <div className={`card container_block ${activeCard === 1 ? "active" : null}`} onClick={() => setActiveCard(1)}>
            <div className="header_info">
              <img src={EtheriumImage} alt="" />
              <div className="more_info">
                <div className="end">End of sale</div>
                <div className="date">15.10.24</div>
              </div>
            </div>
            <div className="count">0.00191 ETH</div>
            <div className="currency">Etherium</div>
          </div>
        </div>
        <div className="currencies">
          <div className="currency container_block">
            <div className="currency_count">
              <img src={USDTImageCircle} alt="" />
              <div className="count">20 000</div>
            </div>
            <div className="currency_name">USDT</div>
          </div>
          <div className="currency container_block">
            <div className="currency_count">
              <img src={USDTImageCircle} alt="" />
              <div className="count">20 000</div>
            </div>
            <div className="currency_name">RUB</div>
          </div>
        </div>
        <button className="buy_button" type="button">
          Buy
        </button>
      </div>
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

export default Home;
