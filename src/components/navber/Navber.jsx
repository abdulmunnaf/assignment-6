import { ShoppingCart } from 'lucide-react';
import digiTools from '../../assets/DigiTools.png';

const Navber = ({ cartCount, setShowCart }) => {
    return (

        <div className=" navbar bg-base-100 w-full md:w-10/12 mx-auto mt-2 sticky top-0 z-10 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className='hidden md:block'> <img src={digiTools} alt="DigiTools" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end relative">

                <a onClick={() => setShowCart(true)} className='btn btn-ghost rounded-full p-2 relative'>
                    <ShoppingCart /> 
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                    </a>

                <a className='btn btn-ghost'>Login</a>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-xs md:text-sm text-white">Get Started</a>
            </div>
        </div>

    );
};

export default Navber;