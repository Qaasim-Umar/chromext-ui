import React from 'react'
import '../styles/global.css'
import Header from '../components/Header'

const Video = () => {
  return (
    <div>
      <Header />
      <div className="video-hero">
        <div className="first half">
          <h1>Your video is ready!</h1>
          <p>Name</p>
          <div className="flex gap-2">
            <p> untilte jdbksds kjkd </p>
            <img src="/images/edit.svg" alt="" />
          </div>
          <input type="text" placeholder='enter email of receiver' className='relative' />
          <button className='absolute'>Send</button>
          <p>Video Url </p>
          <input type="text" readOnly placeholder='https://www.helpmeout/Untitled_Video_20232509' className='input' />
          <button className='absolute'> <img src="/images/copy.svg" alt="" /> <p>copy</p></button>
          <p>Share your video</p>
          <div className="flex gap-2">
            <p className='socials flex items-center'><img src="/images/facebook.svg" alt="" />facebook</p>
            <p className='socials flex items-center'><img src="/images/whatsapp.svg" alt="" />facebook</p>
            <p className='socials flex items-center'><img src="/images/telegram.svg" alt="" />facebook</p>
          </div>
        </div>
        <div className="second half">
        </div>
      </div>
    </div>
  )
}

export default Video