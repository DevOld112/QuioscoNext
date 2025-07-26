import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
    return await prisma.product.findMany({
        where: {
            category: {
                slug: category
            }
        }
    })
}

export default async function Page({params}: {params: { category: string }}) {
    const products = await getProducts(params.category)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Heading>
                Elige y personaliza tu pedido
            </Heading>

            {products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}