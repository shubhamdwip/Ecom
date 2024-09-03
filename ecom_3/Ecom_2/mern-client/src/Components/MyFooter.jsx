import React from 'react'
import {Footer} from 'flowbite-react';
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

const MyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white rounded-lg">
    <div className="w-full px-4 lg:px-24">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Company</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" text-white hover:underline">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Brand Center</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Help center</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Discord Server</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Twitter</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Facebook</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Legal</h2>
          <ul className="text-gray-500 dark:text-white-400 font-medium">
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Download</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">iOS</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Android</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">Windows</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white-500 text-white-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className="text-white-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-white-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-white-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.863-.508v.051a4.08 4.08 0 0 0 3.297 3.975 4.199 4.199 0 0 1-1.85.071A4.1 4.1 0 0 0 5.908 13.7a8.27 8.27 0 0 1-5.112 1.76A11.52 11.52 0 0 0 6.273 17c7.548 0 11.674-6.1 11.674-11.39 0-.176 0-.352-.013-.528A8.063 8.063 0 0 0 20 1.892Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-white-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 19">
              <path fillRule="evenodd" d="M9.5 0A9.5 9.5 0 1 0 19 9.5 9.52 9.52 0 0 0 9.5 0Zm0 16.708a7.2 7.2 0 0 1 0-14.417 7.21 7.21 0 0 1 7.208 7.209 7.177 7.177 0 0 1-7.208 7.208Zm0-11.898A4.699 4.699 0 1 0 14.2 9.5a4.711 4.711 0 0 0-4.7-4.69Zm0 7.693A2.993 2.993 0 1 1 12.493 9.5 3.008 3.008 0 0 1 9.5 12.503Zm5.159-7.922a1.095 1.095 0 1 1-1.1-1.1 1.099 1.099 0 0 1 1.1 1.1Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-white-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.018 10.018 0 0 0 10 0Zm3.625 15.656h-1.667v-3.333c0-.8-.015-1.833-1.118-1.833-1.118 0-1.288.874-1.288 1.777v3.389H7.885V7.668h1.6v1.089h.022a1.755 1.755 0 0 1 1.578-.868c1.688 0 2 1.111 2 2.556v4.211Zm-7.5-8.75a.966.966 0 1 1-.966-.966.966.966 0 0 1 .966.966ZM5.208 15.656H3.541V7.668h1.667Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default MyFooter