"use client"

import { SearchSchema } from "@/src/schema"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


export default function ProductSearchForm() {

    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }

        const result = SearchSchema.safeParse(data)

        if(data.search === '') {
            toast.error(result.error?.issues[0].message)
            return
        }

        router.push(`/admin/products/search?search=${result.data?.search}`)

    }

  return (
    <form action={handleSearchForm} className="flex items-center">
        <input
            className="p-2 placeholder-gray-400 w-full rounded-md"
            placeholder="Buscar Producto"
            type="text"
            name="search"
        />

        <input
            className="bg-indigo-400 p-2 uppercase text-white cursor-pointer font-bold "
            placeholder="Buscar Producto"
            type="submit"
            value={'Buscar'}
        />

    </form>
  )
}
