import React from 'react'

const Vidrepo = () => {
  return (
    <div className='bg-[#eae7ff] py-10 '>


<div className="featured bg-white pb-12">
    <div className=" text-center ">
    <h1 className=' text-[#141414] font-sora text-[40px] font-bold pt-8 '>Features</h1>
<p className=' text-[#616163] font-work text-[20px]'>Key Highlights of Our Extension</p>
</div>




<div className="vidrepo-container ">

<div className="vidrepo-half space-y-5">
<div className="flex items-start pl-16 gap-3" >
    <img src="/images/icon1.svg" className='mt-2  w-[2.6rem]' alt="" />
    <div>
        <h1 className='font-semibold  text-[28px] font-inter text-[#1B233D]'> Simple Screen Recording </h1>
        <p className='font-work text-[20px] text-[#616163]'> Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
    </div>
</div>
<div className="flex items-start pl-16 gap-3" >
    <img src="/images/icon2.svg" className='mt-2  w-[2.6rem]' alt="" />
    <div>
        <h1 className='font-semibold text-[28px] font-inter text-[#1B233D]'> Easy-to-Share URL</h1>
        <p className='font-work text-[20px] text-[#616163]'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
    </div>
</div><div className="flex items-start pl-16 gap-3" >
    <img src="/images/icon3.svg" className='mt-2  w-[2.6rem]' alt="" />
    <div>
        <h1 className='font-semibold text-[28px] font-inter text-[#1B233D]'>Revisit Recordings</h1>
        <p className='font-work text-[20px] text-[#616163]'> Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
    </div>
</div>
</div>
<div className="vidrepo-half pr-10">
<img src="/images/vidrepo.png"  alt="" />
</div>

</div>
</div>

    </div>
  )
}

export default Vidrepo