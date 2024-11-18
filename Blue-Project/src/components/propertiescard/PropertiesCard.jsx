import React from 'react'

const PropertiesCard = () => {
  return (
    <div>
        <div>
            <div><img src={props.img} alt="" className='h-96'/></div>
            <div className='h-44 bg-[#D1D1ED] py-5'>
                <div className='flex justify-between px-6'>
                    <div className='font-thin'>{props.h5}</div>
                    <div>{props.icon}</div>
                </div>
                <div className='flex justify-between px-6 content-center py-3'>
                    <div>
                        <div className='font-bold'>{props.h1}</div>
                        <div><img src={props.img2} alt="" /></div>
                        <div className='font-semibold'>{props.h3}</div>
                        <div className='font-thin text-[#696969]'>{props.p}</div>
                    </div>
                    <div>
                        <div className='font-bold text-[#1818A6]'>{props.h2}</div>
                        <div className='border bg-[#1818A6] text-[#D1D1ED] w-28 text-center py-2 hover:cursor-pointer'>{props.button}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PropertiesCard