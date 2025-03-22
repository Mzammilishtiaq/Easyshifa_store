import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <div className='shadow-2xl rounded-2xl p-3 w-[30%] space-y-2 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Login</h1>
        <div className='flex flex-col space-y-1 w-full'>
          <label className='text-sm'><span>Email</span><span className='text-red-500'> *</span></label>
          <input type="email" placeholder='Enter your Email'  className='border px-5 py-2 rounded-md'/>
        </div>
        <div className='flex flex-col space-y-1 w-full'>
          <label className='text-sm'><span>Password</span><span className='text-red-500'> *</span></label>
          <input type="password" placeholder='Enter your Password' className='border px-5 py-2 rounded-md' />
        </div>
        <div className='flex items-end justify-end w-full'><Link href={'/'} className='text-primary-100'>Password Forgot</Link></div>
        <Button className='bg-primary-100 px-5 py-2 w-full rounded hover:bg-primary-100 cursor-pointer'>Login</Button>
        <div className='flex items-center justify-center w-full space-x-3'><span className='text-sm'>we are not already</span><Link href={'/auth/signup'} className='text-primary-100'>signup</Link></div>
      </div>
    </div>
  )
}

export default page