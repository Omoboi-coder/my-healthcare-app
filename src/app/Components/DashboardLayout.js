import React from 'react'
import TopCon from './TopCon'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'
import Link from 'next/link'

const DashboardLayout = ({ children }) => {
  return (
     <section className='bg-[#F5F8FF] '>
            {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden flex '>
        <div className='flex w-full h-[92px] items-center mx-auto px-4 pt-4'>
           {/* Logo */}
           <Link href='#'>
                 <div className='hidden md:block'>
                 <Image
                 src='/Group 1.svg'
                 alt='Logo'
                 width={248}
                 height={45}
                 /> 
                 </div>
          </Link>
              {/* mobile Nav */}
                  <div className='md:hidden flex flex-row w-full justify-between items-center '>
                  <div className='md:hidden flex flex-row gap-3'>
                       {/* Hamburger Menu */}
                         <SidebarMenu />
                  <span className='text-[#407BFF] text-[25px] font-semibold'>ProMed</span>
                  </div>
                <Link href='/'>
                <button className='px-4 py-2 text-[17px] font-semibold border border-blue-500 text-blue-500 rounded
                hover:bg-blue-500 hover:text-white'>Contact Us</button>
                </Link>
                </div>   
        </div>
      </nav>

      {/* Main content area */}
      <div className='flex flex-col mx-auto gap-0 w-full min-h-screen md:w-[84.4rem] md:h-auto bg-[#F5F8FF]'>
        
        {/* TopCon - only shows on desktop */}
        <div className='md:block hidden'>
          <TopCon />
        </div>

         {/* Down side content */}
        <div className='flex-1 md:flex-1 w-full min-h-full'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default DashboardLayout