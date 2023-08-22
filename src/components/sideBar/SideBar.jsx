import "./sideBarStyle.css";

const SideBar = () => {
  const images = [
    { src: require("../../images/image 1.png"), alt: "FirstImg" },
    { src: require("../../images/2.png"), alt: "SecondImg" },
    { src: require("../../images/3.png"), alt: "ThirdImg" },
    { src: require("../../images/4.png"), alt: "FourImg" },
    { src: require("../../images/5.png"), alt: "FiveImg" },
    { src: require("../../images/6.png"), alt: "SixImg" },
    { src: require("../../images/7.png"), alt: "SevenImg" },
  ];
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_navigation_wrapper">
        <nav className="sideBar_navigation_wrapper">
          {images.map((image, index) => {
            return (
              <li key={index} className="sideBar_navigation_li">
                <img
                  className="sidebar_navigation_image"
                  src={image.src}
                  alt={image.alt}
                />
              </li>
            );
          })}
        </nav>
        <div className="addButton_wrapper">
          <div className="addButton_circle">
            <div className="addButton">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
