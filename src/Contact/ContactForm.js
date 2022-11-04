import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="f-container">
      <form>
        <div className="label-container">
          <label>First name</label>
          <label>Last name</label>
        </div>
        <div className="name-container">
          <input
            type="text"
            id="first_name"
            placeholder="  Enter your first name"
          />
          <input
            type="text"
            id="last_name"
            placeholder="  Enter your last name"
          />
        </div>
        <div className="email-container">
          <label>Email</label>
          <input type="email" id="email" placeholder="   yourname@email.com" />
        </div>
        <div className="message-container">
          <label>Message</label>
          <textarea
            id="message"
            placeholder=" Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="radio-container">
          <input type="checkbox" id="radio-btn"></input>
          <label>
            You agree to providing your data to Seun who may contact you
          </label>
        </div>
        <button id="btn__submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
