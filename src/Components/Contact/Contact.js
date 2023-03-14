import mail from "../../Images/mail.png";
import world from "../../Images/world.png";
import call from "../../Images/call.png";
import bg from "../../Images/contactBg.png";
import Footer from "../Footer/Footer";
import "./Contact.css";

function Contact() {
  const contact = [
    {
      icon: `${mail}`,
      title: "info@yourdomain.com",
    },
    {
      icon: `${call}`,
      title: "+1 (378) 400-1234",
    },
    {
      icon: `${world}`,
      title: "www.yourdomain.com",
    },
  ];
  return (
    <div className="contactContainer">
      {/* Image Section */}
      <div className="contactImage">
        <img src={bg} alt="" className="conImage" />
      </div>
      {/* End Of image section */}
      <h1 className="text-center mt-5">Contact Us</h1>
      {/* text Feild Section */}
      <div className="form">
        <div className="left">
          {contact.map((e) => {
            return (
              <div className="card">
                <img src={e.icon} alt="" className="icon" />
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>
        <div className="right">
          <form action="">
            <div className="top">
              <input type="text" name="Name" id="" placeholder="Name" />
              <input type="email" name="Email" id="" placeholder="Email" />
            </div>
            <div className="top">
              <input type="text" name="Subject" id="" placeholder="Subject" />
              <input type="mobile" name="Mobile" id="" placeholder="Phone" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Hey...."
            ></textarea>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      {/* End Of text feild Section */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
