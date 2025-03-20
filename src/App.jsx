import React from 'react'
import Navbar from "../src/navbar/Navbar.jsx"
import Hero from "../src/Hero/Hero.jsx"
import Footer from "../src/footer/Footer.jsx"
import Cards from "../src/cards/Cards.jsx"
import Slider from "../src/slider/Slider.jsx"
import NewsletterForm from "../src/Form/NewsletterForm.jsx";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Slider/>
      <NewsletterForm/>
      <Footer/>

    </div>
  )
}

export default App
