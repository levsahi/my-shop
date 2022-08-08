import React, { useRef } from 'react'
import ModalFrame from '../ModalFrame/ModalFrame'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'
import { ProductCart } from '../../interface/ProductCart'


type ModalRemoveProductProps = {
  changeOpen: (value: boolean) => void
  open:boolean
  id: string | undefined
  name: string | undefined
  onAccapt: (idOfProdact:string | undefined) => void
}


const ModalRemoveProduct = ({
  changeOpen,
  id,
  name,
  open,
  onAccapt
}:
  ModalRemoveProductProps) => {
  const cancelButtonRef = useRef(null)
  const navigate = useNavigate()

  
  return (
    <ModalFrame setOpen={changeOpen} open={open} >
          <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          {name}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed
                        from our servers forever. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => onAccapt(id)}
                  >
                    OK
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => changeOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
            </div>
    </ModalFrame >
  )
}

export default ModalRemoveProduct