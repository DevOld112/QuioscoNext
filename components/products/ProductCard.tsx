import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product} : ProductCardProps) {
    const imagePath = getImagePath(product.image)

    return (
        <div className="border border-gray-200 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imagePath}
                    alt={`Imagen de ${product.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            <div className="p-4 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                    {product.name}
                </h3>

                <div className="grid grid-cols-1">
                    <p className="text-lg font-bold text-amber-500">
                        {formatCurrency(product.price)}
                    </p>
                    <AddProductButton 
                        product={product}
                        
                    />
                </div>
            </div>
        </div>
    )
}