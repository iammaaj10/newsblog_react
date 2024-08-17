import React from 'react'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center mt-6'>
        <div className='w-5xl h-full p-3 m-3 border rounded-md bg-slate-100 border-white shadow-md'>
            <div className='p-3 flex flex-col gap-4 '>
                <div className='text-center'>
                <h1 className='text-black font-bold font-poppins text-2xl'>Sign Up Option</h1>
                </div>
                <input type="text" placeholder='Enter the username' className='text-black bg-slate-300 p-3 rounded-md'/>
                <input type="text" placeholder='Enter the email' className='text-black bg-slate-300 p-3 rounded-md'/>
                <input type="number" placeholder='Enter the phoneno' className='text-black bg-slate-300 p-3 rounded-md'/>
                <input type="password" placeholder='Enter the password' className='text-black bg-slate-300 p-3 rounded-md'/>
                <input type="password" placeholder='confirm the password' className='text-black bg-slate-300 p-3 rounded-md' />
            </div>
            <div className='text-center'>
                <button className='bg-blue-700 rounded-3xl p-3 text-semibold text-white '>Sign Up </button>
            </div>
        </div>
    </div>
  )
}

export default SignUp