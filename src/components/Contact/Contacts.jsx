import React, { useState, useRef,useEffect } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [dateOfJourney,setDateOfJourney]=useState("");
  const [destinaionPlace,setDestinationPlace]=useState("");
  const [number, setNumber] = useState("");

  const handleName=(e)=>{
    setName(e.target.value);
  };

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  };

  const handlePhone=(e)=>{
    setPhone(e.target.value);
  };

  const handleDateOfJourney=(e)=>{
    setDateOfJourney(e.target.value);
  };

  const handleDestinationPlace=(e)=>{
    setDestinationPlace(e.target.value);
  };

  const handleNumber=(e)=>{
    setNumber(e.target.value);
  };

  const validateEmail=(email)=>{
    return email.endsWith("@gmail.com");
  }

  function validatePhone(phone) {
    return phone.length
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email)){
      toast.error("Please Enter a valid Email (Ending With @gmail.com)");
      return
    }
    else if (validatePhone(phone)!==10){
      toast.error("Please Enter a valid Mobile Number!");
      return
    }
    else if(number<1){
      toast.error("please Enter a valid number of Member!!");
      return
    }
    else{
      emailjs.sendForm('service_5aycajp', 'template_fdfr17y', form.current, 'JmMFSO2jOzlZeZOqS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success("Thanks for contacting us, We'll get in touch with you shortly");
      setName("");
      setEmail("");
      setDateOfJourney("");
      setDestinationPlace("");
      setNumber("");
      setPhone("");
    }
  };

  const todayDate = new Date().toISOString().slice(0, 10);
  useEffect(() => {
    
  document.title="Contact Page"
    
  },[])
  

  return (
    <section className="contact_main" id="myform">
      
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name*:</label>
        <input
          type="text"
          onChange={handleName}
          id="name"
          name="name"
          value={name}
          placeholder="Enter your Name"
          required
        />
        <br />

        <label htmlFor="email">Email*:</label>
        <input
          type="email"
          onChange={handleEmail}
          id="email"
          value={email}
          className="email"
          name="email"
          placeholder="Enter your Email id"
          required
        />
        <br />

        <label htmlFor="phone">Phone Number*:</label>
        <input
          type="tel"
          onChange={handlePhone}
          id="phone"
          name="phone"
          value={phone}
          placeholder="Contact Number"
          required
        />
        <br />

        <label htmlFor="dateofjourney">Date of Journey*:</label>
        <input
          type="date"
          onChange={handleDateOfJourney}
          min={`${todayDate}`}
          value={dateOfJourney}
          id="dateofjourney"
          name="dateofjourney"
          required
        />
        <br />

        <label htmlFor="destinationplace">Tour Place*:</label>
        <input
          type="text"
          onChange={handleDestinationPlace}
          id="destinationplace"
          name="destination"
          value={destinaionPlace}
          placeholder="Enter the place"
          required
        />
        <br />

        <label htmlFor="number">Number of member*:</label>
        <input
          type="number"
          value={number}
          onChange={handleNumber}
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
