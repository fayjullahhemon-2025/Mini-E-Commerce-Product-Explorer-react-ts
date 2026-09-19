import { use } from "react"
import type { MobileType } from "../types"

interface ProductsPropType {
    productsPromiseData: Promise<MobileType[]>
}
export default function Products({ productsPromiseData }: ProductsPropType) {
    const products = use(productsPromiseData);
    // console.log(products);
    return (
        <div>
            <div className='flex justify-center items-center' >
                <h1 className='text-4xl' >Our Products</h1>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-3 my-10" >
                    {
                        products.map(product => <div key={product.id} className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                            {/* Image */}
                            <div className="h-56 w-full bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                {/* Brand */}
                                <p className="mb-1 text-sm font-medium text-gray-500">
                                    {product.brand}
                                </p>

                                {/* Name */}
                                <h2 className="truncate text-xl font-bold text-gray-800">
                                    {product.name}
                                </h2>

                                {/* Rating */}
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm font-medium text-gray-600">
                                        {product.rating}
                                    </span>
                                </div>

                                {/* Short Details */}
                                <div className="mt-4 flex gap-2">
                                    <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">
                                        {product.ram}
                                    </span>

                                    <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">
                                        {product.storage}
                                    </span>
                                </div>

                                {/* Price + Button */}
                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <p className="text-2xl font-bold text-gray-900">
                                        ${product.price}
                                    </p>

                                    <button
                                        onClick={() => console.log("Added:", product.name)}
                                        className="rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}