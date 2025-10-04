import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'



      const TopCon = () => {
          const pathname = usePathname()

      const isActive = (path) => {
       return pathname === path
         }
      return (
         <>
        {/* container 1 */}
            <div className='flex flex-row bg-gray-100 w-full h-[60px] px-0 md:px-15 justify-between'>
              <Link href='/'>
               <Image
                  src="/Group 1.svg"
                  alt="Logo"
                  width={148}
                  height={45}
                  className="mt-3 w-[166px] h-[36px] md:w-[208px] md:h-[45px]"
                  />
                  </Link>
                  <div className='flex flex-row w-[580px] h-auto mt-5 p-[4px] space-x-4'>
                     <Link href="/home">
                      {/* Home */}
                         <div className={`flex flex-row gap-2 w-[85px] h-[32px] px-1.5 rounded-lg transition-colors ${
                        isActive('/home') ? 'bg-[#4093ff] text-white' : 'hover:bg-gray-200'
                        }`}>
                        <Image
                         src="/Home icon.svg"
                         alt="Home Logo"
                         width={19}
                         height={19}
                         />
                          <span className={`text-[16px] mt-1.5 cursor-pointer ${
                           isActive('/home') ? 'text-white' : 'text-[#343434]'
                        }`}>Home</span>
                      </div>
                      </Link>
                       <Link href="/bookings">
                      {/* Booking */}
                         <div className={`flex flex-row gap-2 w-[110px] h-[32px] px-2 rounded-lg transition-colors ${
                           isActive('/bookings') ? 'bg-[#4093ff] text-white' : 'hover:bg-gray-200'
                           }`}>
                        <Image
                         src="/Booking.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <span className={`text-[16px] mt-1.5 cursor-pointer whitespace-nowrap ${
                           isActive('/bookings') ? 'text-white' : 'text-[#343434]'
                        }`}>Bookings</span>
                      </div>
                      </Link>

                      {/* Appointment */}
                      <Link href="/appointment">
                     <div className={`flex flex-row gap-2 w-[135px] h-[32px] items-center px-2 rounded-lg transition-colors ${
                        isActive('/appointment') ? 'bg-[#407BFF]' : 'hover:bg-gray-200'
                        }`}>
                        <Image
                         src="/Appointment icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         
                         />
                           <span className={`text-[16px] cursor-pointer mt-1.5 whitespace-nowrap ${
                           isActive('/appointment') ? 'text-white' : 'text-[#343434]'
                        }`}>Appointment</span> 
                      </div>
                      </Link>

                      <Link href="/result">
                      {/* Test Results */}
                      <div className={`flex flex-row gap-2 w-[130px] h-[32px] items-center px-3 rounded-lg transition-colors ${
                     isActive('/result') ? 'bg-[#407BFF]' : 'hover:bg-gray-200'
                      }`}>
                        <Image
                         src="/Test icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                          <span className={`text-[16px] cursor-pointer mt-1.5 whitespace-nowrap ${
                        isActive('/result') ? 'text-white' : 'text-[#343434]'
                     }`}>Test Result</span>
                      </div>
                      </Link>
                      
                        <Link href="/">
                       {/* Exist */}
                     <div className='flex flex-row gap-2 w-[70px] h-[32px] rounded-lg hover:bg-gray-200'>
                        <Image
                         src="/Exist icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <span className='text-[16px] text-[#D61F1F] mt-1.5'>Exist </span>
                      </div>
                      </Link>
                    </div>
            </div>
        </>
  )
}

export default TopCon