import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./footer.css";
import video2 from "../../Asset/video2.mp4";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])

// function contactWithUs(){
//   alert("file opened")
// }<h2>Travel with us</h2>

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
          <Link to='../Contact/Contacts'>
          <button className="btn"><h2>Travel with us</h2></button>
             </Link>
          </div>
          {/* <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder="Enter Email Address" />
            <button data-aos='fade-up' className="btn flex" type="submit">
              Send
              <FiSend className="icon" />
            </button>
          </div> */}
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </Link>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
              quisquam. At corrupti, dignissimos aspernatur, fugit totam
              molestiae facilis blanditiis commodi nihil cumque, nisi
              perferendis ipsa deserunt. Nulla ab tempora quod odit temporibus
              quia consequatur fugiat minus, harum asperiores non totam
              molestias adipisci
            </div>
            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Group Two */}
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Group Three */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">Last MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Dubai
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME </small>
              <small>COPYRIGHTS RESERVES &copy;2023</small>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
