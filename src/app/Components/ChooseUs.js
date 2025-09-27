import React from 'react'
import Image from 'next/image'

const ChooseUs = () => {
  return (
    <section id='package' className='bg-[#F5F8FF]'>
        {/* flex container */}
        <div className='flex flex-col w-full h-[2189px] md:w-[1350px] md:h-[937px] mx-auto px-7
         md:px-15 relative overflow-hidden '>
             <div className='flex flex-col w-[250px] h-[110px] md:w-[333px] md:h-[150px]
              space-y-8 mx-auto mt-0 md:mt-5'>
            {/* heading */}
                <Image  
                src='/Vector (12).svg'
                alt='Vector'
                width={50}
                height={50}
                className='w-[29px] h-[29px] md:w-[50px] md:h-[50px] mx-auto'
                />
                <h2 className='text-[32px] md:text-[42px] text-[#151516]'>Why Choose Us?</h2>
                </div>

                {/* Features con */}
                <div className='grid grid-cols-1 md:grid-cols-3 w-full h-[2109px] md:w-[1048px] md:h-[692px] mx-auto mt-6 md:mt-10
                 gap-4 md:space-y-3 md:gap-12 z-20'>
                    {/* grid 1 */}
                    <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0 bg-white rounded-[10px] 
                    border border-gray-200'>
                        <Image
                        src='/Star.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[188px] h-[150px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>5 Star Rating</h3>
                            <p className='text-[16px] text-center text-[#666363]'>We have a 5-star rating on Google, so you can be sure that you&apos;re getting the best possible service.</p>

                        </div>

                    </div>
                        {/* grid 2 */}
                     <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0
                      bg-white rounded-[10px] border border-gray-200'>
                        <Image
                        src='/Call icon 1.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[210px] h-[150px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>Report In 12 Hours</h3>
                            <p className='text-[16px] text-center text-[#666363]'>We will provide you with a test report in just 12 hours, so you can get the results you need quickly.</p>

                        </div>

                    </div>
                        {/* grid 3 */}
                     <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0
                      bg-white rounded-[10px] border border-gray-200'>
                        <Image
                        src='/microscope.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[220px] h-[120px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>Modern Machines</h3>
                            <p className='text-[16px] text-center text-[#666363]'>Our lab is equipped with the latest and most modern lab machines</p>

                        </div>

                    </div>
                        {/* grid 4 */}
                     <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0
                      bg-white rounded-[10px] border border-gray-200'>
                        <Image
                        src='/Call icon 2.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[188px] h-[120px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>Open 24/7</h3>
                            <p className='text-[16px] text-center text-[#666363]'>We are open 24/7, so you can get your tests done whenever you need them.</p>

                        </div>

                    </div>
                        {/* grid 5 */}
                     <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0
                      bg-white rounded-[10px] border border-gray-200'>
                        <Image
                        src='/Wallet.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[188px] h-[150px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>Pocket Friendly</h3>
                            <p className='text-[16px] text-center text-[#666363]'>We are also pocket-friendly, so you can get the best value for your money.</p>

                        </div>
                    </div>
                        {/* grid 6 */}
                     <div className='flex flex-col w-full md:w-[316px] h-[316px] gap-8 items-center mx-auto md:mx-0
                      bg-white rounded-[10px] border border-gray-200'>
                        <Image
                        src='/Doctor icon.svg'
                        alt='star'
                        width={80}
                        height={80}
                        className='w-[80px] h-[80px] mt-10'
                        />
                        {/* item 2 */}
                        <div className='flex flex-col w-[218px] h-[150px] gap-2'>
                            <h3 className='text-[24px] text-[#151516] text-center'>Certified Doctors</h3>
                            <p className='text-[16px] text-center text-[#666363]'>Our lab is staffed by certified doctors and technicians who use the latest and most modern lab machines</p>

                        </div>
                    </div>
                </div>
                 {/* Background overlays remain the same */}
                    <div 
                        className="absolute bottom-[40rem] md:bottom-[10rem] left-[-5rem] md:left-[65rem] 
                        z-0 opacity-100 w-[214px] h-[214px] md:w-[377px] md:h-[408px] rotate-180 md:rotate-0"
                        style={{
                        backgroundImage: "url('/Minimal Pattern Large.svg')",
                        backgroundSize: 'contain',    
                        backgroundRepeat: 'no-repeat',   
                        backgroundPosition: 'center'
                        }}
                    />

                     <div 
                        className="flex md:hidden absolute top-[46rem] left-[17rem]
                        z-0 opacity-100 w-[214px] h-[214px] "
                        style={{
                        backgroundImage: "url('/Minimal Pattern Large.svg')",
                        backgroundSize: 'contain',    
                        backgroundRepeat: 'no-repeat',   
                        backgroundPosition: 'center'
                        }}
                    />

                    
         </div>
    </section>
  )
}

export default ChooseUs