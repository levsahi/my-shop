import React from 'react'
import { Link } from 'react-router-dom'
import ModalFrame from '../../../ModalFrame/ModalFrame'
import { ROUTES } from '../../../../enum/urls'
import { Order } from '../../../../interface/Order'

type ModalOrderDetailesProps = {
    changeOpenModal:(value: boolean) => void
    openModal:boolean
    currentOrder:Order | undefined
}




const ModalOrderDetailes = ({
    changeOpenModal,
    openModal,
    currentOrder
}:ModalOrderDetailesProps) => {
  
  
  const orderItems = currentOrder?.orderItems || []
  const createdAt = currentOrder?.createdAt || ''
  const orderNumber = currentOrder?.orderNumber
  const totalPrice = currentOrder?.totalPrice 
  

  return (
    <ModalFrame setOpen={changeOpenModal} open={openModal}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and download invoices.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Recent orders</h2>

            <div className="space-y-20">
              
                <div>
  
                  <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                    <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                      <div className="flex justify-between sm:block">
                        <dt className="font-medium text-gray-900">Date Order</dt>
                        <dd className="sm:mt-1">
                          <h2>{createdAt.substring(0,10)}</h2>
                        </dd>
                      </div>
                      <div className="flex justify-between pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">Order number</dt>
                        <dd className="sm:mt-1">{orderNumber}</dd>
                      </div>
                      <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>Total amount</dt>
                        <dd className="sm:mt-1">{totalPrice}</dd>
                      </div>
                    </dl>
                   
                  </div>

                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">Products</caption>
                    <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                      <tr>
                        <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                          Product
                        </th>
                        <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                          Price
                        </th>
                        <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                          Qauntity
                        </th>
                        <th scope="col" className="w-0 py-3 font-normal text-right">
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                      {orderItems.map((product) => (
                        <tr key={product._id}>
                          <td className="py-6 pr-8">
                            <div className="flex items-center">
                              <img
                                src={product.img}
                                alt={product.img}
                                className="w-16 h-16 object-center object-cover rounded mr-6"
                              />
                              <div>
                                <div className="font-medium text-gray-900">{product.name}</div>
                                <div className="mt-1 sm:hidden">{product.price}</div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-6 pr-8 sm:table-cell">{product.price}</td>
                          <td className="hidden py-6 pr-8 sm:table-cell">{product.qauntity}</td>
                          <td className="py-6 font-medium text-right whitespace-nowrap">
                            <Link to={`${ROUTES.PRODUCT}/${product.product}`} className="text-indigo-600">
                              View<span className="hidden lg:inline"> Product</span>
                              <span className="sr-only">, {product.name}</span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
           
            </div>
          </div>
        </div>
      </div>
    </ModalFrame>
  )
}

export default ModalOrderDetailes