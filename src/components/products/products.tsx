import { use, useState} from "react"
import type { MobileType } from "../types"
import ProductCard from "./ProductCard";

interface ProductsPropType {
    productsPromiseData: Promise<MobileType[]>
    
}

export default function Products({ productsPromiseData }: ProductsPropType) {
    const products = use(productsPromiseData);
    const [cart,setCart] = useState<MobileType[]>([])
    // console.log(products);
    return (
        <div>
            <div className='flex justify-center items-center' >
                <h1 className='text-4xl' >Our Products</h1>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-3 my-10" >
                    {
                        products.map(product => <ProductCard key={product.id} product = {product} cart={cart} setCart={setCart} ></ProductCard>)
                    }
                </div>
                <div>
                    {
                        cart.map(c=> <li key={c.id} >{c.name}</li>)
                    }
                </div>
            </div>
        </div>
    )
}