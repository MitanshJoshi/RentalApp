"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        
        <Image
          src="/landing-splash.jpg"
          alt="Hero Image"
          fill
          className='object-cover object-center'
          priority
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}}
        className='absolute inset-0 flex flex-col items-center justify-center text-white z-10'>
               <h1 className='text-5xl md:text-6xl font-bold mb-4 text-center'>
                Find Your Perfect Rental Home
            </h1>
            <p className='text-lg md:text-xl mb-8 text-center max-w-2xl'>
                Discover your rental apartment with Rentiful, where convenience meets comfort.
            </p>
            <div className='flex justify-center'>
                <Input

                        type="text"
                        placeholder="Search for apartments, locations, or amenities"
                        className='w-full md:w-96 px-4 py-2 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none  bg-white text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
                        >
                </Input>
                <Button
                        onClick={() => alert('Search functionality not implemented yet') }
                        className='cursor-pointer secondary-500 text-white rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none px-6 py-2 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500'
                        >
                            Search
                        </Button>
            </div>
        </motion.div> 
    </div>
  )
}

export default HeroSection