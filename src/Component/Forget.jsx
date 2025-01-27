import React from 'react'
export const Forget = () => {
  return (
    <>
     <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='bg-black text-center w-full max-w-md mx-4 md:mx-0 rounded-md shadow-md p-6'>
        <h2 className='font-serif py-3 text-xl md:text-2xl'>Forget Password!</h2>
        <p className='text-gray-300 py-3 font-serif px-2 tracking-wider text-sm md:text-base'>
          Enter the email you registered with in the field below.
        </p>
        <form action="">
          <div className='my-4'>
            <input 
              className='w-full h-12 outline-none rounded-sm text-black px-4 hover:scale-[1.1] ease-in duration-300 ' 
              type="email" 
              placeholder='Enter your email' 
            />
          </div>
          <div className='my-3'>
            <button 
              className='w-full md:w-32 h-12 bg-white text-black tracking-wider font-serif rounded-md shadow-lg  transition-all hover:scale-[1.1] ease-in duration-300 '>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
