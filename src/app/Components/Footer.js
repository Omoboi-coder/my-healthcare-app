import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section id='footer' className='bg-[#407BFF]'>
        {/* flex container */}
        <div className='flex flex-col w-full h-[788px] md:w-[1350px] md:h-[471px] 
        mx-auto px-0 justify-start md:justify-center relative overflow-hidden'>
            {/* inner con */}
            <div className='flex flex-col md:flex-row w-[358px] h-[631px] md:w-[1211px] md:h-[241px]
            border-t border-white mx-5 md:mx-auto mt-15 md:mt-0 gap-10 md:gap-15 z-20'>
                {/* item 1*/}
                  <div className='flex flex-col h-[200px] w-[331px] md:h-[176px]
                   gap-7 md:gap-6 text-[18px] text-white mt-7 '> 
                    <h4 className='text-[20px]'>Reach Us</h4>
                    <div className='flex flex-row w-[174px] h-[20px] md:w-[176px] 
                    md:h-[24px] space-x-6'>
                        <Image
                        src='/phone-call.svg'
                        alt='phone call icon'
                        width={24}
                        height={24}
                        />
                        <p>+9999 99 9999</p>
                    </div>
                
                        <div className='flex flex-row w-[176px] h-[22px] md:w-[185px] md:h-[24px] space-x-6'>
                        <Image
                        src='/email.svg'
                        alt='email icon'
                        width={24}
                        height={24}
                        />
                        <p>abc@gmail.com</p>
                        </div>
                
                        <div className='flex flex-row w-[208px] h-[22px] md:w-[210px] md:h-[24px] space-x-6'>
                        <Image
                        src='/location icon.svg'
                        alt='location icon'
                        width={24}
                        height={24}
                        />
                    <p>Gurgaon , Haryana</p>
                    </div>
                </div>
                {/* item 2 */}
                <div className='flex flex-row-reverse md:flex-row w-[353px] h-[250px] md:w-[431px] md:h-[211px] gap-[7rem] md:gap-[12rem] mt-0 md:mt-7'>
                    {/* company div */}
                    <div className='flex flex-col w-[96px] h-[180px] md:h-[163px] gap-6 cursor-pointer'>
                        <h4 className='text-[20px] text-white'>Company</h4>
                        <div className='flex flex-col text-[18px] text-white/80 gap-5.5 md:gap-4'>
                        <p>About</p>
                        <p>Contact Us</p>
                        <p>Events</p>
                        </div>
                    </div>

                     {/* Legal div */}
                    <div className='flex flex-col w-[143px] h-[230px] md:h-[211px] gap-6 cursor-pointer'>
                        <h4 className='text-[20px] text-white'>Legal</h4>
                        <div className='flex flex-col text-[18px] text-white/80 gap-5.5 md:gap-4 '>
                        <p>Privacy Policy</p>
                        <p>Terms & Services</p>
                        <p>Terms of Use</p>
                        <p>Refund Policy</p>
                        </div>
                    </div>
                </div>
                {/* text area */}
                <div className='flex flex-col w-[358px] h-[122px] md:w-[373px] md:h-[151px] bg-white
                 border border-white rounded-[8px] px-4 mt-0 md:mt-7 relative'>
                    <h3 className='w-fit text-[#161617] md:text-[20px] mt-2 font-semibold'>Join Our Newsletter</h3>
                    <input
                    placeholder='Your email address'
                    className='w-[343px] h-[39px] text-[14px] border border-gray-300 rounded-[6px] p-2 
                    mt-5 focus:outline-none'
                    />

                    <button className='w-[105px] h-[37px] md:w-[90px] md:h-[38px] bg-[#407BFF] text-white absolute top-[3.3rem] md:top-[3.6rem] 
                    left-[15.6rem] md:left-[16.8rem] rounded-[6px] cursor-pointer'>
                        Subcribe
                    </button>

                </div>
            </div>
                <div 
                    className="absolute top-2 md:top-5 left-0 md:left-0 
                    z-10 w-[62px] h-[50px] md:w-[93px] md:h-[74px]"
                    style={{
                    backgroundImage: "url('/Double star.svg')",
                    backgroundSize: 'contain',    
                    backgroundRepeat: 'no-repeat',   
                    backgroundPosition: 'center'
                    }}
                />
                 <div 
                    className="absolute bottom-[-11rem] md:bottom-[-8rem] left-[10rem] md:left-[47rem] 
                    z-10 w-[354px] h-[308px] md:w-[604px] md:h-[700px]"
                    style={{
                    backgroundImage: "url('/Group 1 (2).svg')",
                    backgroundSize: 'contain',    
                    backgroundRepeat: 'no-repeat',   
                    backgroundPosition: 'center'
                    }}
                />

                 {/* footer 2 */}
             <div className='flex flex-row w-full h-[42px] md:h-[48px] z-5 absolute bottom-0
            bg-[#2159D7] mx-auto text-[17px] text-white/80 justify-center items-center overflow-hidden'>
                <p>Copyright. 2025 ProMed Lab </p>
             </div>
        </div>
                   
       

    </section>
  )
}

export default Footer