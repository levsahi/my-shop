import { Order } from "../../interface/Order"
import { ClockIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/react/outline'

export const createOrderArray=(data:any)=>{
    const myOrders:Order[] = []

      for(const el of data){
        const {createdAt,id,orderItems,orderNumber,
          totalPrice,userInfo
        } = el
        myOrders.push({
          createdAt,id,orderItems,orderNumber,
          totalPrice,userInfo  
        })
      }

      return myOrders
}

export const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'My tasks', href: '#', icon: ViewListIcon, current: false },
    { name: 'Recent', href: '#', icon: ClockIcon, current: false },
  ]

export const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
  ]