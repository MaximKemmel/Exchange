import NotificationsImage from "../../assets/notification.png";
import USDTImage from "../../assets/ic_usdt.png";
import "./home.css";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
