import React from 'react'

const header = () => {
  return (
    <div>
          <div className="flex justify-between p-10">

<div className="flex items-center gap-1">
  <img src="/images/5.svg" className='h-9' alt="" />
  <p className='font-bold text-[#100A42]'>HelpMeOut</p>
</div>

<div className="flex gap-5">
  <p className='font-work font-medium'>Features</p>
  <p className='font-work font-medium'>How it works </p>
</div>


<p className='font-sora text-[18px] font-semibold text-[#120B48]'>Get Started</p>


</div>
    </div>
  )
}

export default header