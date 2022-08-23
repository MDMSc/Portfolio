import React, {useRef} from 'react'
import './contact.css';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jikjmrm', 'template_wq7olzi', form.current, 'HKupPKARljw_TPM6P');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <EmailIcon className='contact__option-icon' />
            <h4>Email</h4>
            <h5>m.s.choudhury96@gmail.com</h5>
            <a href='mailto:m.s.choudhury96@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FacebookIcon className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Murtaza Samim Choudhury</h5>
            <a href='https://m.me/m.samim.choudhury' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <WhatsAppIcon className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-9078802289</h5>
            <a href='https://api.whatsapp.com/send?phone=919078802289' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
