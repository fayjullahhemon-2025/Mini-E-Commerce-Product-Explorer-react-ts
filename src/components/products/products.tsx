import { use, useState} from "react"
import type { MobileType } from "../types"
import ProductCard from "./ProductCard";
import Cart from "./Cart";


interface ProductsPropType {
    productsPromiseData: Promise<MobileType[]>
    
}

export default function Products({ productsPromiseData }: ProductsPropType) {
    const products = use(productsPromiseData);
    const [cart,setCart] = useState<MobileType[]>([])
    // console.log(products);
    // console.log(cart);
    
    return (
        <div>
            <div className='flex justify-center items-center' >
                <h1 className='text-4xl' >Our Products</h1>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-3 my-10 max-w-fit m-auto" >
                    {
                        products.map(product => <ProductCard key={product.id} product = {product} cart={cart} setCart={setCart} ></ProductCard>)
                    }
                </div>
                <div>
                    {
                        <Cart cart={cart} setCart={setCart} ></Cart>
                        // cart.map(c=> <li>{c.name}</li> )
                    }
                    
                </div>
            </div>
        </div>
    )
}