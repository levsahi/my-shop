import { ProductCart } from "../../interface/ProductCart";



export const calculateCart = (cart:ProductCart[]) =>{
    const sum = cart.reduce(
      (acc, item) => acc + item.price,
        0
    );
  
    return sum
  }
  