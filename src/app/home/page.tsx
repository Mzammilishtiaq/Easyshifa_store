import React from 'react'
import Productlist from './Productlist'
import HeroSection from '@/components/Shared/HeroSection/HeroSection'
import Image from 'next/image'
import Product1 from '../../../public/person.png';
import personVector3 from '../../../public/personVector 3.png';
import personVector from '../../../public/personVector.png';
import personVector1 from '../../../public/personVector-1.png';
import bottle from '../../../public/bottle.svg';
import delivery from '../../../public/delivery.svg';
import payment from '../../../public/payment.svg';
import headphones from '../../../public/headphone.svg';
import ThinArrow from '../../../public/thinarrow.svg';
import BlogCard from '@/components/Shared/BlogCard/BlogCard';

const page = () => {
  return (
    <div className="w-full flex flex-col space-y-10">
      <HeroSection />
      <Productlist />

      <div className='flex items-start justify-center space-x-4'>
        <div className='w-[30rem] h-[30rem] bg-primary-100 rounded-md relative p-4'>
          <h1 className='text-white text-4xl font-semibold'>Why Choose Us?</h1>
          <Image src={personVector3.src} alt='product1' width={500} height={200} className='absolute top-0 right-0 z-1' />
          <Image src={personVector.src} alt='product1' width={50} height={50} className='absolute top-14 left-10' />
          <Image src={personVector1.src} alt='product1' width={30} height={30} className='absolute top-20 right-20' />
          <div className='flex items-center justify-center w-full absolute bottom-0 left-0'>
            <Image src={Product1.src} alt='product1' width={400} height={400} className='z-1' />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className='flex flex-col space-y-2 shadow-md p-4 rounded-md w-[14.5rem] h-[14.5rem]'>
            <div className='flex items-center justify-center bg-primary-50 rounded-full p-2 w-[3rem] h-[3rem]'><Image src={bottle} alt={''} width={30} height={30} /></div>
            <h1 className='text-black text-xl font-semibold'>Verified Medicines</h1>
            <p className='text-black text-sm'>Lorem ipsum dolor sit amet, coctetur adipiscing elit. Proin bibendum eget leo ut pretium. Nunc sed fringilla sapien</p>
          </div>

          <div className='flex flex-col space-y-2 shadow-md p-4 rounded-md w-[14.5rem] h-[14.5rem]'>
            <div className='flex items-center justify-center bg-primary-50 rounded-full p-2 w-[3rem] h-[3rem]'><Image src={delivery} alt={''} width={30} height={30} /></div>
            <h1 className='text-black text-xl font-semibold'>Fast Delivery</h1>
            <p className='text-black text-sm'>Lorem ipsum dolor sit amet, coctetur adipiscing elit. Proin bibendum eget leo ut pretium. Nunc sed fringilla sapien</p>
          </div>

          <div className='flex flex-col space-y-2 shadow-md p-4 rounded-md w-[14.5rem] h-[14.5rem]'>
            <div className='flex items-center justify-center bg-primary-50 rounded-full p-2 w-[3rem] h-[3rem]'><Image src={headphones} alt={''} width={30} height={30} /></div>
            <h1 className='text-black text-xl font-semibold'>24/7 Customer Support</h1>
            <p className='text-black text-sm'>Lorem ipsum dolor sit amet, coctetur adipiscing elit. Proin bibendum eget leo ut pretium. Nunc sed fringilla sapien</p>
          </div>

          <div className='flex flex-col space-y-2 shadow-md p-4 rounded-md w-[14.5rem] h-[14.5rem]'>
            <div className='flex items-center justify-center bg-primary-50 rounded-full p-2 w-[3rem] h-[3rem]'><Image src={payment} alt={''} width={30} height={30} /></div>
            <h1 className='text-black text-xl font-semibold'>Secure Payment</h1>
            <p className='text-black text-sm'>Lorem ipsum dolor sit amet, coctetur adipiscing elit. Proin bibendum eget leo ut pretium. Nunc sed fringilla sapien</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center space-y-8'>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <div className='px-3 py-2 rounded-full text-semibold text-[#FFAD4D]' style={{backgroundColor:'rgba(255, 173, 77, 0.12)'}}>Blog</div>
          <h1 className='text-2xl font-semibold'>Health Tips Articles</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is teh dummy text.</p>
        </div>
        <div className=' grid grid-cols-4 gap-3'>
      { [1,1,1,1].map((index)=>( <BlogCard />))}
        </div>
        <button className='border px-3 py-2 flex space-x-3 rounded-lg'><p>Show More</p> <Image src={ThinArrow} alt={''}/></button>
      </div>

    </div>
  )
}

export default page
