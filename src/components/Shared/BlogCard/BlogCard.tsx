"use client"
import React from 'react';
import Image from 'next/image';
import CalenderIcon from '../../../../public/calendericon.svg';
import CopyIcon from '../../../../public/copyicon.svg';
import ThinArrow from '../../../../public/thinarrow.svg';
import Blog from '../../../../public/blog.png';

const BlogCard = () => {
  return (
    <div className='flex flex-col gap-4 bg-gray-100 w-72 rounded-md p-2'>
      <div><Image src={Blog} alt={''} width={300} height={300}/></div>
      <div className='flex flex-col gap-y-3'>
      <div className='flex item justify-between'>
       <div className='flex items-center space-x-2'> <Image src={CalenderIcon} alt={''} width={20} height={20}/><p className='text-black/50 font-normal'>15 Sep, 2025</p></div>
        <Image src={CopyIcon} alt={''} width={20} height={20}/></div>
        <p className='text-xl font-semibold'>10 Simple Habits for a Healthier Lifestyle</p>
        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <button className=' flex items-center space-x-2'><span className='text-primary-100 border-b border-primary-100'>Learn more</span><Image src={ThinArrow} alt={''} width={20} height={20}/></button>
      </div>
    </div>
  )
}

export default BlogCard
