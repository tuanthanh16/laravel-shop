import "./styleForm.css";
import "../components/user/LoginForm"

const ContactUs = () => {
  return (


    <>



      <section className="h-auto p-5" style={{ backgroundImage: "'../../images/background-imgs/fresh-colourful-ingredients-mexican-cuisine.jpg'" }}>
        <div className="container h-75">
          <div
            className="card text-black m-auto"
            style={{ borderRadius: "25px", width: "500px" }}
          >

            {/* <form>
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
      </form> */}
            <div className="card-body p-md-2">
              {/* <div className="auth-wrapper"> */}
              {/* <div className="auth-inner"> */}
              <form>
                <h3>Contact us</h3>
                <div className="mb-3">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"

                  />
                </div>
                <div className="mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"

                  />
                </div>
                <div className="mb-3">
                  <label>Message:</label>
                  <textarea id="message" placeholder="Your message" rows="6"></textarea>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>

      </section>


    </>
  )
}

export default ContactUs;



