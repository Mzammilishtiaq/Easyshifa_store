"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();


    const handleSubmited = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post<{ success: boolean, token: string, message: string }>('http://localhost:8000/api/user/es_admin_login', { email, password });
            console.log(response)
            if (response.data.success === true) {
                localStorage.setItem('AdminToken', response.data.token); // Store token for authentication
                router.push('/home')
                console.log("Login successful!");
            } else {
                alert(response.data.message); // Show error message
            }
        } catch (error: any) {
            alert(error?.response?.data?.message || "Login failed!");
        }
    }

    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <form onSubmit={handleSubmited} className='shadow-2xl rounded-2xl px-7 py-6 w-[30%] space-y-2 flex flex-col'>
                <h1 className='text-2xl font-semibold'>Login</h1>
                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-sm'><span>Email</span><span className='text-red-500'> *</span></label>
                    <input type="email" placeholder='Enter your Email' className='border px-5 py-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-sm'><span>Password</span><span className='text-red-500'> *</span></label>
                    <input type="password" placeholder='Enter your Password' className='border px-5 py-2 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex items-end justify-end w-full'><Link href={'#'} className='text-primary-100'>Password Forgot</Link></div>
                <Button type='submit' className='bg-primary-100 px-5 py-2 w-full rounded hover:bg-primary-100 cursor-pointer'>Login</Button>
                {/* <div className='flex items-center justify-center w-full space-x-3'><span className='text-sm'>we are not already</span><Link href={'/auth/signup'} className='text-primary-100'>signup</Link></div> */}
            </form>
        </div>
    )
}