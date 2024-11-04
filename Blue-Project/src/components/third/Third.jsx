import React from 'react'
import Serviceprops from '../serviceprops/Serviceprops'
import Search from '../../../public/Images/search.png'
import Eye from '../../../public/Images/eyes.png'
import Money from '../../../public/Images/money-bag.png'
import Seating from '../../../public/Images/seating.png'
import Transact from '../../../public/Images/transact.png'
import Support from '../../../public/Images/support.png'


const Third = () => {
  return (
    <>
        <h1 className='our-service text-[#1818A6] text-center pb-10 mt-20'>OUR SERVICES</h1>
        <div className='props flex justify-between px-16'>
          <div>
             <div>
                <Serviceprops img={Search} h2="Property Search" p="Browse through  our extensive database of property listings" 
                span= "to find homes, apartments, commercial spaces, or"
                span2="investment properties that match your criteria." />
             </div>
             <div>
                <Serviceprops img={Seating} h2="Buyer Consultations" p="Schedule consultations with our real estate agents to"
                span="discuss home buying preferences, budget, and specific" 
                span2="requirements." />
             </div>
            
          </div>
         <div>
             
             <div>
                <Serviceprops img={Eye} h2="In-Person Property Viewings" p="Arrange and attend in-person property viewings with our"
                span="real estate agents to see the shortlisted properties in"
                span2="person and assess them firsthand." />
             </div>
             <div>
                <Serviceprops img={Transact} h2="Transaction Management" p="Throughout the buying or selling process, manage the"
                span="documents, agreements, and communications related to" 
                span2="your transactions on our secure platform." />
             </div>
         </div>
         <div>
            <div>
                <Serviceprops img={Money} h2="Property Valuation" p="Receive professional property valuation services to"
                span="understand the market value of their property." />
            </div>
            <div>
                <Serviceprops img={Support} h2="Customer Support" p="Reach out to our dedicated customer support team for any"
                span2="queries, assistance, or technical support." />
            </div>
         </div>
        </div>
    </>
  )
}

export default Third