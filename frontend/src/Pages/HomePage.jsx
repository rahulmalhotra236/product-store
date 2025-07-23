import React, { useEffect } from 'react';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const {fetchProducts,products} = useProductStore()

  useEffect(() => {
    fetchProducts()
     
  }, [fetchProducts])
  console.log("products", products)
  return (
    <div className='px-20 flex gap-x-10 gap-y-20 flex-wrap'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default HomePage;
