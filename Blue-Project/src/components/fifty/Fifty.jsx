import React from 'react'
import Profile from '../../../public/Images/profile.png'



const Fifty = () => {
  return (
    <>
        <div className='talkings'>
            <h1 className='font-bold text-xl text-center pt-10'>Let Our Reviews do the Talking</h1>
            <h3 className='text-center font-thin text-sm'>See what our clients are saying about us</h3>
            <div className='platform flex px-16 justify-between pt-7 pb-14'>
                <div className='jude-word '>
                    <p className='pb-10'>This is the platform you need if you ever want to venture i to the real estate <span className='block'>business. Thanks to Blues for helping me in the process of selling my </span><span>property.</span></p>
                    <div className='jude flex gap-10'>
                        <img src={Profile} alt="" className='profile'/>
                        <div className='address '>
                            <h2 className='font-bold text-lg'>Jude Henry</h2>
                            <p className='font-light text-sm'>Lekki Phase 2</p>
                        </div>
                    </div>
                </div>
                <div className='jude-word'>
                    <p className='pb-10'>This is the platform you need if you ever want to venture i to the real estate <span className='block'>business. Thanks to Blues for helping me in the process of selling my</span><span>property.</span></p>
                    <div className='jude flex gap-10'>
                        <img src={Profile} alt="" />
                        <div>
                            <h2 className='font-bold text-lg'>Jude Henry</h2>
                            <p className='font-light text-sm'>Lekki Phase 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fifty