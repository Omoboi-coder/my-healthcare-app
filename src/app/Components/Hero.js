'use client'
import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
import { AnimateOnScroll } from './AnimateOnScroll'

const Hero = () => {
  return (
    <section id='hero' className='bg-white'>
        {/* flex container */}
        <div className='flex flex-col-reverse md:flex-row w-full md:w-[1350px] h-[770px] md:h-[780px] mx-auto
         mt-0 px-3 md:px-15 overflow-hidden'>
            {/* left item */}
            <div className='flex flex-col w-[395px] md:w-[637px] h-[435px] md:h-[520px] mt-12 md:mt-20 px-2 md:px-0 items-start'>
                <AnimateOnScroll direction="up" delay={0}>
                <h4 className='text-[16px] md:text-[20px] font-semibold text-[#888888]'>Introducing All New Lab Test Facility</h4>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.2}>
                <h1 className='text-[35px] md:text-[55px] font-bold text-[#151516] mt-2 leading-tight'>Discover 
                    Accurate Diagnostics & Reliable <span className='text-[#407BFF]'>Testing Services.</span></h1>
                </AnimateOnScroll>

                 {/* button */}
                 <AnimateOnScroll direction="up" delay={0.4}>
                 <div className='flex flex-row relative w-[350px] h-[48px] md:w-fit md:h-fit mt-6 md:mt-10
                  gap-5'>
                  <Link href="/bookings">
                 <button className='flex flex-row w-[199px] md:w-[216px] max-h-[48px] px-3 md:px-6 py-3 gap-3 
                 text-[16px] items-center bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600
                  transition duration-300 cursor-pointer'>Book Appointment
                    <Image
                    src='/arrow-right (1).svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                 </button>
                 </Link>
                 <Link href='#chooseus'>
                 <button className='flex flex-row w-[131px] md:w-[157px] h-[48px] px-2 md:px-6 2xl:px-5
                  py-3 gap-2 items-center border border-[#151516] md:border-blue-500 text-[#151516] rounded-lg 
                  font-bold hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Learn More
                     <Image
                    src='/arrow-right.svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                 </button>
                 </Link>
                 {/* indicators */}
                   <Image
                    src='/Arrow 15.svg'
                    alt='Arrow'
                    width={47}
                    height={29}
                    className='w-[39px] h-[29px] md:!w-[76px] md:!h-[49px] absolute bottom-[-1.5rem] 
                    md:bottom-[-3rem] left-25 md:left-29 z-10'
                    />
                    <Image
                    src='/Arrow 02.svg'
                    alt='Arrow'
                    width={67}
                    height={29}
                    className='hidden md:block md:!w-[77px] md:!h-[49px] absolute md:bottom-[-15px] md:left-[25rem] z-10'
                    />

                    <Image
                    src='/Arrow 02 (1).svg'
                    alt='Arrow'
                    width={32}
                    height={13}
                    className='flex md:hidden w-[35px] h-[40px] absolute bottom-[-20px] left-[22rem] z-10'
                    />
                    <p className=' w-[192px] h-auto md:w-[139px] md:h-[71px] text-[#151516]  text-[12px] md:text-[14px] 
                    absolute bottom-[-4rem] md:bottom-[-7.5rem] left-7 md:left-20'>
                      Stop waiting long queue Book online Appointment Now</p>
                    <p className='w-[129px] h-auto md:w-[100px] md:h-[71px] text-end md:text-start 
                    text-[#407BFF]  text-[12px] md:text-[14px] absolute 
                    bottom-[-3rem] md:bottom-[-6rem] left-[15rem] md:left-[27rem]'>
                      To learn More About ProMed Lab Click here</p>

                    {/* vectors */}
                    <Image
                    src='/Vector (9).svg'
                    alt='Vector'
                    width={24}
                    height={24}
                    className=' w-[11px] h-[11px] md:w-[24px] md:h-[24px] absolute bottom-[-2.3rem]
                     md:bottom-[-4.2rem] left-4 md:left-[3.5rem] z-10'
                    />
                    <Image  
                    src='/Vector (10).svg'
                    alt='Vector'
                    width={18}
                    height={18}
                    className='w-[9px] h-[9px] md:w-[18px] md:h-[18px] absolute bottom-[-18px] 
                    md:bottom-[-35px] left-[15.8rem]  md:left-[26rem] z-10'
                    />
                 </div>
                 </AnimateOnScroll>
            </div>
            {/* right item */}
            <AnimateOnScroll direction="right" delay={0.3}>
            <div className='w-[390px] h-[417px] md:min-w-[581px] md:h-[600px] relative'>
            <Image
            src='/Hero Image.svg'
            alt='Hero Image'
            width={581}
            height={731}
            priority
            className='flex md:justify-end object-cover w-[390px] h-[500px] 
            md:w-[581px] md:h-[731px] mt-[-2rem] md:mt-[-3rem] ml-[3px] min-[430px]:ml-[10px] md:ml-0'
            />
            {/* positioned images */}
            <Image
            src='/Ellipse 4.svg'
            alt='Ellipse'
            width={127}
            height={127}
            className='absolute bottom-8 md:bottom-1 left-[50px] w-[69px] h-[69px] md:w-[127px] md:h-[127px]'
            />

             <Image
            src='/Minimal Pattern.svg'
            alt='Minimal Pattern'
            width={169}
            height={169}
            className='absolute top-22 md:top-23 left-[20rem] md:left-[30rem] w-[82px] h-[82px] md:w-[169px] md:h-[169px]'
            />
            
            <Image
            src='/Vector (10).svg'
            alt='Vector'
            width={42}
            height={42}
            className='absolute top-17 md:top-34 left-2 md:left-3 w-[23px] h-[23px] md:w-[42px] md:h-[42px]'
            />

            <Image
            src='/Vector (11).svg'
            alt='Vector'
            width={65}
            height={65}
            className='absolute top-20 left-7 md:left-8 w-[36px] h-[36px] md:w-[62px] md:h-[62px]'
            />

            </div>
            </AnimateOnScroll>
             <Image
            src='/Frame 31.svg'
            alt='Frame'
            width={1312}
            height={138}
            className='hidden md:block w-[390px] h-[138px] md:w-[1220px] md:h-[138px] mx-auto
             absolute bottom-[-5rem] md:bottom-[-15rem] 2xl:top-[45rem]'
            />
        </div>
       
</section>
  )
}

export default Hero