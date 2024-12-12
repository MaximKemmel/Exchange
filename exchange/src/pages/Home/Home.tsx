import { useState } from "react";

import NotificationsImage from "../../assets/notification.png";
import USDTImage from "../../assets/ic_usdt.png";
import USDTImageCircle from "../../assets/ic_usdt_circle.png";
import EtheriumImage from "../../assets/etherium.png";
import TriangleImage from "../../assets/triangle.png";
import "./home.css";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
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
  );
};

export default Home;
