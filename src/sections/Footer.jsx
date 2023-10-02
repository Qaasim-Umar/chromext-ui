import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#120B48] text-white'> 

<div className="grid grid-cols-4 items-start p-[8rem]">

    <div className='flex items-center gap-2'><img src="/images/logowhite.svg" className='w-10' alt="" /> <h1 className='font-bold'>HelpMeOut</h1> </div>
    <div className='space-y-3'>
        <h1 className='font-sora font-semibold text-[16px] '>Menu</h1>
        <p className='font-work'>Home</p>
        <p className='font-work'>Converter</p>
        <p className='font-work'>How it Works</p>
    </div>
    <div className='space-y-3'>
    <h1 className='font-sora font-semibold text-[16px] '>About us</h1>
        <p className='font-work'>About</p>
        <p className='font-work'>Contact Us</p>
        <p className='font-work'>Privacy Policy</p>
    </div>
    <div className='space-y-3'>
    <h1 className='font-sora font-semibold text-[16px] '>Scren Record</h1>
        <p className='font-work'>Browser Window</p>
        <p className='font-work'>Desktop</p>
        <p className='font-work'>Application</p>
    </div>
</div>




    </div>
  )
}

export default Footer