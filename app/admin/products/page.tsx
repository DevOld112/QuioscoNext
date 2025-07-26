import ProductTable from "@/components/products/AdminProductCard";
import Pagination from "@/components/products/Pagination";
import Heading from "@/components/ui/Heading";
import { redirect } from "next/navigation";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";

async function productCount () {
  return await prisma.product.count()
}

async function getProducts(pagination: number, pageSize: number) {

  const skip = (pagination - 1 ) * pageSize

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  })

  return products
}


export default async function ProductsPage({searchParams} : { searchParams: {page: string}}) {

  const pagination = +searchParams.page || 1;
  const pageSize = 10


  if(pagination < 0) {
    redirect('/admin/products')
  }
  
  const products = await getProducts(pagination, pageSize)
  const totalProducts = await productCount()
  const totalPages = Math.ceil(totalProducts / pageSize)
  
  if(pagination > totalPages || pagination <= 0) {
    redirect('/admin/products')
  }
  
  return (
    <>

      <Heading>
        Administrar tus Productos
      </Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-center">
        <Link 
          href={'/admin/products/new'}
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center cursor-pointer font-bold"
        >
          Crear Producto
        </Link>

        <ProductSearchForm />
      </div>

        <ProductTable
        products={products}
        />
      

      <Pagination
      pagination={pagination}
      totalPages={totalPages}
      />
      
    </>
  )
}
