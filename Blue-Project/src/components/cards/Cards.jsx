import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <div>
            <div><img src={props.img} alt="" className='h-96'/></div>
            <div className='h-44 bg-[#D1D1ED] py-5'>
                <div className='pl-6 font-thin'>{props.h5}</div>
                <div className='flex justify-between px-6 content-center py-3'>
                    <div className='font-bold'>{props.h1}</div>
                    <div className='font-bold text-[#1818A6]'>{props.h2}</div>
                </div>
                <div className='flex justify-between px-6 content-center'>
                    <div>
                        <div className='font-semibold'>{props.h3}</div>
                        <div className='font-thin'>{props.p}</div>
                    </div>
                    <div className='border bg-[#1818A6] text-[#D1D1ED] w-28 text-center py-2 hover:cursor-pointer'>{props.button}</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cards