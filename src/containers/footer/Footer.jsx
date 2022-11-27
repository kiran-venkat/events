import React, { useRef, useState } from "react";
import "./footer.css";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import client from "../../client.js";

AOS.init();

const Footer = () => {
  const [student, setstudent] = useState(true);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(91);
  const [college, setcollege] = useState("");
  const [year, setyear] = useState("");
  const [branch, setbranch] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0g6fr7m", "template_47siyra", form.current, "N0p0biKtyN7oFDwuB").then(
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

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    client
      .create({
        _type: "student",
        name: name,
        email: email,
        contact: contact,
        college: college,
        branch: branch,
        year: year,
        message: message,
      })
      .then((res) => {
        console.log("content added");
        setname("");
        setcontact(91);
        setmessage("");
        setemail("");
        setyear("");
        setcollege("");
        setemail("");
        setbranch("");
      });
  };

  const handleOrganiserSubmit = (e) => {
    e.preventDefault();
    client
      .create({
        _type: "organiser",
        name: name,
        email: email,
        contact: contact,
        message: message,
      })
      .then((res) => {
        console.log("content added");
        setname("");
        setcontact(91);
        setmessage("");
        setemail("");
      });
  };

  return (
    <div id="form" className="form-container" data-aos="fade-up">
      <StyledContactForm className="gpt3__footer" id="footer">
        <div className="gpt3__contactus">
          <h1 className="contactus">Contact Us</h1>
        </div>
        <div className="form-button">
          <button
            type="button"
            style={{ backgroundColor: student ? "var(--btn-color)" : "white", color: student ? "white" : "black" }}
            onClick={() => setstudent(true)}
          >
            Student
          </button>
          <button
            type="button"
            style={{ backgroundColor: student ? "white" : "var(--btn-color)", color: student ? "black" : "white" }}
            onClick={() => setstudent(false)}
          >
            Organizer
          </button>
        </div>
        {student ? (
          <form ref={form} onSubmit={handleStudentSubmit}>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>College Name</label>
            <input
              value={college}
              onChange={(e) => setcollege(e.target.value)}
              type="text"
              name="college"
              placeholder="Enter Your College"
              required
            />
            <label>Branch</label>
            <input
              value={branch}
              onChange={(e) => setbranch(e.target.value)}
              type="text"
              name="branch"
              placeholder="Enter Your Branch"
              required
            />
            <label>Year</label>
            <input
              value={year}
              onChange={(e) => setyear(e.target.value)}
              type="number"
              name="year"
              placeholder="Enter Your Year"
              required
            />
            <label>Gmail</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
            />
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              type="text"
              name="user_email"
              placeholder="Tell us Something"
              required
            />
            <label>Contact no</label>
            <input
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              type="number"
              name="user_email"
              placeholder="Enter your phone number"
              required
            />

            <div type="submit" className="submit-button">
              <button>Submit</button>
            </div>
          </form>
        ) : (
          <form ref={form} onSubmit={handleOrganiserSubmit}>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
            />
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              type="text"
              name="user_email"
              placeholder="Tell us Something"
              required
            />
            <label>Contact no</label>
            <input
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              type="number"
              name="user_email"
              placeholder="Enter your phone number"
              required
            />
            <div type="submit" className="submit-button">
              <button >Submit</button>
            </div>
          </form>
        )}
      </StyledContactForm>
    </div>
  );
};

export default Footer;

// Styles
const StyledContactForm = styled.div`
  width: 900px;
  align-items: right;

  // form input{
  //   margin-bottom: 10px
  // }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    margin-bottom: 2rem;
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

    form {
      margin-top: 10px;
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
