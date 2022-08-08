import React from 'react'
import OrderForm from '../../Components/OrderForm/OrderForm'
import { URLS } from '../../enum/urls'



const AllOrderScreen = () => {
  return (
     <OrderForm fetchurl={URLS.FETCH_ALL_ORDER} />
  )
}

export default AllOrderScreen