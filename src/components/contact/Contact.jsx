import React, {useRef} from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qr4hqor', 'template_q0izan8', form.current, 'DVHp_ogKWKSJhbLZK')
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Calvickauer@gmail.com</h5>
            <a href='mailto:calvickauer@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook Messenger</h5>
            <a href='http://m.me/calvickauer'>Send a Message</a>
          </article>
        </div>
      
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <label>Name</label>
          <input type="text" name="name" placeholder='Your Fullname' />
          <label>Email</label>
          <input type="email" name="email" placeholder='Your Email/Emails'/>
          <label>Message</label>
          <textarea name="message" placeholder='Your Message here..'/>
          <input type="submit" value="Send" />
        </form>
        

        
      </div>
    </section>
  )
}

export default Contact