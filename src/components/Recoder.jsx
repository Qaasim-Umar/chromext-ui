import React, { useState, useRef } from 'react';

window.Recoder = () => {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef(null);
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      videoRef.current.src = videoURL;
    };
    mediaRecorder.start();
    setRecording(true);
    // Stop recording after 10 seconds (adjust as needed)
    setTimeout(() => {
      mediaRecorder.stop();
      stream.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }, 10000);
  };
  return (
    <div className='w-[300px] rounded-[24px] record-popup space-y-5 '>
      <div className="flex justify-between ">
        <header className='flex items-center gap-2'>
          <img src="/images/5.svg" className='w-10' alt="" />
          <h1 className='font-bold'>HelpMeOut</h1>
        </header>

        <div className="flex">
          <img src="/images/setting.svg" alt="" />
          <img src="/images/close.svg" alt="" />
        </div>
      </div>
      <p className='font-work text-[14px] text-[#413C6D]'>This extension helps you record and share help videos with ease.</p>
      <div className="flex justify-center space-x-6">
        <img src="/images/fullscreen.svg" alt="" />
        <img src="/images/current.svg" alt="" />
      </div>
      <div className="record-buttons">
        <div className="flex gap-3">
          <img src="/images/videocamera.svg" alt="" />
          <p>Camera</p>
        </div>
      </div>
      <div className="record-buttons">
        <div className="flex gap-3">
          <img src="/images/microphone.svg" alt="" />
          <p>Audio</p>
        </div>
      </div>
      <button onClick={startRecording} disabled={recording} className='bg-[#120B48] w-[252px] p-[16px] rounded-[10px] text-[#FAFDFF] font-work'>
        {recording ? 'Recording...' : 'Start Recording'}
      </button>
      {/* <video ref={videoRef} controls /> */}
    </div>
  )
}
export default Recoder