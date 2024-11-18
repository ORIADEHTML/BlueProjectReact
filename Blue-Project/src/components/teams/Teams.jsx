import React from 'react'
import John from '../../../public/Images/John.png'
import RedGirl from '../../../public/Images/Redgirl.png'
import DreadGuy from '../../../public/Images/Dreadguy.png'
import YellowGirl from '../../../public/Images/Yellowgirl.png'
import CapGuy from '../../../public/Images/Capguy.png'
import BrownGirl from '../../../public/Images/Browngirl.png'

const Teams = () => {
  return (
    <div className='px-14'>
        <h1 className='text-center text-3xl font-semibold pb-5'>Our Team</h1>
        <p className='text-center text-[#696969]'>Our team comprises of professionals from different branches and <span className='block'>specializations</span> </p>
        <div className='grid gap-6 grid-cols-3 grid-rows-2 py-16'>
            <img src={John} alt="" />
            <img src={RedGirl} alt="" />
            <img src={DreadGuy} alt="" />
            <img src={YellowGirl} alt="" />
            <img src={CapGuy} alt="" />
            <img src={BrownGirl} alt="" />
        </div>
    </div>
  )
}

export default Teams
