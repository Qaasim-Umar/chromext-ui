import React from 'react'
import '../styles/global.css'

const Sign = () => {
  return (
    <div>
        <header className='flex items-center gap-2'>    
        <img src="/images/5.svg" className='w-10' alt="" />
        <h1 className='font-bold'>HelpMeOut</h1> 
        </header>
<div className='w-[321px] m-auto text-center space-y-3'>
<h1 className='font-inter font-bold text-[32px] text-[#141414] '>Log in or Sign up</h1>
<p className='text-[#434343] font-inter font-light pb-4 text-[14px]'>Join millions of others in sharing successful moves on HelpMeOut.</p>
    </div>

<div className=' m-auto google-sign flex justify-center items-center mb-5 gap-2'>
    <img src="/images/google.svg" alt="" />
    <p>Continue with Google</p>
</div>
<div className=' m-auto google-sign flex justify-center items-center gap-2'>
    <img src="/images/facebook.svg" alt="" />
    <p>Continue with Facebook</p>
</div>
<img src="/images/or.png" className='m-auto my-6' alt="" />

<form action="" className='flex flex-col justify-center items-center '>
<p className='font-work font-medium text-[14px] text-[#141414]'><label htmlFor="Email">Email</label></p>

<input type="text" name='email' className='sign-email' placeholder='Enter your email address' />
 
<p  className='font-work font-medium text-[14px] text-[#141414]'><label htmlFor="Password">Password</label></p>
<input type="text" name='password' className='sign-email' placeholder='Enter your password' />

<button className='sign-submit'>Sign in</button>
</form>
    </div>
  )
}

export default Sign