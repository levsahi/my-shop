import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../../../Components/ProductForm/ProductForm'
import { Action } from '../../../../enum/action'
import { METHODS } from '../../../../enum/methos'
import { ROUTES, URLS } from '../../../../enum/urls'
import useFetch from '../../../../hooks/useFetch'
import { Product } from '../../../../interface/Product'
import { isAdmin } from '../../../../utils/utils'

const UpdateProduct = () => {
  
  const {id} = useParams()
  const [updateProduct,setUpdateProduct] = useState<Product>() 
  const navigate = useNavigate()
  


  useEffect(() => {
    if(!isAdmin()){
        navigate(ROUTES.HOME)
        return;
    }
    if(id){
      const fetchProduct = async () =>{
        try{
          const {data} = await axios.get(`${URLS.BACKEND_URL}/${URLS.PRODUCTS}/${id}`)
          setUpdateProduct(data)
        }catch(error:any){
           console.log(error)
        }
     } 
     fetchProduct()
    }
  },[id])

   

  return (
    <ProductForm
       typeAction={Action.UPDATE} 
       product={updateProduct}
       id={id}
    />
  )
}

export default UpdateProduct