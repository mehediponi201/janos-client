import { Link } from "react-router-dom";
import logo from '../assets/JanosLogo.jpg'

const Navbar = () => {

    const navLink = 
    <>
        <li><Link className="text-lg" to={'/'}>Home</Link></li>
        <li><Link className="text-lg" to={'/about'}>About Us</Link></li>
        <li><Link className="text-lg" to={'/services'}>Services</Link></li>
        <li><Link className="text-lg" to={'/application'}>Careers</Link></li>
        <li><Link className="text-lg" to={'/contact'}>Contact Us</Link></li>
    </>

    return (
        <div className="mt-5 sticky top-0 z-50">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navLink
                            }

                        </ul>
                    </div>
                    <img className="w-[100px] h-[50px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            navLink
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




// const navLink =
//         <>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/categories">Categories</Link></li>
//             <li><a href="#footer">Contact</a></li>
//             {user?.email ? <li><Link onClick={handleLogOut}>SignOut</Link></li> : <li><Link to="/login">Sign In</Link></li>}
//             <li><Link to="/signup">Sign Up</Link></li>
//         </>