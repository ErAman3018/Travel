import React,{useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {
const[active,setActive]=useState('navBar')
// function to toggle navBar
const showNav =()=>{
    setActive('navBar activeNavbar')
}

// function to remove navBar
const removeNavbar =()=>{
    setActive('navBar')
}

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <Link  className='logo flex'>
                    <h1>
                    <MdOutlineTravelExplore className='icon' /> Travel.</h1>
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <Link to="/"  className='navLink'>Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to='../Mains/Mains' className="navLink">Packages</Link>
                    </li>
                    
                    <li className="navItem">
                        <Link  className="navLink">About</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink">Pages</Link>
                    </li>
                    <li className="navItem">
                        <Link  className="navLink">News</Link>
                    </li>
                    <li className="navItem">
                        <Link to='../Contact/Contacts' className="navLink">Contact</Link>
                    </li>
                    <button className="btn">
                    <Link to='../Contact/Contacts'>
                        Book Now
                    </Link>
                    </button>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon' />
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
