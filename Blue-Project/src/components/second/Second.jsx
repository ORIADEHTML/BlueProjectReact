import React from 'react'
import house from '../../../public/Images/nice-house.png'
import Blue from '../../../public/Images/Tertiary-blue.png'

const Second = () => {
  return (
    <>
      <div className='second-line flex gap-32 px-14 mt-16'>
        <img src={house} alt="" className='image' />
        <div className='house-solution pt-7.5'>
          <h2 className='pb-14 font-bold text-3xl pt-14'>
            We offer only quality housing <span className='block'>solutions</span>
          </h2>
          <p className='pb-20'>Experience a refreshing and stress-free real estate journey by joining <span className='block'>the Blues community. Whether you're a first-time homebuyer or an</span> experienced investor, our platform is designed to cater to all your <span className='block'>needs, fostering a sense of trust, reliability, and convenience.</span></p>
          <div className='offer flex gap-20'>
            <div>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt=""/>
                Extensive Property Listings
              </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Trusted Real Estate Agents 
                </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Seamless Rental Process
                </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Expert Selling Assistance
                </li>
            </div>
            <div>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Exclusive Buyers Benefits
                </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Quality Service Providers
                </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Ethical Practices
                </li>
              <li className='flex gap-3 items-center pb-4 list-none'>
                <img src={Blue} alt="" />
                Transparent and Secure Transactions
                </li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Second