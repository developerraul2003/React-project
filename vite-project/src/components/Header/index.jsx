import headerImage from "../../image/Standard Collection 9 (2).svg";
import profileIcon from "../../image/Profile Button.svg";
import buildingImage from "../../image/Main.jpg";
import "../../css/header.css";
export const Header = ({ lists }) => {
  return (
    <>
      <header>
        <nav>
          <ul class="nav-bar">
            <li class="logo">
              <img src={headerImage} alt="" />
              <a href="#">
                <b>fasthome</b>
              </a>
            </li>
            <input type="checkbox" name="" id="check" />
            <span class="menu">
              {lists.map((list, index) => (
                <li key={index}>
                  <a href="#">{list}</a>
                </li>
              ))}
              <label for="check" class="close-menu">
                <i class="fas fa-times"></i>
              </label>
            </span>
            <label for="check" class="open-menu">
              <i class="fas fa-bars"></i>
            </label>
            <div class="button">
              <button className="advertise-button">
                <a href="#">Advertise</a>
              </button>
             <a href="#"><img id="profile" src={profileIcon} alt="" /></a> 
            </div>
          </ul>
        </nav>
      </header>
      <div className="mainImage">
        <img src={buildingImage} alt="" />
      </div>
    </>
  );
};
