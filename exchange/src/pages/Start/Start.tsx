import BackgroundImage from "../../assets/start_image.png";
import "./start.css";

const Start = () => {
  return (
    <div className="wrapper">
      <div className="center_circle" />
      <img src={BackgroundImage} alt="" />
      <div className="title">App name</div>
    </div>
  );
};

export default Start;
