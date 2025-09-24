import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='hero' className='bg-white'>
        {/* flex container */}
        <div className='flex flex-col-reverse md:flex-row w-[390px] md:w-[1350px] h-auto md:h-[820px] mx-auto
         mt-0 px-0 md:px-15'>
            {/* left item */}
            <div className='flex flex-col w-[360px] md:w-[637px] h-[123px] md:h-[520px] mt-4 md:mt-20 items-start'>
                <h4 className='text-[12px] md:text-[20px] font-semibold text-[#888888]'>Introducing All New Lab Test Facility</h4>
                <h1 className='text-[27px] md:text-[55px] font-bold text-[#151516] mt-2 leading-tight'>Discover Accurate Diagnostics & Reliable <span className='text-[#407BFF]'>Testing Services.</span></h1>
                 {/* button */}
                 <div className='flex flex-row relative w-[350px] h-[101px] md:w-fit md:h-fit mt-6 md:mt-10 gap-3 md:gap-5'>
                 <button className='flex flex-row w-[179px] md:w-[216px] h-[48px] px-3 md:px-6 py-3 gap-3 text-[14px] md:text-[16px] bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-300 cursor-pointer'>Book Appointment
                    <Image
                    src='/arrow-right (1).svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                 </button>
                 <button className='flex flex-row w-[131px] md:w-[157px] h-[48px] px-2 md:px-6 2xl:px-5 py-3 gap-2 border border-[#151516] md:border-blue-500 text-[#151516] rounded-lg font-bold hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Learn More
                     <Image
                    src='/arrow-right.svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                 </button>
                 {/* indicators */}
                   <Image
                    src='/Arrow 15.svg'
                    alt='Arrow'
                    width={47}
                    height={29}
                    className='absolute md:bottom-[-3.5rem] md:left-32 z-10'
                    />
                    <Image
                    src='/Arrow 02.svg'
                    alt='Arrow'
                    width={67}
                    height={29}
                    className='absolute md:bottom-[-15px] md:left-[25rem] z-10'
                    />
                    <p className=' w-[192px] md:w-[139px] h-[71px] text-[#151516]  text-[12px] md:text-[14px] absolute bottom-[-6rem] md:bottom-[-8rem] left-1 md:left-20'>Stop waiting long queue Book online Appointment Now</p>
                    <p className='w-[149px] md:w-[120px] h-[71px] text-[#407BFF] text-[14px] absolute bottom-[-6rem] md:bottom-[-6rem] left-[14rem] md:left-[27rem]'>To learn More About ProMed Lab Click here</p>

                    {/* vectors */}
                    <Image
                    src='/Vector (9).svg'
                    alt='Vector'
                    width={24}
                    height={24}
                    className='absolute md:bottom-[-4.5rem] md:left-[3.5rem] z-10'
                    />
                    <Image  
                    src='/Vector (10).svg'
                    alt='Vector'
                    width={18}
                    height={18}
                    className='absolute md:bottom-[-35px] md:right-[-2.5rem] z-10'
                    />
                 </div>
            </div>
            {/* right item */}
            <div className='w-[318px] h-[317px] md:min-w-[581px] md:h-[600px] relative'>
            <Image
            src='/Hero Image.svg'
            alt='Hero Image'
            width={881}
            height={881}
            className='flex justify-center md:justify-end object-cover w-[318px] h-[317px] md:w-[581px] md:h-[731px] mt-5 md:mt-[-3rem] '
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
            className='absolute top-20 md:top-23 left-[15rem] md:left-[30rem] w-[72px] h-[72px] md:w-[169px] md:h-[169px]'
            />
            
            <Image
            src='/Vector (10).svg'
            alt='Vector'
            width={42}
            height={42}
            className='absolute top-17 md:top-23 left-5 md:left-3 w-[23px] h-[23px] md:w-[42px] md:h-[42px]'
            />

            <Image
            src='/Vector (11).svg'
            alt='Vector'
            width={65}
            height={65}
            className='absolute top-10 left-10 w-[36px] h-[36px] md:w-[62px] md:h-[62px]'
            />

            </div>
             <Image
            src='/Frame 31.svg'
            alt='Frame'
            width={1220}
            height={138}
            className='w-[358px] h-[110px] md:w-[1312px] md:h-[138px] mx-auto absolute bottom-[-2rem] md:bottom-[-15rem] 2xl:top-[46rem]'
            />
        </div>
       
</section>
  )
}

export default Hero