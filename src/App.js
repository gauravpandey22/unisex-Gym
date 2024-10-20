import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Enquiry from './components/Enquiry'
import Services from './components/Services'
import AboutUS from './components/AboutUS'
import ContactUs from './components/ContactUs'
import ContactForm from './components/ContactForm'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Enquiry/>
      <Services/>
      <AboutUS/>
      <ContactUs/>
      <ContactForm/>
    </div>
  )
}

export default App


