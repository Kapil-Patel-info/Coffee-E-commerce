import React, { useState } from "react";
import "../css/contact.css";
import axios from "axios";
import BackendUrl from "../config/BackEndUrl";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BackendUrl}/user/feedback`, formData);

      if (res.status === 200) {
        setStatus("Thankyou for your Feedback!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      console.log("error ",error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-heading">Let’s Connect</h1>
        <p className="contact-subheading">
          We’d love to hear from you. Whether it’s feedback, collaboration, or just to say hi—reach out!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
