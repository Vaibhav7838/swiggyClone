import React from "react";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-100 rounded-lg p-2 text-xl'>
      <div className='flex gap-6'>
        <div>
          <img
            src={"https://banner2.cleanpng.com/20180406/bbw/avgfyf0pz.webp"}
            className='w-10 h-10 bg-transparent'
          />
        </div>
        <div className="py-1">
          <ul className='flex gap-10'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'>Contact us</li>
          </ul>
        </div>
      </div>
      <div>
        <button className='bg-gray-400 cursor-pointer py-1 px-10 rounded-xl text-white'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
