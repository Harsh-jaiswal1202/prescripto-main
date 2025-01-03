import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.icon} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Your one-stop solution for all your healthcare needs. Our platform connects you with experienced doctors across various specialties, making it easy to book appointments online from the comfort of your home. Whether you need a general consultation or specialized medical care, we are here to simplify the process and ensure you receive timely and reliable healthcare services. Your health is our priority!</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8005161035</li>
            <li>udayjaiswal788@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ HealthFirst.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer