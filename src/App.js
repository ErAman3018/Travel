import React from 'react'
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Mains/Mains';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/Contact/Contacts';

const App = () => {
  return (
      
      <BrowserRouter>
       <Routes>
       <Route exact path='/' element={<>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        {/* <Contact/> */}
        {/* eslint-disable-next-line  */}
       </>}>
        /* </Route>
        <Route exact path='Contact/Contacts' element={<Contact/>}>
        </Route> */
       </Routes>
      </BrowserRouter>
      
  )
}

export default App
