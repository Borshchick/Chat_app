import { useState } from "react";
import "./chatTamplateStyles.css";
import ChatInput from "../chatInput/ChatInput";
import ChatBody from "../chatBody/ChatBody";
const Chat = (props) => {
  const [value, setValue] = useState("");
  const [chatValue, setChatValue] = useState("");
  const [messages, setMasseges] = useState([]);
  const chatValueHandler = (e) => {
    setChatValue(e.target.value);
  };
  const pressEnterHandler = (e) => {
    if (e.key === "Enter"  ) {
      if(chatValue !== ''){
        const newMassage = {
        message: e.target.value,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      }
      setMasseges([...messages, newMassage]);
      setChatValue("");
      }
      
    }
  };
  return (
    <div className="main_chat_wrapper">
      <div className="chat_wrapper">
        <div className="header_chat_wrapper">
          <div className="chat_name">
            <div>#{props.name}</div>
            <div>
              <img src={require("./../../../images/star.png")} alt="stat.png" />
            </div>
          </div>
          <div className="chat_navigation_wrapper">
            <div className="chat_counter">
              <div>
                <img
                  src={require("./../../../images/person.png")}
                  alt="person.png"
                />
              </div>
              <div>1,093</div>
            </div>
            <div className="chat_navigation_search_wrapper">
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="chat_navigation_search_input"
                type="text"
                placeholder="Search..."
              />
              <img
                className="chat_navigation_search_img"
                src={require("./../../../images/searchIcon.png")}
                alt="searchIcon.png"
              />
            </div>
            <div>
              <img
                src={require("./../../../images/masage.png")}
                alt="masege.png"
              />
            </div>
            <div>
              <img src={require("./../../../images/dots.png")} alt="dots.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="chat_content_wrapper">
        <ChatBody chatValue={chatValue} messages={messages} name={props.name}/>
      </div>
      <div className="chat_main_input_wrapper">
        <ChatInput
          chatValue={chatValue}
          name={props.name}
          onChangeValue={chatValueHandler}
          onEnterKey={pressEnterHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
