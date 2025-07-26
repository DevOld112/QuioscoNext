"use client";

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product} : AddProductButtonProps) {

    const addToOrder = useStore((state) => state.addToOrder)

  return (
    <div>

        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 font-bold cursor-pointer w-full mt-5 p-3 uppercase text-white"
            onClick={() => addToOrder(product)}
            >
            Agregar
        </button>
    </div>
  

   
    
  )
}