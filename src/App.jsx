import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './components/about';
import Experience from './components/Experience';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import Testimonial from './components/testimonials';
const App = () => {
  return (
   <>
   <Header/>
   <Navigation/>
   <About/>
   <Experience/>
   <Project/>
   <Testimonial/>
   <Contact/>
   <Footer/>

   </>
  )
}

export default App