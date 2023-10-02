import React from 'react'
import Header from '../components/Header'
import Vidrepo from '../sections/Vidrepo'
import Works from '../sections/Works'
import Footer from '../sections/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero-container pb-7">
        <div className='half1 space-y-6'>
          <h1 className='font-sora font-bold text-[64px] text-[#141414] leading-[64px]'>Show Them Don’t Just Tell</h1>
          <p className='leading-[28px] text-[20px]'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
         <Link to = 'Extension' className='bg-[#120B48] py-[22px] px-[24px] w-[239px] rounded-[8px] flex gap-2 items-center text-white font-work' >Install HelpMeOut <img src="/images/arrow.svg" alt="" /></Link>
        </div>
        <div className='half2'>
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-2">
              <img src="/images/woman.png" className='w-[18rem]' alt="" />
              <img src="/images/man.png" className='w-[18rem]' alt="" />
            </div>
            <img src="/images/grid.png" className='absolute w-[18rem] right-14 top-[7rem] z-0' alt="" />
            <img src="/images/lady.png" className='w-[17.3rem] relative z-10' alt="" />
          </div>
        </div>
      </div>
      <Vidrepo />
      <Works />
      <Footer />
    </div>
  )
}

export default Home