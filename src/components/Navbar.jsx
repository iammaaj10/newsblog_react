import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav  flex items-center justify-between p-3  lg:bg-neutral-800">
            <h2 className="text-2xl text-blue-400 font-bold">
                News<span className="text-3xl text-red-500 font-bold">B</span>logs
            </h2>

            <div className="hidden lg:flex gap-12">
                <a href="/" className="font-medium text-md text-white hover:text-gray-400">Home</a>
                <a href="/" className="font-medium text-md text-white hover:text-gray-400">News</a>
                <a href="/" className="font-medium text-md text-white hover:text-gray-400">Tech</a>
                <a href="/" className="font-medium text-md text-white hover:text-gray-400">Entertainment</a>
            </div>

            <button className="hidden lg:flex border-gray-500 text-white bg-blue-800 rounded-md px-6 py-2 items-center hover:bg-gray-300 hover:border hover:border-gray-500 hover:text-black gap-2 group">
                Join Us
                <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition duration-300"></i>
            </button>

            <button className="p-3 lg:hidden" onClick={toggle}>
                <i className="fa-solid fa-bars "></i>
            </button>

            <div className={`${isOpen ? 'flex' : 'hidden'} fixed flex-col bg-neutral-800 top-0 right-0 p-3 z-10 lg:hidden w-3/4 h-full max-w-md`}>
                <div className="flex justify-between items-center relative">
                    
                    <button className="p-3 lg:hidden absolute right-0 top-0" onClick={toggle}>
                        <i className="fa-solid fa-xmark text-white hover:text-red-500"></i>
                    </button>
                </div>
                
                <div className="mt-10 flex flex-col gap-9 p-3 ">
                    <a href="/" className="font-medium  text-white hover:bg-gray-100 hover:text-black  rounded-lg p-2">Home</a>
                    <a href="/" className="font-medium  text-white hover:bg-gray-100 hover:text-black rounded-lg  p-2">News</a>
                    <a href="/" className="font-medium  text-white hover:bg-gray-100 hover:text-black rounded-lg p-2">Tech</a>
                    <a href="/" className="font-medium  text-white hover:bg-gray-100 hover:text-black rounded-lg p-2">Entertainment</a>
                </div>
               <div className="mt-6">
                    <button className="border-gray-500 text-white bg-blue-800 rounded-md px-6 py-2 items-center hover:bg-gray-300 hover:border hover:border-gray-500 hover:text-black group">
                       Join Us
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition duration-300"></i>
                    </button>
                </div>
                </div>
            
        </nav>
    );
};

export default Navbar;
