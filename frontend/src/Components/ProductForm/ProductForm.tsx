import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Action } from '../../enum/action'
import { LOCAL_STORAGE } from '../../enum/localStorage'
import { ROUTES, URLS } from '../../enum/urls'
import useInput from '../../hooks/useInput'
import { Product } from '../../interface/Product'
import { extractToken } from '../../utils/utils'
import { VALIDATOR_MINLENGTH, VALIDATOR_NUMBER, VALIDATOR_REQUIRE } from '../../validators/validatorsFunctions'



type ProductFormProps = {
    typeAction:Action
    product?: Product | undefined
    id?: string
}



const ProductForm = ({typeAction,product,id}:ProductFormProps) => {
  

  const navigate = useNavigate()
   

    useEffect(() => {
       if(typeAction === Action.UPDATE && product){
         setproductNameValue(product.name)
         setImageValue(product.img)
         setDescriptionValue(product.description)
         setPriceValue(product.price.toString())
         if(product.catagory){
           setCatagoryValue(product.catagory)
         }
         
       }
    },[typeAction,product])

    const {
        value: productNameValue,
        isValid: productNameIsValid,
        setValue: setproductNameValue,
        isTouched: productNameIsTouched,
        errorMessage: productNameErrorMessage,
    } = useInput([VALIDATOR_REQUIRE()])
    
    const {
        value: imageValue,
        isValid: imageIsValid,
        setValue: setImageValue,
        isTouched:imageIsTouched,
        errorMessage: imageErrorMessage,
    } = useInput([VALIDATOR_REQUIRE()])
    
    const {
        value: descriptionValue,
        isValid:descriptionIsValid,
        setValue: setDescriptionValue,
        isTouched: descriptionIsTouched,
        errorMessage: descriptionErrorMessage,
    } = useInput([VALIDATOR_REQUIRE()])
    
    
    const {
        value: priceValue,
        isValid: priceIsValid,
        setValue: setPriceValue,
        isTouched: priceIsTouched,
        errorMessage: priceErrorMessage,
    } = useInput([VALIDATOR_NUMBER()])
    
    const {
        value: categoryValue,
        isValid: categoryIsValid,
        setValue: setCatagoryValue,
        isTouched: categoryIsTouched,
        errorMessage: categoryErrorMessage,
    } = useInput([VALIDATOR_MINLENGTH(6)])

    let formIsValid = false;

  if (productNameIsValid && imageIsValid && descriptionIsValid 
    && priceIsValid && categoryIsValid) {
     formIsValid = true;
  }

  const handleForm = async () =>{
        const config = extractToken()
        const newProduct = {
          name:productNameValue,
          img:imageValue,
          description:descriptionValue,
          price:priceValue,
          catagory:categoryValue
        } 

        try {
            if(typeAction === Action.CREATE){
                await axios.post(
                    `${URLS.BACKEND_URL}/${URLS.PRODUCTS}`,
                    newProduct,
                    config
                )
                
            } else if(typeAction === Action.UPDATE){
              await axios.put(
                `${URLS.BACKEND_URL}/${URLS.PRODUCTS}/${id}`,
                 newProduct,
                 config
              )
            }
            navigate(ROUTES.HOME)
                          
        
        }catch(err:any){
            let errorMsg = ''
            if(err.response.data && !err.response.data.message){
                errorMsg = err.response.data
            }else if(err.response.data.message){
                errorMsg = err.response.data.message
            }
    
            toast(errorMsg)
            setproductNameValue('')
            setImageValue('')
            setDescriptionValue('')
            setPriceValue('')
            setCatagoryValue('')
        
        }
  }

  return (
    <>
    <ToastContainer />
    <div className="flex flex-col items-center">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5 w-3/5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Product Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={(e)=> setproductNameValue(e.target.value)}
                  type="text"
                  name="product-name"
                  value={productNameValue}
                  id="product-name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                <div className="flex text-red-500 text-base font-extralight">
                        {(! productNameIsValid &&  productNameIsTouched) &&  productNameErrorMessage}
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Image
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={(e)=> setImageValue(e.target.value)}
                  value={imageValue}
                  type="text"
                  name="image"
                  id="image"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
                <div className="flex text-red-500 text-base font-extralight">
                        {(! imageIsValid &&  imageIsTouched) &&  imageErrorMessage}
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Description
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={(e)=> setDescriptionValue(e.target.value)}
                  value={descriptionValue}
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="flex text-red-500 text-base font-extralight">
                        {(! descriptionIsValid &&  descriptionIsTouched) &&  descriptionErrorMessage}
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Price
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={(e)=> setPriceValue(e.target.value)}
                  value={priceValue}
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="price"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="flex text-red-500 text-base font-extralight">
                        {(! priceIsValid &&  priceIsTouched) &&  priceErrorMessage}
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Category
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={(e)=> setCatagoryValue(e.target.value)}
                  value={categoryValue}
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="category"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="flex text-red-500 text-base font-extralight">
                        {(! categoryIsValid &&  categoryIsTouched) &&  categoryErrorMessage}
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="pt-5 mt-10 mb-10 mr-28">
        <div className="flex justify-end">
          <button
            onClick={handleForm}
            disabled={!formIsValid}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {typeAction === Action.CREATE ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default ProductForm