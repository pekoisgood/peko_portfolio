import React from 'react';
import './contact.css';
import { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vu4mbx6', 'template_twfz279', form.current, 'X1dH9OXr1VkqtD01R')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset(); //after submitting message, the input will clear
  }


  return (
    <section id='contact'>
        <p>To know more about me</p>
        <h2>Contact Me</h2>
        <div className='contact-container'>
          <div className='contact-options'>
            <section className='contact-option'>
              {/* < className="contact-option-icon"/> */}
              < HiOutlineMail />
              <h4>Email</h4>
              <h5>peko.claire@gmail.com</h5>
              <a href="mailto:peko.claire@gmail.com" target="_blank">Send a message</a>
            </section>
            <section className='contact-option'>
              {/* < className="contact-option-icon"/> */}
              <BiMessageDetail />
              <h4>Messanger</h4>
              <h5>莊孟璇</h5>
              <a href="https://m.me/profile.php?id=100002676016972" target="_blank">Send a message</a>
            </section>
            <section className='contact-option'>
              {/* < className="contact-option-icon"/> */}
              <AiOutlinePhone />
              <h4>Phone</h4>
              <h5>+886 0966096280</h5>
              <a href="tel:+0966096280" target="_blank">Send a message</a>
            </section>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" row="7" placeholder="Your Message" required />
            <button type="submit" className="btn btn-contact">Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact