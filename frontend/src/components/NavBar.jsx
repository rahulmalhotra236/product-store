import React from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-between px-20 py-10'>
      <div>
      <Link to="/"><h1 className='font-bold'>Product Store</h1></Link>  
      </div>

      <div className='flex gap-5 text-3xl'>
       <Link to="/create"><CiSquarePlus  className='cursor-pointer w-12 h-12 p-1 bg-gray-800 rounded-lg'/></Link> 
        <CiBrightnessUp className='cursor-pointer  w-12 h-12 p-1 bg-gray-800 rounded-lg'/>
      </div>
    </div>
  );
};

export default NavBar;
