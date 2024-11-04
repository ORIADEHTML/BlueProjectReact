import React from 'react'
import Nav from '../../components/nav/Nav'
import Hero from '../../components/hero/Hero'
import Second from '../../components/second/Second'
import Third from '../../components/third/Third'
import Property from '../../components/property/Property'
import Fifty from '../../components/fifty/Fifty'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Second />
        <Third />
        <Property />
        <Fifty />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home