import type { Dispatch, SetStateAction } from "react";
import type { MobileType } from "../types"
import { DiVim } from "react-icons/di";

interface CartType {
   
    cart: MobileType[]
    setCart: Dispatch<SetStateAction<MobileType[]>>
}
export default function Cart({ cart, setCart }: CartType) {
    // console.log(c);
    // console.log(cart);
    const handleDeleteItem = (product: MobileType) => {
        let remain = cart.filter(mc => mc.id !== product.id);
        setCart(remain);
    }
    const hadnleDeleteAll = () => {
        setCart([]);
    }
    return (
        <div>
            <div>
                {
                    cart.length===0?'Cart is Empty': cart.map(c=> <div key={c.id} >
                        <li>{c.name}</li> <button onClick={()=>{handleDeleteItem(c)}} >Delete</button>
                    </div>)
                }
                
            </div>
            <div>
                {
                    cart.length>1?<button onClick={()=>{
                    hadnleDeleteAll()
                }}>
                    delete all item
                </button>:''
                }
            </div>
        </div>
    )
}