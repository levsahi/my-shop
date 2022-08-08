import React, { useRef } from 'react'
import ModalFrame from '../../../../Components/ModalFrame/ModalFrame'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../enum/urls'




const ModalAddProduct = ({setOpen,product,open}:any) => {
  const cancelButtonRef = useRef(null)
  const navigate = useNavigate()
  
  return (
    <ModalFrame setOpen={setOpen} open={open} >
         <div>
         <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                  <li key={product.id} className="flex py-6 space-x-6">
                    <img
                      src={product.img}
                      className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h1 className="text-gray-900 text-xl">
                        <span>{product.name}</span>
                      </h1>
                      <p>Qantity: {product.qauntity}</p>
                    </div>
                    <p className="flex-none font-medium text-gray-900">{product.price}$</p>
                  </li>
              </ul>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={() => (navigate(ROUTES.CHECKOUT))}
                  >
                    Go Checkout
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={()=>(navigate(ROUTES.HOME))}
                    ref={cancelButtonRef}
                  >
                    Go Shoping
                  </button>
                </div>
            </div>
    </ModalFrame >
  )
}

export default ModalAddProduct