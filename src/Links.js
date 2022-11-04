import { Link } from "react-router-dom";
import "./Links.css";

function Links() {
  return (
    <div className="container">
      <a href="https://twitter.com/slumberwarrior" id="btn__twitter">
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id="books">
        Zuri Books
      </a>
      <a href="https://books.zuri.team/" id="book_python">
        Python Books
      </a>
      <a href="https://background.zuri.team" id="pitch">
        Background Check for Coders
      </a>
      <a href="https://books.zuri.team/design-rules " id="book__design">
        Design Books
      </a>
      <Link to="/contact" id="contact">
        Contact
      </Link>
    </div>
  );
}

export default Links;
