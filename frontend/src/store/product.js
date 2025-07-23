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
  }
}));
