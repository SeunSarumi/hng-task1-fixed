import "./Contact.css";
import ContactHead from "./ContactHead";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="form-container">
        <ContactHead />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
