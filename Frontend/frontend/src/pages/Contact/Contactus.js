import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer ,toast } from "react-toastify";

function ContactUs() {


const HandleEvent=()=>{
  toast.success("messeage submit successfully")

}

  const navigate = useNavigate();
  return (
    <div className='backimage'>
      <br/>
    <div className="contact-us container  justify-content-center" style={{marginTop:"200px"}}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <h1 style={{ }}>Contact Us</h1>
          <p>
            Have a question, suggestion, or just want to say hello? Feel free to reach out to us using the contact form below, or through our other contact information.
          </p>
          <p>
            Address: 111 Sunbeam Institute, Karad, 415-410
          </p>
          <p style={{ color:'violet' }}>
            Phone: (+91) 9984578693
          </p>
          <p>
            Email: flatrentals@gmail.com
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <form>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control " style={{ transition: 'border 0.s' }} placeholder="Your Name" />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control " style={{ transition: 'border 0.3s' }} placeholder="Your Email" />
  </div>
  <div className="form-group">
    <label>Message</label>
    <textarea className="form-control " style={{ transition: 'border 0.3s' }} rows="5" placeholder="Your Message"></textarea>
  </div>
  <button type="submit" className="btn btn-success" style={{ transition: 'background-color 0.3s, border 0.3s, color 0.3s' }} onClick={() => HandleEvent()}>
    Submit
  </button>
  <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
</form>
<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
    <br/><br/><br/><br/>
    </div>
  );
}

export default ContactUs;