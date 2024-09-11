import React from 'react'
import './Hero.css'
import Arrow from '../../../public/Images/grommet-icons_link-next.png'
import White from '../../../public/Images/white.png'
import Grey from '../../../public/Images/Grey.png'
import Sketch from '../../../public/Images/Sketch.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='words'>
            <h2>YOUR ALL-IN-ONE STOP</h2>
            <h1>Buy. Sell. Rent.</h1>
            <p>Finding the perfect home or property is now easier than ever <span>with Blues. We are your one-stop platform that connects home renters,</span> buyers, sellers, agents, and service providers, creating a cohesive and<span> efficient real estate ecosystem. Whether you're looking to rent, buy,</span> sell, or invest, we've got you covered!</p>
            <div className='find'>
                <button>Find Property</button>
                <img src={Arrow} alt="" />
            </div>
            <div className='rating'>
                <div>
                    <h3>300+</h3>
                    <p>Property</p>
                </div>
                <div>
                    <h3>21k+</h3>
                    <p>Satisfied Customers</p>
                </div>
                <div>
                    <h3>50+</h3>
                    <p>Agents</p>
                </div>
            </div>
        </div>
        <div className='white-building'>
            <img src={White} alt="" />
        </div>
        <div className='both'>
           <img src={Grey} alt="" className='grey' />
           <img src={Sketch} alt="" className='sketch'/>
        </div>
    </div>
  )
}

export default Hero