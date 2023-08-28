import { useRef, useState } from "react";
import "./chatTamplateStyles.css";
import ChatInput from "../chatInput/ChatInput";
import ChatBody from "../chatBody/ChatBody";
import { User } from "../../../store/store";
const Chat = (props) => {
  const [value, setValue] = useState("");
  const [chatValue, setChatValue] = useState("");
  const [messages, setMasseges] = useState([]);
  const [currentUser] = useState(User);
  const [messageImage, setMessageImage] = useState();
  const inputRef = useRef()
  const chatValueHandler = (e) => {
    setChatValue(e.target.value);
  };
  const pressEnterHandler = (e) => {
    if (e.key === "Enter") {
      if (chatValue !== "" || messageImage) {
        let newMassage = {
          message: e.target.value,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          image: messageImage,
        };
        setMasseges([...messages, newMassage]);
        setChatValue("");
      }
    }
  };
  const addFileHandler = (e) => {
      const file = e.target.files[0];
      console.log(file);
      setMessageImage(file);
      setChatValue(file.value)
      inputRef.current.focus()
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
        <ChatBody
          messageImage={messageImage}
          chatValue={chatValue}
          messages={messages}
          name={props.name}
          currentUser={currentUser}
        />
      </div>
      <div className="chat_main_input_wrapper">
        <ChatInput
          inputRef = {inputRef}
          chatValue={chatValue}
          messageImage={messageImage}
          name={props.name}
          onChangeValue={chatValueHandler}
          onEnterKey={pressEnterHandler}
          onChangeFile={addFileHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
