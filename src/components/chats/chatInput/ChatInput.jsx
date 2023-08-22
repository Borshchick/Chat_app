import "./chatInput.css";
const ChatInput = (props) => {
  return (
    <div className="chat_input_wrapper">
      <div className="chat_icons">
        <input id="fileInput" type="file"/>
        <label htmlFor="fileInput">
          <img
            src={require("./../../../images/fileInput.png")}
            alt="fileInput.png"
          />
        </label>
        <div>
          <img
            src={require("../../../images/soundInput.png")}
            alt="soundInput.png"
          />
        </div>
      </div>

      <div className="chat_text_input_wrapper">
        <input
          autoComplete="off"
          name={props.name}
          className="chat_text_input"
          value={props.chatValue}
          onChange={props.onChangeValue}
          onKeyDown={props.onEnterKey}
          type="text"
          placeholder={"Massage in #" + props.name}
        />
      </div>
      <div>
        <img src={require("../../../images/smile.png")} alt="smile.png" />
      </div>
    </div>
  );
};

export default ChatInput;
