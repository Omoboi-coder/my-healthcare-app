import React from 'react'
import Image from 'next/image'

const GetInTouch = () => {
  return (
 <section id='getintouch' className='bg-[#F5F8FF]'>
        {/* flex container */}
    <div className='flex flex-col w-full h-[1209px] md:w-[1350px] md:h-[950px] 
    mx-auto px-5 md:px-15 relative overflow-hidden'>
        {/* heading */} 
         <div className='flex flex-col w-[215px] h-[150px] md:w-[398px] md:h-[80px]
          space-y-5 md:space-y-8 mx-auto mt-0 md:mt-0'>
            <Image  
            src='/Vector (10).svg'
            alt='Vector'
            width={50}
            height={50}
            className='w-[29px] h-[29px] md:w-[50px] md:h-[50px] mx-auto'
            />
            <h2 className='text-[32px] md:text-[42px] text-center md:text-start text-[#151516]'>Get In Touch With Us</h2>
            </div>
            {/* contact information div */}
            <div className='flex flex-col md:flex-row w-[358px] min-h-[995px] md:w-[1196px]
             md:min-h-[667px] rounded-[8px]
              mx-auto mt-5 md:mt-25 p-0 md:p-2 gap-6 md:gap-10 bg-white border border-gray-200 z-20 '>
                {/* left item */}
                <div className='flex flex-col w-[334px] h-[215px] md:w-[491px] mx-auto md:mx-0 
                md:h-[647px] px-6 md:px-10 mt-3 md:mt-0 bg-[#407BFF] gap-4 
                md:gap-15 rounded-[8px] relative overflow-hidden'>
                    <h3 className='w-fit text-white text-[24px] md:text-[28px] font-semibold mt-2 md:mt-6'>
                        Contact Information
                    </h3>
                    <div className='flex flex-col w-[185px] h-[109px] md:w-[188px] md:h-[170px]
                     gap-5 md:gap-12 text-[16px] md:text-[17px] text-white/80'>
                        <div className='flex flex-row w-[158px] h-[20px] md:w-[161px] 
                        md:h-[24px] space-x-3 md:space-x-4'>
                          <Image
                          src='/phone-call.svg'
                          alt='phone call icon'
                          width={24}
                          height={24}
                          />
                          <p>+9999 99 9999</p>
                        </div>

                         <div className='flex flex-row w-[146px] h-[20px] md:w-[170px] md:h-[24px] space-x-3 md:space-x-4'>
                          <Image
                          src='/email.svg'
                          alt='email icon'
                          width={24}
                          height={24}
                          />
                          <p>abc@gmail.com</p>
                          </div>

                          <div className='flex flex-row w-[180px] h-[20px] md:w-[188px] md:h-[24px] space-x-3 md:space-x-4'>
                          <Image
                          src='/location icon.svg'
                          alt='location icon'
                          width={24}
                          height={24}
                          />
                        <p>Gurgaon , Haryana</p>
                        </div>
                    </div>
                    {/* social media */}
                    <div className='flex flex-row w-[120px] h-auto space-x-5 mt-0 md:mt-[14rem]
                     ml-[11.5rem] md:ml-0 z-50'>
                        <Image
                          src='/twitter.svg'
                          alt='twitter icon'
                          width={30}
                          height={30}
                          className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]'
                          />

                          <Image
                          src='/instagram.svg'
                          alt='instagram icon'
                          width={30}
                          height={30}
                          className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]'
                          />

                          <Image
                          src='/discord.svg'
                          alt='discord icon'
                          width={30}
                          height={30}
                          className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]'
                          />

                    </div>
                    {/* background */}
                     <div 
                        className="absolute bottom-[-7rem] md:bottom-[-6rem] left-[5rem] md:left-0 
                        z-10 w-[254px] h-[308px] md:w-[504px] md:h-[600px]"
                        style={{
                        backgroundImage: "url('/Group 1 (1).svg')",
                        backgroundSize: 'contain',    
                        backgroundRepeat: 'no-repeat',   
                        backgroundPosition: 'center'
                        }}
                    />
                </div>
                  {/* right item */}
                  <div className='flex flex-col w-[282px] h-[700px] md:w-[618px] md:h-[484px] mt-0
                   md:mt-20 mx-auto md:mx-0'>
                    {/* con 1 */}
                    <div className='grid grid-cols-1 md:grid-cols-2 w-[282px] h-[422px] md:w-[616px] md:h-[160px]
                     text-[#151516] gap-0 md:gap-4 '>
                      {/* item 1 */}
                      <div className='flex flex-col w-[282px] h-[75px] space-y-2 text-[16px]'>
                        <h4>First Name</h4>
                        <input
                        type='text'
                        placeholder='kenny'
                        className='w-[282pxpx] h-[40px] p-2 text-[#666363] border border-gray-500 rounded-[8px] focus:outline-none'
                        />
                        </div>

                         {/* item 2 */}
                      <div className='flex flex-col w-[282px]h-[75px] space-y-2 text-[16px] ml-0 md:ml-6'>
                        <h4>Last Name</h4>
                        <input
                        type='text'
                        placeholder='Omor'
                        className='w-[282px] h-[40px] p-2 text-[#666363] border border-gray-500 rounded-[8px] focus:outline-none'
                        />
                        </div>

                        
                         {/* item 3 */}
                      <div className='flex flex-col w-[282px] h-[75px] space-y-2 text-[16px]'>
                        <h4>Email</h4>
                        <input
                        type='email'
                        placeholder='abc@gmail.com'
                        className='w-[282px] h-[40px] p-2 text-[#666363] border border-gray-500 rounded-[8px] focus:outline-none'
                        />
                        </div>
                         {/* item 4 */}
                      <div className='flex flex-col w-[282px] h-[75px] space-y-3 md:space-y-2 text-[16px] ml-0 md:ml-6'>
                        <h4>Phone Number</h4>
                        <input
                        type='text'
                        placeholder='+91 9999 99 9999'
                        className='w-[282px] h-[40px] p-2 text-[#666363] border border-gray-500 rounded-[8px] focus:outline-none'
                        />
                        </div>
                    </div>
                      {/* con 2 */}
                      <div className='flex flex-col w-[283px] h-[98px] md:w-[618px] md:h-[68px] mt-0 md:mt-6 gap-5'>
                        <h4 className=' w-fit font-semibold text-[16px] text-[#011C2A]'>Select Subject?</h4>
                        {/* inner con */}
                        <div className='flex flex-wrap md:flex-row w-[283px] h-[60px] md:w-[618px] md:h-[20px] gap-2 md:gap-11'>
                          {/* item 1 */}
                          <div className='flex flex-row w-[139px] gap-2 text-[16px] text-[#011C2A]'>
                          <Image
                          src='/blue tick.svg'
                          alt='blue tick'
                          width={18}
                          height={18}
                          />
                          <p>General Inquiry</p>
                          </div>

                          {/* item 2 */}
                          <div className='flex flex-row w-[131px] h-[20px] gap-2 text-[16px] text-[#011C2A]'>
                          <Image
                          src='/gray tick.svg'
                          alt='gray tick'
                          width={18}
                          height={18}
                          />
                          <p>Test Packages</p>
                          </div>

                          {/* item 3 */}
                          <div className='flex flex-row w-[139px] h-[20px] gap-2 text-[16px] text-[#011C2A]'>
                          <Image
                          src='/gray tick.svg'
                          alt='gray tick'
                          width={18}
                          height={18}
                          />
                          <p>Help & Support</p>
                          </div>

                          {/* item 4 */}
                          <div className='flex flex-row w-[74px] h-[20px] gap-2 text-[16px] text-[#011C2A]'>
                          <Image
                          src='/gray tick.svg'
                          alt='gray tick'
                          width={18}
                          height={18}
                          />
                          <p>Report </p>
                          </div>

                        </div>
                      </div>
                      {/* con 3 */}
                      <div className='flex flex-col w-[282px] h-[120px] md:w-[615px] md:h-[120px] mt-6 md:mt-10 gap-4 md:gap-2'>
                        <h4 className='font-semibold text-[16px] text-[#151516]'>Message</h4>
                        <textarea
                        placeholder='Write your message..'
                        className='w-full h-[90px] p-2 placeholder:text-[#666363] text-[#666363] border border-gray-500 rounded-[8px] focus:outline-none'
                        />
                      </div>
                      <button className='w-[199px] min-h-[48px] bg-[#407BFF] rounded-[8px] cursor-pointer text-white mx-auto py-3 mt-4 md:mt-6'>
                        Send Message
                      </button>
                  </div>
            </div>
            {/* background image */}
            <div 
            className='absolute top-[8rem] left-[-30px] md:top-[6rem] md:left-[-18px]
            z-0 opacity-100 w-[121px] h-[121px] md:w-[191px] md:h-[191px]'
            style=
            {{
              backgroundImage:"url('/Minimal Pattern.svg')",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center',
            }}
            />

             <div 
            className='absolute top-[68rem] left-[20rem] md:top-[47rem] md:left-[72.5rem]
            z-0 opacity-100 w-[121px] h-[121px] md:w-[191px] md:h-[191px]'
            style=
            {{
              backgroundImage:"url('/Ring Ellipse.svg')",
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center',
            }}
            />


    </div>
    </section>
  )
}

export default GetInTouch