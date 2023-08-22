import { NavLink } from "react-router-dom";
import "./errorNotFoundPageStyles.css";

const PageNotFound = () => {
  return (
    <div className="error_page_main_wrapper">
      <div className="error_page_wrapper">
        This Page doesn`t exist return
        <NavLink to={"/general"}> Back</NavLink>
      </div>
      <div>
        <img
          className="error_page_image"
          src={require("./../../images/notFoundError.jpg")}
          alt="error.png"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
