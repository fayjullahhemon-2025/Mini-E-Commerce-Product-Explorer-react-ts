import { use, useState } from "react";
import type { MobileType } from "../types";

interface ProductCardType{
    product:MobileType
}

export default function ProductCard({product}:ProductCardType){
    const [select, setSelect] = useState<boolean>(false);

    const handleToggleSelect = (): void => {
        setSelect(!select);

    }
    return(
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

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

                                    <button disabled={select}
                                        onClick={() => handleToggleSelect()}
                                        className={`${select ? 'bg-gray-300 px-4 py-2.5 text-sm font-semibold px-4 py-2.5 text-sm font-bold rounded-lg text-red-700' : '"rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"'}`}
                                    >
                                        {select?'Added to Cart':'Add to Cart'}
                                    </button>
                                </div>

                            </div>
                        </div>
    )
}