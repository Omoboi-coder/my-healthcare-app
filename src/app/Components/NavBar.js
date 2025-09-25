import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 

const NavBar = () => {
  return (
  <section id='navbar' className='bg-white shadow-lg'>
    <nav className='flex flex-row w-full md:w-[1350px] h-[92px] mx-auto
    justify-between items-center px-0 md:px-15'>
        {/* Logo */}
        <div className='hidden md:block'>
        <Image
        src='/Group 1.svg'
        alt='Logo'
        width={248}
        height={45}
        /> 
        </div>
        {/* Navigation Links */}
        <div className='hidden md:flex flex-row md:w-[452px] h-[24px] gap-8 text-[20px] ml-8 font-medium text-[#888888]'>
            <Link href='#home' className='hover:text-blue-500 transition duration-300'>Home</Link>
            <Link href='#services' className='hover:text-blue-500 transition duration-300'>Services</Link>
            <Link href='#team' className='hover:text-blue-500 transition duration-300'>Team</Link>
            <Link href='#events' className='hover:text-blue-500 transition duration-300'>Events</Link>
            <Link href='#aboutus' className='hover:text-blue-500 transition duration-300'>About Us</Link>
        </div>
        {/* Action Buttons */}
        <div className='hidden md:flex flex-row gap-4'>
            <button className=' px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white'>Login</button>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>Contact Us</button>
        </div> 
             {/* mobile Nav */}
        <div className='md:hidden flex flex-row gap-35 px-3'>
        <div className='md:hidden flex gap-2'>
        <Image
        src='/menu.svg'
        alt='Menu'
        width={26}
        height={26}
        />
        <span className='text-[#407BFF] text-[25px] font-semibold'>ProMed</span>
        </div>
          <button className='px-5 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>Contact Us</button>
        </div> 


      
    </nav>
  </section>
  )
}

export default NavBar