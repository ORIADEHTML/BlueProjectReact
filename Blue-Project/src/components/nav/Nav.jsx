import Logo from '/BLUES.png'





const Nav = () =>{
    return (
        <div className='nav flex justify-between items-center px-14 py-5'>
            <div>
                <img src={Logo} alt="" />
            </div>
           <ul className='flex gap-10 list-none items-center'>
                <li className='text-[#1818A6] border-b-2 border-[#1818A6]'><a href="">Home</a></li>
                <div className='style flex gap-10'>
                    <li><a href="">Agents</a></li>
                    <li><a href="">Our Properties</a></li>
                    <li><a href="">Contact Us</a></li>
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