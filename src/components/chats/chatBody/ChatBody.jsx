import "./chatBodyStyles.css";

const ChatBody = (props) => {
  return (
    <div className="chatBody_main_wrapper">
      {props.messages.map((message, i) => {
        return (
          <div key={i}>
            <div>
              {i > 0 && message.date !== props.messages[i - 1].date && (
                <div className="chatBody_date_separator_wrapper">
                  <hr className="chatBody_date_separator" />
                  <div className="chatBody_separator_date">{message.date}</div>
                </div>
              )}
            </div>
            <div className="chatBody_massage_wrapper" key={i}>
              <div>
                <img
                  className="chatBody_user_icon"
                  src={props.currentUser.icon}
                  alt="yourIcon"
                />
              </div>
              <div className="chatBody_massage_main-wrapper">
                <div className="chatBody_massage_head_wrapper">
                  <div className="chatBody_username">
                    {props.currentUser.name}
                  </div>
                  <div className="chatBody_massage_time">{message.time}</div>
                </div>
                <div className="chatBody_masage_wrapper">
                  {message.message && (
                    <div className="chatBody_masage">{message.message}</div>
                  )}
                  {props.messageImage && (
                    <img className="chatBody_image_message" src={URL.createObjectURL(message.image)} alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
