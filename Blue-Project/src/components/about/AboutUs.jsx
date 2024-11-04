import React from 'react'
import Arrow from '../../../public/Images/grommet-icons_link-next.png'
import House from '../../../public/Images/water-front-house.png'

const AboutUs = () => {
  return (
    <div>
        <div className='px-14 flex gap-20 mt-16'>
            <div className='pt-20 mb-44'>
                <h3 className='text-[#1818A6] pb-5'>ABOUT US</h3>
                <h2 className='font-semibold text-5xl pb-10 pt-3'>We are the best <span className='block'>among the rest</span></h2>
                <p className='text-[#696969] pb-8'>We are your No.1 stop for impeccable deals such as lands, houses, <span className='block'> rents, lease and everything real estate. Affilestate is built to help you</span> solve all your real estate problem from getting reasonable prices for <span className='block'>your properties to buying affordable and secured properties.</span></p>
                <div className='flex mt-10'>
                    <button className='h-10 w-52 bg-[#3131a3] text-white relative pr-5'>Find Property</button>
                <img src={Arrow} alt="" className='absolute'/>
                </div>
            </div>
            <div className='abouthouse'>
                <img src={House} alt="" className='ml-5 relative'/>
                <div className='rating flex gap-20 border bg-[#1818A6] text-[#D1D1ED] text-center items-center px-5 absolute border-none'>
                    <div>
                        <h3 className='self-center text-4xl font-semibold '>300+</h3>
                    <p className='font-thin'>Property</p>
                    </div>
                    <div>
                        <h3 className='self-center text-4xl font-semibold'>21k+</h3>
                        <p className='font-thin'>Satisfied Customers</p>
                    </div>
                    <div>
                        <h3 className='self-center text-4xl font-semibold'>50+</h3>
                        <p className='font-thin'>Agents</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
