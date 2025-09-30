import React from 'react'
import TopCon from './TopCon'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'
import Link from 'next/link'

const DashboardLayout = ({ children }) => {
  return (
     <section className='bg-[#F5F8FF]'>
            {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden flex'>
        <div className='flex justify-center px-7 pt-6 pb-4'>
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
          {/* Hamburger Menu */}
          <SidebarMenu />
          
        </div>
      </nav>

      {/* Main content area */}
      <div className='flex flex-col mx-auto gap-0 w-full min-h-screen md:w-[84.4rem] md:h-[985px] bg-[#F5F8FF]'>
        
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