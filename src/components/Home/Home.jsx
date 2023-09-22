import React, { useEffect } from 'react'
import './home.css'
import video from '../../Asset/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import {SiTripadvisor} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
// lets create a react hook to add a scroll on animation
useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video.mp4"></video>
        <div className="homeContent container">
            <div className="textDiv">
                <span data-aos='fade-up' className="smallText">
                    Our Packages
                </span>
                <h1 data-aos='fade-up' className="homeTitle">
                    Search your Holiday
                </h1>
            </div>

            <div data-aos='fade-up' className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination </label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter your name here...'/>
                        <GrLocation className='icon'/>
                    </div>
                </div>

                <div className="destinationInput">
                    <label htmlFor="city">Select your date... </label>
                    <div className="input flex">
                        <input type="date"/>
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className="total">&#8377; 15,000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" max="15000" min="5000" />
                    </div>
                </div>
                <div className="searchOptions flex">
                    <HiFilter className='icon'/>
                    <span>MORE FILTERS</span>
                </div>
                
            </div>

            <div data-aos='fade-up' className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className='icon'/>
                    <AiOutlineInstagram className='icon'/>
                    <SiTripadvisor className='icon'/>
                </div>

                <div className="leftIcons">
                <BsListTask className='icon'/>
                <TbApps className='icon'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
