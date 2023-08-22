import "./userSidebarStyles.css";
const UserSidebar = () => {
  const medias = [
    { icon: require("./../../images/facebook.png") },
    { icon: require("./../../images/twitter.png") },
    { icon: require("./../../images/instagram.png") },
    { icon: require("./../../images/in.png") },
  ];
  return (
    <div className="user_sidebar_main_wrapper">
      <div className="user_sidebat_wrapper">
        <div className="user_sidebar_info">
          <img
            src={require("./../../images/userImage.png")}
            alt="userImg.png"
          />
        </div>
        <div className="user_sidebar_name_wrapper">
          <div className="user_sidebar_name">Amilia Luna</div>
          <div className="user_sidebar_profession">UI Designer</div>
        </div>
      </div>
      <div className="user_sidebar_info_wrapper">
        <div className="user_sidebar_media_wrapper">
          {medias.map((media, i) => {
            return (
              <div className="user_sidebar_media_icon_wrapper" key={i}>
                <img className="user_sidebar_media_icon" src={media.icon} alt="" />
              </div>
            );
          })}
        </div>
        <div className="user_sidebar_buttons">
          <button className="user_sidebar_massage_button">Massage</button>
          <button className="arrow_button_div">
            <img src={require("../../images/arrow.png")} alt="arrow.png" />
          </button>
        </div>
        <div className="user_sidebar_personal_info_wrapper">
          <div className="user_sidebar_personal_info">
            <div>Username</div>
            <div className="user_sidebar_info">@amilia_lu</div>
          </div>
          <div className="user_sidebar_personal_info">
            <div>Email</div>
            <div className="user_sidebar_info">a-luna@gmail.com</div>
          </div>
          <div className="user_sidebar_personal_info">
            <div>Skype</div>
            <div className="user_sidebar_info">amiluna</div>
          </div>
          <div className="user_sidebar_personal_info">
            <div>Timezone</div>
            <div className="user_sidebar_info">2:21 PM Local time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
