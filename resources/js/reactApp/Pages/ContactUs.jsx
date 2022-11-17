import "./styleForm.css";

const ContactUs = () => {
  return (

    <div className="overlay contact-us" >

      <form>
        <h3 className="form-h1">Contact</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Your name"></input>
        <small className="error"></small>

        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Your email"></input>
        <small className="error"></small>

        <label for="message">Message:</label>
        <textarea id="message" placeholder="Your message" rows="6"></textarea>
        <small className="error"></small>

        <div className="center">
          <input id="contact-us-submit" type="submit" value="Send message"></input>
          <p id="success"></p>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;