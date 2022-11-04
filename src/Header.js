import "./Header.css";
import img from "./images/profile__img.png";
import img2 from "./images/share.png";

function Header() {
  return (
    <div className="head">
      <img src={img} alt="picture" id="img" />
      <p id="twitter">Slumberwarrior</p>
      {/* <p id="slack">Seun Sarumi</p> */}
      <img src={img2} alt="picture" id="share" />
    </div>
  );
}

export default Header;
