'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignupPage = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage(null);
        try {
            const response = await fetch('http://localhost:8000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password }),
                credentials: 'include' // ✅ Important for CORS
            });
            console.log('Signup successful:', response);
            router.push('/auth/signin'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Signup failed:', error);
            setErrorMessage('Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <form onSubmit={handleSubmit} className='shadow-2xl rounded-2xl p-5 w-[30%] space-y-4 flex flex-col'>
                <h1 className='text-2xl font-semibold'>Signup</h1>

                {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-sm'>Username<span className='text-red-500'> *</span></label>
                    <input
                        type="text"
                        placeholder='Enter your Username'
                        className='border px-5 py-2 rounded-md'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-sm'>Email<span className='text-red-500'> *</span></label>
                    <input
                        type="email"
                        placeholder='Enter your Email'
                        className='border px-5 py-2 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex flex-col space-y-1 w-full'>
                    <label className='text-sm'>Password<span className='text-red-500'> *</span></label>
                    <input
                        type="password"
                        placeholder='Enter your Password'
                        className='border px-5 py-2 rounded-md'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    type='submit'
                    className={`bg-primary-100 px-5 py-2 w-full rounded hover:bg-primary-100 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    disabled={loading}
                >
                    {loading ? "Signing up..." : "Signup"}
                </Button>

                <div className='flex items-center justify-center w-full space-x-3'>
                    <span className='text-sm'>Already have an account?</span>
                    <Link href={'/auth/signin'} className='text-primary-100'>Login</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;