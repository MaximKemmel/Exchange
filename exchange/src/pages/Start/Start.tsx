import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../assets/start_image.png";
import "./start.css";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="background">
        <div className="center_circle" />
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="title">App Name</div>
      <div className="description">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC
      </div>
      <button className="start_button" type="button" onClick={() => navigate("/home")}>
        Начать
      </button>
    </div>
  );
};

export default Start;
