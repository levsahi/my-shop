import React,{useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router'
import Context from './Context/context'
import AppContext from './interface/AppContext'
import Navigation from './Components/Navigation/Navigation';
import { ProductCart } from './interface/ProductCart';
import { LOCAL_STORAGE } from './enum/localStorage';
import { getFromStaorageAndUpdateState } from './utils/utils';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [cart,setCart] = useState<ProductCart[]>([])
  const [jwtToken,setJwtToken] = useState<string | null>(null)
  const [isAdmin,setIsAdmin] = useState(false)


  const changeCart =(cartArr : ProductCart[])=>{
     setCart(cartArr)
  }

  const changesetIsAdmin =(value : boolean)=>{
   setIsAdmin(value)
  }

  const changeJwtToken =(jwtToken: string) =>{
      setJwtToken(jwtToken)
  }

  const storeAction: AppContext = {
     cart,
     changeCart,
     jwtToken,
     changeJwtToken,
     isAdmin,
     changesetIsAdmin
  };

  useEffect(() => {
     
      getFromStaorageAndUpdateState(
      LOCAL_STORAGE.CART_ITEMS,
      changeCart,
      [])

      getFromStaorageAndUpdateState(
      LOCAL_STORAGE.TOKEN,
      changeJwtToken,
      null)

      getFromStaorageAndUpdateState(
         LOCAL_STORAGE.IS_ADMIN,
         changesetIsAdmin,
         false)
  },[])


  return (
     <Context.Provider value={storeAction}> 
          <BrowserRouter>
               <Navigation/>
               <Router /> 
         </BrowserRouter>
     </Context.Provider> 


  );
}

export default App;
