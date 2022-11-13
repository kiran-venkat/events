import React, { useRef } from "react";
import gpt3Logo from '../../logo.svg';
import './footer.css';
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0g6fr7m',
        'template_myrcmbl',
        form.current,
        'N0p0biKtyN7oFDwuB'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm className="gpt3__footer">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Footer;

// Styles
const StyledContactForm = styled.div`
  width: 900px;
  height: 490px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    font-size: 28px;
    color: white;
    font-family: var(--font-family);

    input {
      width: 100%;
      height: 35px;
      padding: 20px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);

      &:focus {
        border: 5px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1.9rem;
    }

    input[type="submit"] {
      margin-top: 1.5rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: 1rem;
      font-size: 15px;

    }
  }
`;



// import React, { useState } from 'react'

// const Contact = () => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [emailSent, setEmailSent] = useState(false);

//     return (
//         <div id="contact-form">
//         <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
//         <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
//         <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
//         <button onClick={submit}>Send Message</button>
//         <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
//         </div>
//     );
// };

// const submit = () => {
//   if (name && email && message) {
//      // TODO - send mail

//       setName('');
//       setEmail('');
//       setMessage('');
//       setEmailSent(true);
//   } else {
//       alert('Please fill in all fields.');
//   }
// }

// export default Contact;

// const isValidEmail = email => {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(String(email).toLowerCase());
// };



