import ProductTable from "@/components/products/AdminProductCard";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import Heading from "@/components/ui/Heading";
import { products } from "@/prisma/data/products";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })

    return products
}


export default async function SearchPage({searchParams} : {searchParams: {search : string}}) {

    const products = await searchProducts(searchParams.search)

    
  return (
    <>
    
        

        <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-center">
        <Heading>Resultados de la Busqueda: </Heading>    

        <ProductSearchForm />
        </div>

        {products.length > 0 ? (
            <ProductTable
            products={products}
            />
        ): <h2 className="flex justify-center font-bold text-2xl items-center mt-10">No hay coincidencia de busqueda...</h2>}

        

    </>
  )
}
