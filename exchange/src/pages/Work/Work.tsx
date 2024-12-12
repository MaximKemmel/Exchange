import BlockchainImage from "../../assets/blockchain.png";
import CopyImage from "../../assets/copy.png";
import "./work.css";

const Work = () => {
  return (
    <div className="container">
      <div className="work_background">
        <div className="center_circle" />
        <img src={BlockchainImage} alt="" />
      </div>
      <div className="title">Invite friends!</div>
      <div className="description">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC
      </div>
      <div className="invite_label">Invite link</div>
      <div className="invite_link">
        yg25yug3yu2gt3ool
        <img src={CopyImage} alt="" />
      </div>
      <button className="statistic_button" type="button">
        Statistic
      </button>
    </div>
  );
};

export default Work;
