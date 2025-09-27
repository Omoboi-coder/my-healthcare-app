import React from 'react'
import Image from 'next/image'

const Package = () => {
  return (
    <section id='package' className='bg-[#F5F8FF]'>
        {/* flex container */}
        <div className='flex flex-col w-full h-[1655px] md:w-[1350px] md:h-[832px] mx-auto px-5 min-[430px]:px-7 
        min-[414px]:px-5 md:px-15 relative overflow-visible md:overflow-hidden '>

            <div className='flex flex-col w-[215px] h-[110px] md:w-[291px] md:h-[80px] space-y-8 mx-auto mt-5'>
            {/* heading */}
             <Image  
               src='/Vector (10).svg'
               alt='Vector'
               width={50}
               height={50}
               className='w-[29px] h-[29px] md:w-[50px] md:h-[50px] mx-auto '
            />
            <h2 className='text-[32px] md:text-[42px] text-[#151516]' >Test Packages</h2>
            </div>
            {/* Cards container */}
            <div className='flex flex-col md:flex-row w-full h-[1655px] md:w-[1217px] md:h-[484px]
             gap-[30px] md:gap-[50px] mt-10 md:mt-30 z-20'>
                
                {/* card 1 */}
                 <div className='flex flex-col w-[372px] h-[443px] bg-white border
                  border-gray-200 mt-0 md:mt-10 gap-5 rounded-[12px] px-5 relative'>
                {/* Tag */}
             <Image  
               src='/Tag.svg'
               alt='Red Tag'
               width={92}
               height={34}
               className='w-[86px] h-[34px] md:w-[92px] md:h-[34px] absolute left-[-10px] top-5'
              />
              {/* item 1 */}
              <div className='flex flex-row w-[174px] h-[31px] gap-4 ml-[10rem] mt-5'>
                <p className='text-[#666363] text-[24px] line-through'>$ 1999</p>
                <p className='text-[#407BFF] text-[26px]'>$ 1499</p>
                
              </div>
              <div className='w-[310px] h-[82px] font-semibold space-y-2 '>
                <h3 className='text-[19px]'>Full Body Checkup- Essential</h3>
                <p className='text-[14px] text-[#666363]'>8 Tests - Complete Blood Count With ESR, 
                    Liver Test, Blood - Sugar & 5 Others.</p>

              </div>
              <span className=' w-[336px] h-0 border border-gray-200 mx-auto'></span>
                <div className=' flex flex-col w-[215px] h-[140px] text-[16px] gap-8'>
                    <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>No Fasting Required</p>
                    </div>

                     <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Report in 48 Hours</p>
                    </div>

                     <div className='flex flex-row w-[215px] h-auto gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Online & Physical Report</p>
                    </div>
                </div>
                <button className='flex flex-row w-[247px] h-[48px] mt-2 mx-auto px-2 md:px-4 2xl:px-5
                     py-3 gap-25 border border-blue-500 text-[#151516] rounded-lg 
                    font-bold hover:bg-blue-500 hover:text-white
                     transition duration-300 cursor-pointer'>Know More
                    <Image
                    src='/arrow-right.svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                    </button>
                 </div>
                {/* card 2*/}
                 <div className='flex flex-col w-[372px] h-[484px] bg-white border border-gray-200 
                  gap-5 rounded-[12px] relative'>
                    <div className='flex flex-row w-[372px] min-h-[48px] bg-[#407BFF] text-white
                    text-[20px] justify-center items-center rounded-[8px] relative'>
                        <p>RECOMMENDED</p>
                     <Image
                    src='/Vector (13).svg'
                    alt='star'
                    width={15}
                    height={15}
                    className='w-[15px] h-[15px] absolute left-[16.5rem] bottom-7'
                    />
                    </div>
                {/* Tag */}
             <Image  
               src='/Tag.svg'
               alt='Red Tag'
               width={92}
               height={34}
               className='w-[86px] h-[34px] md:w-[92px] md:h-[34px] absolute left-[-10px] top-15'/>
              
              <div className='flex flex-col mt-0 md:mt-[-8px] gap-5 px-5'>
              {/* item 1 */}
              <div className='flex flex-row w-[174px] h-[31px] gap-4 ml-[10rem]'>
                <p className='text-[#666363] text-[24px] line-through'>$ 2999</p>
                <p className='text-[#407BFF] text-[26px]'>$ 2499</p>
                
              </div>
              <div className='w-[340px] h-[82px] font-semibold space-y-2 '>
                <h3 className='w-[340px] text-[19px]'>Full Body Checkup - Comprehensive</h3>
                <p className='w-[310px] text-[14px] text-[#666363]'>28 Tests - Complete Blood Count With ESR, Liver Test , Blood - Sugar & 25 Others.</p>

              </div>
              <span className=' w-[336px] h-0 border border-gray-200 mx-auto'></span>
                <div className=' flex flex-col w-[215px] h-[140px] text-[16px] gap-8'>
                    <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>No Fasting Required</p>
                    </div>

                     <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Report in 12 Hours</p>
                    </div>

                     <div className='flex flex-row w-[215px] h-auto gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Online & Physical Report</p>
                    </div>
                </div>
                <button className='flex flex-row w-[247px] h-[48px] mt-2 mx-auto px-2 md:px-4 2xl:px-5
                     py-3 gap-25 border border-transparent bg-[#407BFF] text-white rounded-lg  hover:border-blue-500
                      font-bold hover:bg-white hover:text-black 
                     transition duration-300 cursor-pointer'>Know More  
                    <Image
                    src='/arrow-right (1).svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                    </button>
                    </div>
                 </div>

                {/* card 3 */}
                 <div className='flex flex-col w-[372px] h-[443px] bg-white border
                  border-gray-200 mt-0 md:mt-10 gap-5 rounded-[12px] px-5 relative'>
                    {/* Tag */}
             <Image  
               src='/Tag.svg'
               alt='Red Tag'
               width={92}
               height={34}
               className='w-[86px] h-[34px] md:w-[92px] md:h-[34px] absolute left-[-10px] top-5'
              />
              {/* item 1 */}
              <div className='flex flex-row w-[174px] h-[31px] gap-4 ml-[10rem] mt-5'>
                <p className='text-[#666363] text-[24px] line-through'>$ 4999</p>
                <p className='text-[#407BFF] text-[26px]'>$ 3499</p>
                
              </div>
              <div className='w-[310px] h-[82px] font-semibold space-y-2 '>
                <h3 className='text-[19px]'>Full Body Checkup - Advanced</h3>
                <p className='text-[14px] text-[#666363]'>8 Tests - Complete Blood Count With ESR, 
                  Liver Test, Blood - Sugar & 5 Others.</p>

              </div>
              <span className=' w-[336px] h-0 border border-gray-200 mx-auto'></span>
                <div className=' flex flex-col w-[215px] h-[140px] text-[16px] gap-8'>
                    <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>No Fasting Required</p>
                    </div>

                     <div className='flex flex-row gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Report in 24 Hours</p>
                    </div>

                     <div className='flex flex-row w-[215px] h-auto gap-2'>
                    <Image
                    src='/Icon.svg'
                    alt='mark icon'
                    width={24}
                    height={24}
                    />
                    <p>Online & Physical Report</p>
                    </div>
                </div>
                <button className='flex flex-row w-[247px] h-[48px] mt-2 mx-auto px-2 md:px-4 2xl:px-5
                     py-3 gap-25 border border-blue-500 text-[#151516] rounded-lg
                    font-bold hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Know More
                    <Image
                    src='/arrow-right.svg'
                    alt='Arrow Right'
                    width={12}
                    height={12}
                    />
                    </button>
                 </div>

            </div>
              {/* Background overlays remain the same */}
                <div 
                className="absolute bottom-[-5rem] md:bottom-0 left-[-5rem] md:left-[-6rem] 2xl:left-[]
                z-0 opacity-100 w-[253px] h-[253px] md:w-[308px] md:h-[308px]"
                style={{
                backgroundImage: "url('/Clip path.svg')",
                backgroundSize: 'contain',    
                backgroundRepeat: 'no-repeat',   
                backgroundPosition: 'center'
                }}
                />
        </div>

    </section>
  )
}

export default Package