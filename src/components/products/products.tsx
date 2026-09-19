import { use, useState } from "react"
import type { MobileType } from "../types"
import ProductCard from "./ProductCard";

interface ProductsPropType {
    productsPromiseData: Promise<MobileType[]>

}
let isSelect;
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
                        products.map(product => <ProductCard key={product.id} product = {product} ></ProductCard>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}