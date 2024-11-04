import React from 'react'


const Serviceprops = (props) => {
  return (
    <>
        <div><img src={props.img} alt="" /></div>
        <div className='pt-10 pb-6 font-bold text-xl'>{props.h2} </div>
        <div className='pb-10'>{props.p} <span className='block'>{props.span} <span className='block'>{props.span2}</span></span></div>
    </>
    
  )
}

export default Serviceprops