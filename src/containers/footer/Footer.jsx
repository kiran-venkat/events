import React, { useRef } from "react";
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
        'template_47siyra',
        form.current,
        'N0p0biKtyN7oFDwuB'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm className="gpt3__footer">

<div className="gpt3__contactus">
      <h1>Contact Us</h1> <br /> <br />
      </div>

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
  height: 550px;
  align-items: right;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    margin-bottom: 200px;
    font-size: 28px;
    color: white;
    font-family: var(--font-family);

    input {
      width: 100%;
      height: 35px;
      padding: 25px;
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
      margin-top: 0rem;
    }

    form{
      margin-top:10px;
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: 1rem;
      font-size: 15px;

    }
  }
`;




