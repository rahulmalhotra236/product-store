import { create } from "zustand"

export const useProductStore = create((set) => ({
  products: [],

  setProduct: (products) => set({ products }),

  createProducts: async (newproduct) => {
    // Validate correctly
    if (!newproduct.name || !newproduct.price || !newproduct.image) {
      console.log("Validation failed", newproduct)
      return { success: false, message: "Please fill all fields" }
    }

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newproduct),
      });

      const data = await res.json();
      console.log("Server response:", data)

      set((state) => ({ products: [...state.products, data.data] }));

      return { success: true, message: "Product Created" };
    } catch (err) {
      console.error("Error while creating product:", err);
      return { success: false, message: "Server error" };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("/api/product")
    const data = await res.json()
    set({products:data.data})
  },
  deleteProduct: async(pid)=> {
    const res = await fetch(`/api/product/${pid}`, {
     method:"DELETE"
    })
    const data = await res.json()
    if(!data.success) return{success:false, message:data.message}
    set(state => ({ products: state.products.filter(product => product._id !== pid) }))
    return {success:true,message: data.message}
  },

  updateProduct: async (pid, updateProduct) => {
    const res = await fetch(`/api/product/${pid}`, {
      method: "PUT",
       headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });
    const data =await res.json()
    if (!data.success) return { success: false, message: data.message }
    
    set((state) => ({
      products:state.products.map(product=>product._id===pid?data.data:product)
    }))
    return {success:true, message:data.message}
  }
}));
