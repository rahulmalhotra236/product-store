import React from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className='flex justify-between px-20 py-10'>
      <div>
        <h1 className='font-bold'>Product Store</h1>
      </div>

      <div className='flex gap-5 text-3xl'>
        <CiSquarePlus  className='cursor-pointer w-12 h-12 p-1 bg-gray-800 rounded-lg'/>
        <CiBrightnessUp className='cursor-pointer  w-12 h-12 p-1 bg-gray-800 rounded-lg'/>
      </div>
    </div>
  );
};

export default NavBar;
