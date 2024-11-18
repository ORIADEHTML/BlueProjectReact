import React from 'react'
import Nav from '../../components/nav/Nav'
import AboutUs from '../../components/about/AboutUs'
import Teams from '../../components/teams/Teams'
import Fifty from '../../components/fifty/Fifty'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div>
        <Nav />
        <AboutUs />
        <Teams />
        <Fifty />
        <Subscribe />
        <Footer />

    </div>
  )
}

export default About