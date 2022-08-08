import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { ROUTES } from '../enum/urls'
import AllOrderScreen from '../Screen/AllOrderScreen/AllOrderScreen'
import AllProductScreen from '../Screen/AllProductScreen/AllProductScreen'
import CreateProduct from '../Screen/AllProductScreen/components/CreateProduct/CreateProduct'
import UpdateProduct from '../Screen/AllProductScreen/components/UpdateProduct/UpdateProduct'
import CheckoutScreen from '../Screen/CheckoutScreen/CheckoutScreen'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import MyOrderScreen from '../Screen/MyOrderScreen/MyOrderScreen'
import ProductScreen from '../Screen/ProductScreen/ProductScreen'
import RegisterScreen from '../Screen/RegisterScren/RegisterScreen'
import SignInScreen from '../Screen/SignInScreen/SignInScreen'
import ThankYouScreen from '../Screen/ThankYouScreen/ThankYouScreen'


const Router = () => {
  
  return (
    <Routes>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={`${ROUTES.PRODUCT}/:id`} element={<ProductScreen />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutScreen />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInScreen/>} />
          <Route path={ROUTES.MY_ORDER} element={<MyOrderScreen/>} />
          <Route path={ROUTES.THANKS_PAGE} element={<ThankYouScreen/>} />
          <Route path={ROUTES.ALL_ORDER} element={<AllOrderScreen/>} />
          <Route path={ROUTES.REGISTER} element={<RegisterScreen/>} />
          <Route path={ROUTES.ALL_PRODUCT} element={<AllProductScreen/>} />
          <Route path={ROUTES.CREATE_PRODUCT} element={<CreateProduct/>} />
          <Route path={`${ROUTES.UPDATE_PRODUCT}/:id`} element={<UpdateProduct />} />
          <Route path={"*"}  element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  )
}

export default Router