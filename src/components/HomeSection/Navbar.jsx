import { Link, NavLink } from "react-router-dom"
import Logo from '../../../public/img/logo.png'
import Profile from '../../../public/img/Ellipse 21.png'
export const Navbar = () => {
    const menu = <>
        <NavLink to='/'><li>Home</li> </NavLink>
        <NavLink to='/sitbook'><li className="pl-7 pr-7">Book Item</li></NavLink>
        <NavLink to='/food'><li>Food</li></NavLink>


    </>
    return (
        <div className=" container p-[-20px] ">
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white">
                    {/* Navbar */}
                    <div className="navbar flex justify-between w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2  px-2"><a className="btn btn-ghost text-xl"><img className="" src={Logo} alt="" /></a></div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {menu}
                            </ul>
                        </div>
                        <div className="flex">
                            <div className=" ">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}
                                    <a className="bg-[#ffffff00] px-5 py-1  border border-green-700 rounded-md">Button</a>
                                </ul>

                            </div>
                            <div className="drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className=""><a className="bg-green-700 text-white px-5 py-1  border border-green-700 rounded-md">Profile</a></label>
                                </div>
                                <div className="drawer-side z-30">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                        {/* Sidebar content here */}
                                        <div className="flex justify-center">
                                            <img className="w-[120px] " src={Profile} alt="" />
                                        </div>
                                        <h1 className="text-center pt-5 text-2xl">Jhon Doe</h1>

                                        <div className="mt-4">
                                            <li><button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="pl-2 text-lg">Personal Details</span>
                                            </button></li>
                                            
                                            <li><button className="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="pl-2 text-lg">Booking History</span>
                                            </button></li>
                                            
                                            <li><button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="pl-2 text-lg">Favorite</span>
                                            </button></li>
                                            
                                            <Link to='/login'>
                                            <li><button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="pl-2 text-lg">Login</span>
                                            </button></li></Link>
                                            
                                            
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="drawer-side drawer drawer-end">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>



            {/* <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <label className="btn btn-circle swap swap-rotate">
                              
                                <input type="checkbox" />

                                
                                <svg
                                    className="swap-off fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                                
                                <svg
                                    className="swap-on fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </label>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className="" src={Logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-green-700  text-white rounded-md">Button</a>
                    <div className="drawer drawer-end z-20">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary"><a className="bg-[#ffffff00] px-5 py-1  border border-green-700 rounded-md">Button</a></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                               
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}
