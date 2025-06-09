"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CallToActionSection = () => {
  return (
    <div className='relative py-24'>
        <Image
            src='/landing-call-to-action.jpg'
            alt='Rentiful search section background'
            fill
            className='object-cover object-center'
        /> 
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12'
        >
            <div className='flex flex-row md:flex-col justify-between items-center'>
                <div className='mb-6 md:mb-0 md:mr-10'>
                    <h2 className='text-2xl font-bold text-white'>
                        Ready to find your perfect home?
                    </h2>
                </div>
                <div>
                    <p className='text-white mb-3'>
                        Discover your dream rental with Rentiful. 
                    </p>
                    
                </div>
                <div className='flex justify-center mx-auto items-center md:justify-start gap-4'>
                        <button
                        onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
                        className='cursor-pointer inline-block bg-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50'
                        >Search</button>
                         <Link
                         href='/signup'
                         className='inline-block text-white secondary-500 rounded-lg px-6 py-3 font-semibold hover:secondary-600 '
                         scroll={false}
                         >
                            Sign Up
                         </Link>
                    </div>
            </div>
        </motion.div>
    </div>
  )
}

export default CallToActionSection