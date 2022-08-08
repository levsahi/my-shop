import React from 'react'
import OrderForm from '../../Components/OrderForm/OrderForm'
import { URLS } from '../../enum/urls'



const MyOrderScreen = () => {
  return (
     <OrderForm fetchurl={URLS.FETCH_MY_ORDERS} />
  )
}

export default MyOrderScreen