import { Fragment, useContext, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../../interface/AppContext'
import Context from '../../Context/context'
import { ROUTES } from '../../enum/urls'
import Tooltip from '@mui/material/Tooltip';
import { LOCAL_STORAGE } from '../../enum/localStorage'
import { classNames, removeFromStorageAndUpdateState } from '../../utils/utils'
import { currencies, navigation } from './Navigation.utiles'




const Navigation = () => {
    
  const navigate = useNavigate()


  
  const {cart,jwtToken,changeJwtToken,isAdmin,changesetIsAdmin,changeCart} = useContext(Context) as AppContext;
  
  
  const logOut =()=>{
    removeFromStorageAndUpdateState(
      LOCAL_STORAGE.TOKEN,
      changeJwtToken,
      null
      )
    removeFromStorageAndUpdateState(
        LOCAL_STORAGE.CART_ITEMS,
        changeCart,
        []
    )
    removeFromStorageAndUpdateState(
      LOCAL_STORAGE.IS_ADMIN,
      changesetIsAdmin,
      false
   )

    navigate(ROUTES.HOME)
  }

  return (
      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-gray-300"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex items-center space-x-6">
                {!jwtToken ? 
                <>
                  <Link to={`${ROUTES.SIGN_IN}`} className="text-sm font-medium text-white hover:text-gray-100">
                      Sign in
                  </Link>
                  
                  <Link to={`${ROUTES.REGISTER}`} className="text-sm font-medium text-white hover:text-gray-100">
                      Create an account
                  </Link>
                  
                </> : 
                  <span 
                     className="text-sm font-medium text-white hover:text-gray-100 cursor-pointer"
                     onClick={logOut}
                  >
                      Sign out
                  </span>
                }
                
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex-1 lg:flex lg:items-center">
                  <Link to={ROUTES.HOME}>
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="px-4 bottom-0 inset-x-0">
                    <div className="h-full flex justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800',
                                    'relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium'
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-indigo-600' : '',
                                      'absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute z-20 top-full inset-x-0 bg-white text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? 'bg-gray-200' : 'bg-transparent',
                                        'w-full h-px transition-colors ease-out duration-200'
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="max-w-7xl mx-auto px-8">
                                      <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                        {category.featured.map((item) => (
                                          <div key={item.name} className="group relative">
                                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-center object-cover"
                                              />
                                            </div>
                                            <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                                              {item.name}
                                            </a>
                                            <p aria-hidden="true" className="mt-1">
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={() => {}}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex-1 flex items-center justify-end">
                  {jwtToken &&
                  <Link to={ROUTES.MY_ORDER} className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                    My Order
                  </Link>
                  }

                  <div className="flex items-center lg:ml-8">
                    {isAdmin && 
                    <>
                      <Link to={ROUTES.ALL_ORDER} className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        ALL Order
                      </Link>
                      |
                      <Link to={ROUTES.ALL_PRODUCT} className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        ALL Product
                      </Link>
                    </>
                    }
                    
                    

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <div className="flex">
                        {
                             (cart.length > 0) ? 
                             <Link to={ROUTES.CHECKOUT}>
                             <ShoppingBagIcon
                               className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                               aria-hidden="true"
                             />
                            </Link> :
                            <Tooltip title="no pruducts on cart">
                                <ShoppingBagIcon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                            </Tooltip>
                        }
                       
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                        <span className="sr-only">items in cart, view bag</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navigation