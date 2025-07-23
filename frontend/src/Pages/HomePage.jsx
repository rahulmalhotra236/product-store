import React, { useEffect } from 'react';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast'


const HomePage = () => {
  const {fetchProducts,products} = useProductStore()

  useEffect(() => {
    fetchProducts()
    toast.success("Products")
    
     
  }, [fetchProducts])
  console.log("products", products)
  return (
    <div className='px-20 flex gap-x-10 gap-y-20 flex-wrap'>
      {products.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}

      {products.length === 0 &&
        <div>
        <h1>No Products Found</h1>
        </div>}
    </div>
  );
};

export default HomePage;
