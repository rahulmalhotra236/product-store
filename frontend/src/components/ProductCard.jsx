import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';


const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false)
    const [updateProducts,setUpdateProducts]= useState(product)

  const {deleteProduct, updateProduct} = useProductStore()
  const handleDelete = async(pid) => {
    const { success, message } = await deleteProduct(pid)
    if (!success) {
      toast.error(message)
    }
    else {
      toast.success(message)
    }
  }
    const handleProductUpdate =  async(pid,updateProducts) => {

      console.log(pid,updateProducts)
  const {success,message} =  await updateProduct(pid,updateProducts)
      if (!success) {
  toast.error(message)
      } else {
        toast.success(message)
        
}

      setShowModal(false)
    }
  
  function handleFormLoad(e){
    e.preventDefault()
  }
  return (
    <div className='flex flex-col gap-2 bg-gray-800 rounded-xl overflow-hidden' >
      <img src={product.image} alt={product.name} className='w-70 ' />
      <h1 className='text-4xl font-semibold px-4'>{product.name}</h1>
      <h6 className='text-2xl px-4'>{product.price}</h6>

      <div className='flex gap-5 p-4'>
        <button className='cursor-pointer bg-blue-500 p-2 text-white rounded-sm' onClick={()=>setShowModal(true)}><FaEdit /></button>
         <button className=' cursor-pointer bg-red-500 p-2 text-white rounded-sm' onClick={()=>handleDelete(product._id)}><MdOutlineDeleteForever /></button>
      </div>

       {showModal &&   <form onSubmit={handleFormLoad} className='flex flex-col gap-10 items-center bg-gray-700 p-10 rounded-lg absolute left-100 top-50'>
      <h1 className='text-5xl font-bold'>Update Product</h1>
        <div className='flex gap-2'>
        <p>Name</p>
          <input type="text" className=' border-b-1 border-solid px-2 py-1' value={updateProducts.name}
          onChange={(e)=>setUpdateProducts({...updateProduct,name:e.target.value})}/>
        </div>
         <div className='flex gap-2'>
        <p>Price</p>
          <input type="number" className=' border-b-1 border-solid  px-2 py-1' value={updateProducts.price}
           onChange={(e)=>setUpdateProducts({...updateProduct,price:e.target.value})}/>
        </div>
         <div className='flex gap-2'>
        <p>Image URL</p>
          <input type="text" className=' border-b-1 border-solid  px-2 py-1' value={updateProducts.image}
           onChange={(e)=>setUpdateProducts({...updateProduct,image:e.target.value})}/>
      </div>
      <div className='flex gap-4'>
        <button className='bg-blue-600 px-3 py-2 rounded-lg w-50 cursor-pointer font-bold' onClick={()=>handleProductUpdate(product._id,updateProducts)}>Update</button>
      <button  className='bg-gray-600 px-3 py-2 rounded-lg w-50 cursor-pointer font-bold' onClick={()=>setShowModal(false)}>Cancel</button>
      </div>
      
      </form>}
    </div>
  );
};

export default ProductCard;
