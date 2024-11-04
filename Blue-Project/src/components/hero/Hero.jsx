import React from 'react'
import './Hero.css'
import Arrow from '../../../public/Images/grommet-icons_link-next.png'
import White from '../../../public/Images/white.png'
import Grey from '../../../public/Images/Grey.png'
import Sketch from '../../../public/Images/Sketch.png'

const Hero = () => {
  return (
    <div className='hero flex gap-10 px-14 pt-10'>
        <div className='words'>
            <h2 className='text-[#1818A6]'>YOUR ALL-IN-ONE STOP</h2>
            <h1 className='buy pt-8 text-5xl font-medium'>Buy. Sell. Rent.</h1>
            <p className='finding pt-8'>Finding the perfect home or property is now easier than ever <span className='block'>with Blues. We are your one-stop platform that connects home renters,</span> buyers, sellers, agents, and service providers, creating a cohesive and<span className='block'> efficient real estate ecosystem. Whether you're looking to rent, buy,</span> sell, or invest, we've got you covered!</p>
            <div className='find pt-16'>
                <button className='h-10 w-52 bg-[#1818A6] text-white relative pr-5'>Find Property</button>
                <img src={Arrow} alt="" className='absolute top-2/3 left-52 h-5 w-5'/>
            </div>
            <div className='rating flex gap-10 pt-20'>
                <div>
                    <h3 className='self-center size-xl font-semibold'>300+</h3>
                    <p className='font-medium'>Property</p>
                </div>
                <div>
                    <h3 className='self-center size-xl font-semibold'>21k+</h3>
                    <p className='font-medium'>Satisfied Customers</p>
                </div>
                <div>
                    <h3 className='self-center size-xl font-semibold'>50+</h3>
                    <p className='font-medium'>Agents</p>
                </div>
            </div>
        </div>
        <div className='white-building w-70 box-border'>
            <img src={White} alt=""/>
        </div>
        <div className='both'>
           <img src={Grey} alt="" className='grey' />
           <img src={Sketch} alt="" className='sketch'/>
        </div>
    </div>
  )
}

export default Hero