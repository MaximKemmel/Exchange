import "./notifications.css";

const Notifications = () => {
  return (
    <div className="notifications_wrapper">
      <div className="notifications_container">
        <div className="day_container">
          <div className="day">Сегодня</div>
          <div className="notifications_list">
            {...Array(2)
              .fill(1)
              .map((_value, _index) => (
                <div className="notification">
                  <div className="notification_header">
                    <div className="icon" />
                    <div className="time">15:13</div>
                  </div>
                  <div className="notification_title">Считайте до 5</div>
                  <div className="notification_description">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC
                  </div>
                  <div className="more_info">Подробнее</div>
                </div>
              ))}
          </div>
        </div>
        <div className="day_container">
          <div className="day">Вчера</div>
          <div className="notifications_list">
            {...Array(4)
              .fill(1)
              .map((_value, _index) => (
                <div className="notification">
                  <div className="notification_header">
                    <div className="icon" />
                    <div className="time">15:13</div>
                  </div>
                  <div className="notification_title">Считайте до 5</div>
                  <div className="notification_description">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC
                  </div>
                  <div className="more_info">Подробнее</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
