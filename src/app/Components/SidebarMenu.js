"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SidebarMenu = () => {

       const [menuOpen, setMenuOpen] = useState(false)
       const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className="flex relative justify-between">   
        {/* hamburger icon */}
        {!menuOpen && (
          <button onClick={toggleMenu} className="block md:hidden focus:outline-none">
           <Image src="/menu.svg" 
           alt="menu"
            width={28}
             height={28} />
          </button>
        )}
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <>
          {/* Slide-out menu */}
          <div className="fixed top-0 left-0 w-2/3 min-h-screen bg-white shadow-lg z-50
           flex flex-col pt-8 px-8 space-y-10 text-lg font-semibold 
           transition duration-300 ease-in-out">
            {/* Close icon inside the menu */}
            <div className="flex justify-end mb-20">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Image
                  src="/close-icon.svg"
                  alt="Close menu"
                  width={28}
                  height={28}
                />
              </button>
            </div>

           <div className='w-[157px] h-[396px] mx-auto text-[16px] space-y-12 p-[8px]'>
                    <div className='w-[141px] h-[260px] p-[4px] space-y-12'>
                      {/* Home */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Home icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                          <Link href="/home" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Home</Link>
                      </div>
    
                      {/* Bookings */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Appointment icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/bookings" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Bookings</Link>
                      </div>
    
                      {/* Appointment */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Appointment icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                        <Link href="/appointment" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Appointment</Link>
                      </div>
    
                      {/* Result */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Test icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/result" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Test Result</Link>
                      </div>
                    </div>
                    {/* Exist */}
                     <div className='flex flex-row gap-2 w-[93px] h-[32px] ml-1'>
                        <Image
                         src="/Exist icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/" className='text-[16px] w-[19px] h-[19px] text-[#D61F1F] mt-1.5'>Exist</Link>
                      </div>
                  </div>
          </div>
        </>
      )}
   
    </>
  )
}

export default SidebarMenu