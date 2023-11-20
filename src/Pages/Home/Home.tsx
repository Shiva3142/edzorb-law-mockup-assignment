import React from 'react'
import Header from '../../Components/Templates/Header'
import LandingComponent1 from './LandingComponent1'
import LandingComponent2 from './LandingComponent2'
import Testimonial from './Testimonial'
import WhyContainer from './WhyContainer'
import Footer from '../../Components/Templates/Footer'
import InfoCard from '../../InfoCard'


function Home() {
  return (
    <>
      <Header />
      <LandingComponent1  />
      <LandingComponent2  />
      <Testimonial  />
      <WhyContainer  />
      <Footer/>
      <InfoCard/>
    </>
  )
}

export default Home