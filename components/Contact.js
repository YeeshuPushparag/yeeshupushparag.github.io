import styles from "../styles/Contact.module.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function sendMail() {
    var params = {
      name: name,
      email: email,
      message: message,
    };
  
    const serviceID = "service_myb0hsv";
    const templateID = "template_bnk52na";
  
      emailjs.send(serviceID, templateID, params, "K6iJmsc5NRaRY64yR")
      .then(res=>{
        setName("");
        setMessage("");
        setEmail("");
          console.log(res);
          showAlert("Message sent successfully")
  
      })
      .catch(err=>console.log(err));
  
  }
  function showAlert(message) {
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px";
    messageAlert.children[0].innerHTML = message;
    setTimeout(() => {
      messageAlert.style.top = "-60px";
    }, 1500);
  }
  const submitContact = (e) => {
    e.preventDefault();
    var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");    
    if (!name || !email || !message) {
      showAlert("Any field cannot be blank");
  }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    showAlert("Please enter a valid e-mail address");    
    }
  else{
    sendMail()
  }
  };
  return (
    <section id='contact' className='section-container'>
        <h2 className='section-h2'>Contact</h2>
        <form className={styles.formContainer} onSubmit={submitContact}>
            <input type="text" placeholder='Your Name' name='name'value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='Your Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea name="message" cols="30" rows="15" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <div id="contactBtn" className="primary-btn"><button><span>Submit</span></button></div>
        </form>
    </section>
  )
}

export default Contact