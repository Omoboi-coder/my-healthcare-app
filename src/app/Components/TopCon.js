import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopCon = () => {
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
                  <div className='flex flex-row w-[550px] h-auto mt-5 p-[4px] space-x-5'>
                      {/* Home */}
                         <div className='flex flex-row gap-2 w-[70px] h-[32px]'>
                        <Image
                         src="/Home icon.svg"
                         alt="Home Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/home" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Home</Link>
                      </div>
                      {/* Booking */}
                         <div className='flex flex-row gap-2 w-[100px] h-[32px]'>
                        <Image
                         src="/Appointment icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/bookings" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Bookings</Link>
                      </div>

                      {/* Appointment */}
                      <div className='flex flex-row gap-3 w-[120px] h-[32px]'>
                        <Image
                         src="/Appointment icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         
                         />
                         <Link href="/appointment" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Appointment</Link>
                      </div>
                      {/* Test Results */}
                      <div className='flex flex-row gap-2 w-[110px] h-[32px]'>
                        <Image
                         src="/Test icon.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/result" className='text-[16px] text-[#343434] mt-1.5 cursor-pointer'>Test Result</Link>
                      </div>
                       {/* Exist */}
                     <div className='flex flex-row gap-2 w-[70px] h-[32px] ml-1'>
                        <Image
                         src="/Logout.svg"
                         alt="Logo"
                         width={19}
                         height={19}
                         />
                         <Link href="/" className='text-[16px] text-[#D61F1F] mt-1.5'>Exist</Link>
                      </div>
                    </div>
            </div>
        </>
  )
}

export default TopCon