import {create } from "zustand"
import {Product} from "@/types"
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStore {
    items:Product[];
    
    addItem: (data:Product) =>void
    removeItem: (data:string) =>void
    removeAll: () => void
}

const useCart = create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data:Product) =>{
            const currentItems = get().items
            const existingItem = currentItems.find((item)=> item.id === data.id)

            if(existingItem){
                return toast("Item already in cart")
            }

            set({items: [...get().items, data]})
            toast.success("Item added to cart.")
        },
      removeItem: (id:string) => {
        set({items: [...get().items.filter((item) => item.id !== id)]})
        toast.success("Item removed from the cart.")
      },

      removeAll: () => set({items: []})
    }),{
        name:"cart-storage",
        storage:createJSONStorage(()=> localStorage) 
    })
)

export default useCart