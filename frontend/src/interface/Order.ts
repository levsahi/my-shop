export interface Order{
    createdAt: string;
    id:string
    orderItems:ProductOrder[]
    orderNumber:string
    totalPrice:number
    userInfo:UserInfo
  
}

export interface UserInfo{
    email: string; 
}


export interface ProductOrder{
    img: string;
    name:string
    price:number
    product:string
    qauntity:number
    _id:string
}


