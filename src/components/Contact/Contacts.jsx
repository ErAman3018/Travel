import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
// import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const todayDate = new Date().toISOString().slice(0, 10);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, destination, number } = formData;
    const orderData = {
      name,
      phone,
      email,
      destination,
      number,
    };

    if (!validateEmail(email) || !email.endsWith("@gmail.com")) {
      toast.error("Invalid email format ", { position: "top-right" });
      return;
    }

    if (!validatePhoneNumber(phone)) {
      toast.error("Invalid Phone number", { position: "top-right" });
      return;
    }

    if (number < 1) {
      toast.error("invalid Number of Person", { position: "top-right" });
      return;
    }

    try {
      await axios.post("/.netlify/functions/sendOrderEmail", orderData);
      toast.success("Message sent successful , we'll contact You.");
    } catch (error) {
      console.error(
        "Error sending message 1111111111111111111111     :",
        error
      );
      toast.error("Failed to sent message. Please try again.");
    }
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  return (
    <section className="contact_main" id="myform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*:</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          id="name"
          name="name"
          placeholder="Enter your Name"
          required
        />
        <br />

        <label htmlFor="email">Email*:</label>
        <input
          type="email"
          onChange={handleChange}
          value={formData.email}
          id="email"
          className="email"
          name="email"
          placeholder="Enter your Email id"
          required
        />
        <br />

        <label htmlFor="phone">Phone Number*:</label>
        <input
          type="tel"
          onChange={handleChange}
          value={formData.phone}
          id="phone"
          name="phone"
          placeholder="Contact Number"
          required
        />
        <br />

        <label htmlFor="dateofjourney">Date of Journey*:</label>
        <input
          type="date"
          min={`${todayDate}`}
          id="dateofjourney"
          name="dateofjourney"
          required
        />
        <br />

        <label htmlFor="destinationplace">Tour Place*:</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.destination}
          id="destinationplace"
          name="destination"
          placeholder="Enter the place"
          required
        />
        <br />

        <label htmlFor="number">Number of member:</label>
        <input
          type="number"
          onChange={handleChange}
          value={formData.number}
          id="number"
          name="number"
          placeholder="Number of member"
          required
        />
        <br />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contacts;
