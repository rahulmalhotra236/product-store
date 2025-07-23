import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';


const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image:""
  }) 

  const {createProducts}= useProductStore()
  const handleAddProduct = async(e) => {
    e.preventDefault()
    console.log(newProduct)
    const { success, message } = await createProducts(newProduct)
    if (!success) {
      console.log("failed", message)
      toast.error(message)
    }
    else {
       toast.success(message)
      console.log("success",message)
    }
   

    setNewProduct({name:"",price:"",image:""})
  }
  return (
    <div className='px-20 flex flex-col gap-10 justify-center items-center h-100

' >
      <h1 className='text-5xl font-semibold'>Create a Product</h1>
      <form onSubmit={handleAddProduct} className='flex flex-col gap-10 items-center '>
        <div className='flex gap-2'>
        <p>Name</p>
        <input type="text" className=' border-b-1 border-solid px-2 py-1' value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
        </div>
         <div className='flex gap-2'>
        <p>Price</p>
        <input type="number"  className=' border-b-1 border-solid  px-2 py-1' value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}/>
        </div>
         <div className='flex gap-2'>
        <p>Image URL</p>
        <input type="text" className=' border-b-1 border-solid  px-2 py-1' value={newProduct.image} onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}/>
        </div>
        <button className='bg-blue-600 px-3 py-2 rounded-lg w-50 cursor-pointer font-bold'>Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
