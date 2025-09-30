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
          <button onClick={toggleMenu} className="block md:hidden mt-2 focus:outline-none">
           <Image src="/menu.svg" 
           alt="menu"
            width={26}
             height={26} />
          </button>
        )}
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <>
          {/* Slide-out menu */}
          <div className="fixed top-0 right-0 w-2/3 min-h-screen bg-growtoken-dark shadow-lg z-50
           flex flex-col pt-8 px-8 space-y-10 text-lg font-semibold 
           transition duration-300 ease-in-out">
            {/* Close icon inside the menu */}
            <div className="flex justify-end mb-20">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Image
                  src="/Images/icon-menu-close.svg"
                  alt="Close menu"
                  width={28}
                  height={28}
                />
              </button>
            </div>

           <div className='w-[157px] h-[296px] mx-auto text-[16px] space-y-5 p-[8px]'>
                    <div className='w-[141px] h-[220px] p-[4px] space-y-7'>
                      {/* Home */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/ic_round-dashboard (1).svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/home" className='text-[16px] text-white mt-1.5 cursor-pointer'>Home</Link>
                      </div>
    
                      {/* Invest */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/healthicons_agriculture.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/invest" className='text-[16px] text-white mt-1.5 cursor-pointer'>Invest</Link>
                      </div>
    
                      {/* Activity */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/fe_activity.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/activity" className='text-[16px] text-white mt-1.5 cursor-pointer'>Activity</Link>
                      </div>
    
                      {/* Notification */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/ic_round-notifications.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/notification" className='text-[16px] text-white mt-1.5'>Notification</Link>
                      </div>
                    </div>
                    {/* Exist */}
                     <div className='flex flex-row gap-2 w-[93px] h-[32px] ml-1'>
                        <Image
                         src="/Images/solar_settings-bold.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/" className='text-[16px] text-[#D61F1F] mt-1.5'>Exist</Link>
                      </div>
                  </div>
          </div>
        </>
      )}
   
    </>
  )
}

export default SidebarMenu