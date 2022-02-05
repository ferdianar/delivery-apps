import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Link from "next/link"
import Image from "next/image"

function Navbar() {
       const [isOpen, setIsOpen] = useState(false);
       return (
              <div>
                     <nav className="bg-transparent">
                            <div className="py-4 md:py-6 px-6 md:px-28">
                                   <div className=" flex items-center justify-between">
                                          <div className="flex items-center">
                                                 <div className="flex-shrink-0">
                                                        <h1 className="font-extrabold text-[24px] text-white">Delivery.</h1>
                                                 </div>
                                          </div>
                                          <div className="-mr-2 flex items-start md:hidden">
                                                 <button
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        type="button"
                                                        className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-blue-800 focus:outline-none "
                                                        aria-controls="mobile-menu"
                                                        aria-expanded="false"
                                                 >
                                                        <span className="sr-only">Open main menu</span>
                                                        {!isOpen ? (
                                                               <svg
                                                                      className="block h-6 w-6"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                      aria-hidden="true"
                                                               >
                                                                      <path
                                                                             strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             strokeWidth="2"
                                                                             d="M4 6h16M4 12h16M4 18h16"
                                                                      />
                                                               </svg>
                                                        ) : (
                                                               <svg
                                                                      className="block h-6 w-6"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                      aria-hidden="true"
                                                               >
                                                                      <path
                                                                             strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             strokeWidth="2"
                                                                             d="M6 18L18 6M6 6l12 12"
                                                                      />
                                                               </svg>
                                                        )}
                                                 </button>
                                          </div>
                                          <div className="hidden md:block">
                                                 <div className="nav ml-0 flex items-center space-x-8">
                                                        <Link href="/">
                                                               <a className="homenav font-medium text-md no-underline block text-white mt-4 mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Home
                                                               </a>
                                                        </Link>
                                                        <Link href="/features">
                                                               <a className=" font-medium text-md no-underline block text-[#6D70BF] mt-4 mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Features
                                                               </a>
                                                        </Link>
                                                        <Link href="/schedule">
                                                               <a className="font-medium text-md no-underline block text-[#6D70BF] mt-4 mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Schedule
                                                               </a>
                                                        </Link>
                                                        <Link href="/checkout">
                                                               <a className="font-medium text-md no-underline block text-[#6D70BF] mt-4 mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Checkout
                                                               </a>
                                                        </Link>
                                                        <Link href="#">
                                                               <a href="#" className="font-medium text-md no-underline inline-block bg-[#14153883] text-blue-300 border-none text-sm px-4 py-3 mr-3 leading-none  border rounded-md  hover:border-transparent mt-4 sm:mt-0">
                                                                      Get Started
                                                               </a>
                                                        </Link>
                                                 </div>
                                          </div>
                                   </div>
                            </div>

                            <Transition
                                   show={isOpen}
                                   enter="transition ease-out duration-100 transform"
                                   enterFrom="opacity-0 scale-95"
                                   enterTo="opacity-100 scale-100"
                                   leave="transition ease-in duration-75 transform"
                                   leaveFrom="opacity-100 scale-100"
                                   leaveTo="opacity-0 scale-95"
                            >
                                   {(ref) => (
                                          <div className="md:hidden" id="mobile-menu">
                                                 <div ref={ref} className="px-6 pt-2 pb-3 space-y-1 sm:px-3">
                                                        <Link href="/">
                                                               <a className="homenav py-2 font-medium text-md no-underline block text-white mt-0 mx-0 md:mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Home
                                                               </a>
                                                        </Link>
                                                        <Link href="/features">
                                                               <a className="py-2 font-medium text-md no-underline block text-[#6D70BF] mt-0 mx-0 md:mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Features
                                                               </a>
                                                        </Link>
                                                        <Link href="/schedule">
                                                               <a className="py-2 font-medium text-md no-underline block text-[#6D70BF] mt-4 mx-0 md:mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Schedule
                                                               </a>
                                                        </Link>
                                                        <Link href="/checkout">
                                                               <a className="py-2 font-medium text-md no-underline block text-[#6D70BF] mt-4 mx-0 md:mx-6 sm:inline-block sm:mt-0 text-teal-lighter hover:text-[#9b9ee4] mr-4">
                                                                      Checkout
                                                               </a>
                                                        </Link>
                                                        <Link href="#">
                                                               <a href="#" className="font-medium text-md no-underline inline-block bg-[#14153883] text-blue-300 border-none text-sm px-4 py-3 mr-3 leading-none  border rounded-md  hover:border-transparent mt-4 sm:mt-0">
                                                                      Get Started
                                                               </a>
                                                        </Link>
                                                 </div>
                                          </div>
                                   )}
                            </Transition>
                     </nav>
              </div>
       );
}

export default Navbar