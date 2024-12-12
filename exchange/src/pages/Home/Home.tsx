import NotificationsImage from "../../assets/notification.png";
import USDTImage from "../../assets/ic_usdt.png";
import EtheriumImage from "../../assets/etherium.png";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

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
            </div>
            <div className="count">0.00191 ETH</div>
            <div className="currency">Etherium</div>
          </div>
          <div className={`card container_block ${activeCard === 1 ? "active" : null}`} onClick={() => setActiveCard(1)}>
            <div className="header_info">
              <img src={EtheriumImage} alt="" />
            </div>
            <div className="count">0.00191 ETH</div>
            <div className="currency">Etherium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
