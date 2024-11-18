import Logo from '/BLUES.png'
import { Link } from 'react-router-dom'



const Nav = () =>{
    return (
        <div className='nav flex justify-between items-center px-14 py-5'>
            <div>
                <img src={Logo} alt="" />
            </div>
           <ul className='flex gap-10 list-none items-center'>
                <li className='text-[#1818A6] border-b-2 border-[#1818A6]'>
                    <Link to="/">Home</Link>
                </li>
                <div className='style flex gap-10'>
                    <li>
                        <Link to="/about">Agent</Link>
                    </li>
                    <li>
                        <Link to ="/properties">Our Properties</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </div>
           </ul>
           <div className='user flex gap-10 items-center'>
                <div className='sign-in'>
                    <button className='h-10 w-24 border border-[#1818A6] text-[#1818A6]'>Sign In</button>
                </div>
                <div className='sign-up'>
                    <button className='h-10 w-24 border border-[#1818A6] text-white bg-[#1818A6]'>Sign Up</button>
                </div>
           </div>
        </div>
    )
}

export default Nav