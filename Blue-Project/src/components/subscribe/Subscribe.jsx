import React from 'react'

const Subscribe = () => {
  return (
    <>
        <h1 className='font-bold text-center text-2xl pt-16'>Get More Updates</h1>
        <p className='pt-5 text-center pb-10'>Want to be one of the first few to get updated about our new property listings and discounts? <span className='block'>Subscribe to our email list today.</span></p>
        <div className='flex justify-center mb-16'>
            <input type="email" name="" id="" placeholder='Input email address' className='border-2 w-2/5 h-16 content-center pl-10'/>
            <button className='border bg-[#1818A6] text-[#D1D1ED] w-32 font-semibold text-lg hover:cursor-pointer'>Subscribe</button>
        </div>
    </>
  )
}

export default Subscribe