import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";


const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col gap-2' key={product._id}>
      <img src={product.image} alt={product.name} className='w-70' />
      <h1 className='text-4xl font-semibold'>{product.name}</h1>
      <h6 className='text-2xl'>{product.price}</h6>

      <div className='flex gap-5'>
        <button className='cursor-pointer bg-blue-500 p-2 text-white rounded-sm'><FaEdit /></button>
         <button className=' cursor-pointer bg-red-500 p-2 text-white rounded-sm'><MdOutlineDeleteForever /></button>
      </div>
    </div>
  );
};

export default ProductCard;
