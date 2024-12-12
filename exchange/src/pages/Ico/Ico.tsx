import { useState } from "react";
import EtheriumImage from "../../assets/etherium.png";
import "./ico.css";

const Ico = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="line" />
      <div className="tabs">
        <div className={`tab ${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>
          Прошедшие
        </div>
        <div className={`tab ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
          Предстоящие
        </div>
      </div>
      {activeTab === 0 ? (
        <div className="operations">
          {...Array(50)
            .fill(1)
            .map((_value, _index) => (
              <div className="operation">
                <div className="main_info">
                  <img src={EtheriumImage} alt="" />
                  <div className="info">
                    <div className="count">0.00191 ETH</div>
                    <div className="currency">Etherium</div>
                  </div>
                </div>
                <div className="date_info">
                  <div className="end">Block end</div>
                  <div className="date">15.10.24</div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="operations">
          {...Array(50)
            .fill(1)
            .map((_value, _index) => (
              <div className="operation">
                <div className="main_info">
                  <img src={EtheriumImage} alt="" />
                  <div className="info">
                    <div className="count">0.00191 ETH</div>
                    <div className="currency">Etherium</div>
                  </div>
                </div>
                <div className="date_info">
                  <div className="date_item">
                    <div className="end">Start</div>
                    <div className="date">15.10.24</div>
                  </div>
                  <div className="date_item">
                    <div className="end">End</div>
                    <div className="date">15.10.24</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Ico;
