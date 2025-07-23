import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';


const ProductCard = ({ product }) => {
  const {deleteProduct} = useProductStore()
  const handleDelete = async(pid) => {
    const { success, message } = await deleteProduct(pid)
    if (!success) {
      toast.error(message)
    }
    else {
      toast.success(message)
    }
  }
  return (
    <div className='flex flex-col gap-2' >
      <img src={product.image} alt={product.name} className='w-70' />
      <h1 className='text-4xl font-semibold'>{product.name}</h1>
      <h6 className='text-2xl'>{product.price}</h6>

      <div className='flex gap-5'>
        <button className='cursor-pointer bg-blue-500 p-2 text-white rounded-sm' ><FaEdit /></button>
         <button className=' cursor-pointer bg-red-500 p-2 text-white rounded-sm' onClick={()=>handleDelete(product._id)}><MdOutlineDeleteForever /></button>
      </div>
    </div>
  );
};

export default ProductCard;
