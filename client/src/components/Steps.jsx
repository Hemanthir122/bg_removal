import React from 'react'
import Header from './Header'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
    <h1 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-600'>Steps to Remove Background image <br />in Seconds</h1>
    <div className='flex items-start flex-wrap gap-6 mt-16 xl:mt-24 justify-center'>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
        <img className='max-w-9 ' src={assets.upload_icon} alt="" />
        <div>
            <p className='text-xl font-medium'>Upload image</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />This is a Demo...</p>
            </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
        <img className='max-w-9 ' src={assets.remove_bg_icon} alt="" />
        <div>
            <p className='text-xl font-medium'>Remove Background</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />This is a Demo...</p>
            </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
        <img className='max-w-9 ' src={assets.download_icon} alt="" />
        <div>
            <p className='text-xl font-medium'>Dowanlode image</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />This is a Demo...</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Steps
