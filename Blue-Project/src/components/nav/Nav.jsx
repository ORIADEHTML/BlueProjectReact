import Logo from '/BLUES.png'
import './Nav.css'




const Nav = () =>{
    return (
        <div className='nav'>
            <div>
                <img src={Logo} alt="" />
            </div>
           <ul>
                <li><a href="">Home</a></li>
                <div className='style'>
                    <li><a href="">Agents</a></li>
                    <li><a href="">Our Properties</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>
           </ul>
           <div className='user'>
                <div className='sign-in'>
                    <button>Sign In</button>
                </div>
                <div className='sign-up'>
                    <button>Sign Up</button>
                </div>
           </div>
        </div>
    )
}

export default Nav