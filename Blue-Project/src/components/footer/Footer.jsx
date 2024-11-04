import React from 'react'
import Instagram from '../../../public/Images/instagram.png'
import Facebook from '../../../public/Images/facebook.png'
import Twitter from '../../../public/Images/twitter.png'
import In from '../../../public/Images/linkedin.png'

const Footer = () => {
  return (
    <>
        <div className='flex bg-[#050521] justify-between px-14 pb-10'>
            <div className='text-[#D1D1ED] mt-10'>
                <h1 className='pb-24 font-bold text-3xl '>BLUES</h1>
                <div className='flex gap-5 pb-5'>
                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={In} alt="" />
                </div>
                <h6 className='pb-5 font-thin'>copyrights 2024 Oriade</h6>
            </div>
            <div className='text-[#D1D1ED] mt-10'>
                <h2 className='pb-5'><a href="">About</a></h2>
                <h2 className='pb-5'><a href="">About Us</a></h2>
                <h2 className='pb-5'><a href="">Features</a></h2>
                <h2 className='pb-5'><a href="">News & Blog</a></h2>
            </div>
            <div className='text-[#D1D1ED] mt-10'>
                <h2 className='pb-5'><a href="">Home</a></h2>
                <h2 className='pb-5'><a href="">Rent</a></h2>
                <h2 className='pb-5'><a href="">Buy</a></h2>
                <h2 className='pb-5'><a href="">Sell</a></h2>
                <h2 className='pb-5'><a href="">Agents</a></h2>
            </div>
            <div className='text-[#D1D1ED] mt-10'>
                <h2 className='pb-5'><a href="">Support</a></h2>
                <h2 className='pb-5'><a href="">FAQs</a></h2>
                <h2 className='pb-5'><a href=""></a>Support Center</h2>
                <h2 className='pb-5'><a href=""></a>Contact Us</h2>
            </div>
            <div className='text-[#D1D1ED] mt-10'>
                <h2 className='pb-5'><a href="">Support</a></h2>
                <h2 className='pb-5'><a href="">FAQs</a></h2>
                <h2 className='pb-5'><a href=""></a>Support Center</h2>
                <h2 className='pb-5'><a href=""></a>Contact Us</h2>
            </div>
        </div>
    </>
  )
}

export default Footer