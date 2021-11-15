import React from "react";
import{BiSearch,BiChevronDown, BiMenu} from"react-icons/bi";
function NavSm(){
    return(
        <>
        <div className='text-white flex items-center justify-between'>
        <div className='w-10 h-10'>
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                    alt='logo '
                    className= 'w-full h-full' />
            </div>
            <span className='text-gray-200 text-xs flex items-center hover:text-white cursor-pointer'>
                    Nashik <BiChevronDown />
                </span>
            <div className='w-8 h-8 '>
                <BiSearch className='w-full h-full' />
            </div>
        </div>
        </>
    );
}
function NavMd(){
    return(
        <>
         <div className='w-full flex rounded-md gap-3 px-3 py-1 items-center  bg-white '>
                <BiSearch />
                <input type='search'  className='w-full bg-transparent border-none focus:outline-none' placeholder="Search"></input>
            </div>
        </>
    );
}

function NavLg(){
    return(
        <>
        <div className='container flex mx-auto px-4 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>   
            <div className='w-10 h-10'>
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                    alt='logo '
                    className= 'w-full h-full' />
            </div>
            <div className='w-full flex rounded-md gap-3 px-3 py-1 items-center  bg-white '>
                <BiSearch />
                <input type='search'  className='w-full bg-transparent border-none focus:outline-none' placeholder="Search"></input>
            </div>
        </div>
            <div className=' flex items-center gap-3'>
                <span className='text-gray-200 text-base flex items-center hover:text-white cursor-pointer'>
                    Nashik <BiChevronDown />
                </span>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded transform hover:scale-110 motion-reduce:transform-none'> Sign in</button>
                <div className=' w-8 h-8 text-white  cursor-pointer'>
                    <BiMenu className='w-full h-full' />

                </div>
            </div>
        </div>
     
        </>
    );
}


const Navbar =()=>
{
    return(
        <>
        <nav className='bg-darkBackground-700 py-3 px-4'>
        <div className='md:hidden'>
            {/* Mobile Screen */}
            <NavSm />
        </div>
        <div className='hidden md:flex lg:hidden'>
            {/* Medium /Tab Screen */}
            <NavMd />
        </div>
        <div className='hidden w-full lg:flex'>
            {/* Large Screen */}
            <NavLg />
        </div>

        </nav>
        
        
        </>
    );
};

export default Navbar;