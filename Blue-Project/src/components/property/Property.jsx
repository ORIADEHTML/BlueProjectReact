import React from 'react'
import Cards from '../cards/Cards'
import Kitchen from '../../../public/Images/kitchen.png'
import Stairs from '../../../public/Images/stairs.png'
import Front from '../../../public/Images/front.png'
import Arrow from '../../../public/Images/grommet-icons_link-next.png'

const Property = () => {
  return (
    <div>
        <h2 className='text-center text-[#1818A6] pt-10 pb-5 font-semibold'>Featured PROPERTIES</h2>
        <div className='flex justify-between px-16'>
            <div>
              <Cards img={Kitchen} h5="sale" h1="2 Bedroom flat apartment" h2="N 300,000" h3="Lekki - Ajah axis" p="Joan Properties" button="View Details"/>
          </div>
            <div>
              <Cards img={Stairs} h5="sale" h1="2 Bedroom flat apartment" h2="N 300,000" h3="Lekki - Ajah axis" p="Joan Properties" button="View Details"/>
          </div>
            <div>
              <Cards img={Front} h5="sale" h1="2 Bedroom flat apartment" h2="N 300,000" h3="Lekki - Ajah axis" p="Joan Properties" button="View Details"/>
            </div>
        </div>
        <div className='flex pt-14 pb-20 justify-center'>
          <button className='border text-[#D1D1ED] bg-[#1818A6] h-12 w-56 relative pr-10'>View all Properties</button>
          <img src={Arrow} alt="" className='absolute'/>
        </div>
    </div>
  )
}

export default Property