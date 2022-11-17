import "./styleForm.css";

const ContactUs = () => {
  return (
    <div className="container border" style={{
      backgroundImage: `url("https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1060&t=st=1668437757~exp=1668438357~hmac=bb7cdd861137cc2e1dd9266b397009499afcae443e2077a7396363860dceaecc")`,
      backgroundPosition: "center",
      backgroundSize: 'cover',
    }}
    >
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6">

          <h1 style={{ marginTop: '25px', marginLeft: '1em' }}>Contact Us</h1>
          <form className='row'>
            <div className="col-12">
              <label>Name</label>
              <input type='text' name='name' className="form-control" />
            </div>

            <div className="col-12">

              <label>Email</label>
              <input type='email' name='user_email' className="form-control" />
            </div>

            <div className="col-12">

              <label>Message</label>
              <textarea className="form-control" name="message" rows='6' />
              <input type='submit' value='send' className="form-control" style={{ marginTop: '1em' }} />
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}



export default ContactUs; 