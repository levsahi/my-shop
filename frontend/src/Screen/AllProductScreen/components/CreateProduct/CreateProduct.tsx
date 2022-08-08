import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../../../Components/ProductForm/ProductForm'
import { Action } from '../../../../enum/action'
import { METHODS } from '../../../../enum/methos'
import { ROUTES, URLS } from '../../../../enum/urls'
import { isAdmin } from '../../../../utils/utils'

const CreateProduct = () => {
  
   const navigate = useNavigate()

  useEffect(() => {
    if(!isAdmin()){
        navigate(ROUTES.HOME)
    }
  },[])
  
  return (
    <ProductForm
       typeAction={Action.CREATE} 
      
    />
  )
}

export default CreateProduct