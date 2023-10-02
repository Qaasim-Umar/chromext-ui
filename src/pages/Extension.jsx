import React from 'react'
import '../styles/global.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='mt-[3 rem] border-t-2'>
            <div className="hero-box border-b-2 mx-[9rem] mt-[6rem]">

<div className="flex justify-between">
                <div className="flex gap-4 items-start ">

                    <img src="/images/5.svg" alt="" />

                    <div className=" font-work flex flex-col gap-4 pb-10 ">
                        <h2 className='font-sora text-5xl font-semibold'>HelpMeOut</h2>
                        <div className='flex gap-4 text-[20px] text-[#0E75C5]'>
                            <div className="flex gap-1 "><img src="/images/verify.svg" alt="" /> <a href="" className='font-medium font-work text-[20px]'>Helpmeout.com</a></div>
                            <div className="flex gap-1 "><img src="/images/medal.svg" alt="" /> <a href="" className='font-medium font-work text-[20px]'>Featured</a></div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src="/images/star.svg" alt="" /> <img src="/images/line.svg" alt="" />
                            <p className='text-[#0E75C5] text-[18px]'> Productivity</p> <img src="/images/line.svg" alt="" />
                            <p className='text-[#606060]'>8000+ users</p>
                        </div>
                    </div>
                    </div>


                    <button className='bg-[#0E75C5] py-[12px] px-[16px] h-[3.1rem] rounded text-white'> Add to Chrome</button>
                
            </div>
            </div>

<div className="flex justify-center items-center gap-[2rem] py-[2rem]">
    <p className='e-p active'>Overview</p>
    <p className='e-p' >Privacy practices</p>
    <p className='e-p'>Review</p>
    <p className='e-p'>Related</p>
</div>

<div className="e-flex">
    <img src="/images/efooter.png" alt="" />
</div>



        </div>
    )
}

export default Home