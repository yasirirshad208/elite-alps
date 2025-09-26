import React from 'react'

const FooterSubscribe = () => {
    return (
        <div className='mt-6'>
            <form>
                <div className='w-full sm:min-w-[600px] rounded-[24px] bg-white p-2 flex items-center justify-between md:gap-3 gap-2 border border-[#e3e3e3]'>

                    <input type="email" required name="email" placeholder='Enter your email' className='pl-2 w-full h-full outline-none text-[#121212] font-medium placeholder:font-medium placeholder:text-[#505050]' />

                    <button className='cursor-pointer sm:px-6 sm:py-3 py-2 px-3 bg-[#0074ec] text-white rounded-[9999px] font-medium font-[600] whitespace-nowrap'>
                        Subscribe Now
                    </button>


                </div>
            </form>
            <div className='text-[14px] text-white mt-3 text-center'>By subscribing you agree to with our Privacy Policy</div>
        </div>
    )
}

export default FooterSubscribe