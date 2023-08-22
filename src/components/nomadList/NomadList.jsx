import "./nomadListStyles.css";
import chats, { friends } from "../../store/store";
import { NavLink, } from "react-router-dom";

const NomadList = () => {
  const chatCount = chats.length;
  return (
    <div className="nomadlist_main_wrapper_scroll">
      <div className="nomadlist_main_wrapper">
        <div className="nomadlist_label">
          Nomad List
          <div>
            <img
            className="nomadlist_setting_image"
            src={require("../../images/Combined shape 347.png")}
            alt="setting"
          />
          </div>
          
        </div>
        <div className="nomadlist_chats_wrapper">
          <div>
            <img
              src={require("../../images/Combined shape 353.png")}
              alt="chats"
            />
          </div>
          <div className="nomadlist_chats_label_wrapper">All treads</div>
        </div>
        <div>
          <div className="nomadlist_chats_counter_wrapper">
            <div>Chanels</div>
            <div>{chatCount}</div>
          </div>
            <nav className="nomadlist_chats_navigation">
              {chats.map((chat, i) => {
                return (
                  <ul key={i}>
                    <li className="nomadlist_chat_li">
                      <NavLink
                        activeclassname="active"
                        className="nomadlist_chat_a"
                        to={chat.name}
                      >
                        #{chat.name}
                      </NavLink>
                    </li>
                  </ul>
                );
              })}
            </nav>
          <div className="nomadlist_friends_wrapper">
            <div className="nomadlist_friends_counter">
              <div>Friends</div>
              <div>{friends.length}</div>
            </div>
            {friends.map((friend, index) => {
              return (
                <div key={index}>
                  <li className="nomadlist_friend_li">
                    <div>
                      <img className="nomadlist_friend_img" src={friend.userimg} alt={friend.name} />
                    </div>
                    <div>
                      {friend.name} {friend.surname}
                    </div>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomadList;
