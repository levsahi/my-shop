import React from 'react'
import ModalFrame from '../../../../Components/ModalFrame/ModalFrame'
import { Dialog, } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'



const CartModal = () => {
      return (
      <ModalFrame>
              <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo
                        pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
              </div>
      </ModalFrame>
  )
}

export default CartModal