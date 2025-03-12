"use client"
import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import Paymentvender from '../../../public/payment-vender.png';
import CartList from './cartlist'
import { Button } from '@/components/ui/button';


const page = () => {

    return (
        <section className='container flex items-start justify-center space-x-28 p-10'>
            <div className='flex flex-col space-y-3'>
                <div className='flex flex-col space-y-4'>
                    <div className='w-full border-b-2 border-gray-100 pb-3'>
                        <h1 className='text-2xl font-semibold text-black'>Checkout</h1>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-lg font-semibold'>Personal Details</h1>
                        <p className='text-sm text-gray-400'>Enter your personal information below.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">First Name<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Last Name<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Contact No<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Email Address<span className='text-red-500'>*</span> <span className='text-gray-300 font-thin'>(Optional)</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Country/Region<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">City<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-black/10 p-2 rounded' />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1 col-span-1'>
                        <label htmlFor="">Delivery Address<span className='text-red-500'>*</span></label>
                        <textarea className='border border-black/10 p-2 rounded' />
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h1>Payment</h1>
                    <p>Enter your personal information below.</p>
                    <div className='flex flex-col space-y-3 border p-4 rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3 '>
                                <RadioGroup>
                                    <RadioGroupItem value="option-two" id="option-two" />
                                </RadioGroup>
                                <p>Credit / Debit Card</p>

                            </div>
                            <Image src={Paymentvender} alt={''} width={200} className='h-8' />
                        </div>

                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="" className='text-sm'>Name on Card<span className='text-red-500'>*</span></label>
                                <input type="text" className='border border-black/10 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="" className='text-sm'>Card Number<span className='text-red-500'>*</span></label>
                                <input type="text" className='border border-black/10 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="" className='text-sm'>Card Expiry<span className='text-red-500'>*</span></label>
                                <input type="text" className='border border-black/10 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="" text-sm className='text-sm'>CVC Number<span className='text-red-500'>*</span></label>
                                <input type="text" className='border border-black/10 p-2 rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col space-y-3 border p-4 rounded-md'>
                        <div className='flex items-center space-x-3 '>
                            <RadioGroup>
                                <RadioGroupItem value="option-two" id="option-two" />
                            </RadioGroup>
                            <p>Wallets (Easypaisa, Jazzcash)</p>

                        </div>

                        <div className='grid grid-cols-1 gap-3'>
                            <div className='flex flex-col space-y-3'>
                                <label htmlFor="">Name on Card<span className='text-red-500'>*</span></label>
                                <input type="text" className='border-2 border-black/10 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <label htmlFor="">Card Nmber<span className='text-red-500'>*</span></label>
                                <input type="text" className='border-2 border-black/10 p-2 rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-3 border rounded-md p-4'>
                    <RadioGroup>
                        <RadioGroupItem value="option-two" id="option-two" />
                    </RadioGroup>
                    <p>Cash on Delivery (COD)</p>

                </div>
                <Button className='bg-primary-100 text-white hover:bg-transparent rounded-md px-5 py-2 w-full'>Pay 950 Rs</Button>
            </div>
            {/* cart list */}
            <CartList />
        </section>
    )
}

export default page;