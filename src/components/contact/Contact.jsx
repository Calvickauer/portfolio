import React, {useRef} from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyjzxul', 'template_q0izan8', form.current, 'DVHp_ogKWKSJhbLZK');

    e.target.reset()
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
          {/* <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone='>Send a Message</a>
          </article> */}
        </div>

        <form href={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder="Your Email" required />
          <textarea name='message' rows='7' placeholder='your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact