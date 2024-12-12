import USDTImage from "../../assets/ic_usdt.png";
import USDTImageCircle from "../../assets/ic_usdt_circle.png";
import "./statistic.css";

const Statistic = () => {
  return (
    <div className="statistic_wrapper">
      <div className="main_statistic">
        <img src={USDTImage} alt="" />
        <div className="count">4 000</div>
        <div className="delta">+200</div>
      </div>
      <div className="statistic_list">
        {...Array(25)
          .fill(1)
          .map((_value, _index) => (
            <div className="statistic_item">
              <div className="avatar" />
              <div className="details">
                <div className="name">Denis</div>
                <div className="date">12.12.2024</div>
              </div>
              <div className="currency">
                <img className="currency_icon" src={USDTImageCircle} alt="" />
                <div className="currency_count">200</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Statistic;
