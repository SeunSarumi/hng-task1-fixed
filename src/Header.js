import "./Header.css";

function Header() {
  return (
    <div className="head">
      <img src="/images/profile__img.png" alt="picture" id="img" />
      <p id="twitter">Slumberwarrior</p>
      {/* <p id="slack">Seun Sarumi</p> */}
      <img src="/images/share.png" alt="picture" id="share" />
    </div>
  );
}

export default Header;
