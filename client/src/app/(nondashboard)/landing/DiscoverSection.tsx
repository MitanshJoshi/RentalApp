"use client"

import React from 'react'
import {motion, stagger} from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5, staggerChildren: 0.2 }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
export const DiscoverSection = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView={"visible"}
    viewport={{ once: true, amount:0.8 }}
    variants={containerVariants}
    className='py-12 mb-16 bg-white'
    >

        <div className='max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center'>
            <motion.div 
                variants={itemVariants}
                className='my-12 text-center'>
                    <h2 className='text-3xl font-semibold leading-tight text-gray-800'>Discover</h2>
                    <p className='mt-4 text-lg text-gray-600'>
                        Find Your Dream Rental Property Today!
                    </p>
                    <p className='mt-2 text-gray-500 max-w-3xl mx-auto'>
                        Explore our extensive listings and find the perfect rental home that suits your needs and lifestyle. Whether you're looking for a cozy apartment, a spacious house, or a modern studio, we have something for everyone.
                    </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
                {[
                    {
                        imageSrc: "/landing-icon-wand.png",
                        title: "Search For Properties",
                        description: "Find your ideal rental home with our intuitive search tools. Filter by location, price, and amenities to discover the perfect match for your perfect stay.",
                    },
                    {
                        imageSrc: "/landing-icon-calendar.png",
                        title: "Book Your Rental",
                        description: "Browse through a wide range of rental listings with detailed descriptions, high-quality images, and essential information to help you make informed decisions.",
                    },
                    {
                        imageSrc: "/landing-icon-heart.png",
                        title: "Enjoy Your New Home",
                        description: "Experience a seamless and user-friendly interface designed to simplify your rental search. Navigate effortlessly and find your dream home in no time.",
                    }
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                    >
                        <DiscoverCard {...card} />
                    </motion.div>
                ))
                    }
                

            </div> 

        </div>  
    </motion.div>
  )
}

const DiscoverCard = ({imageSrc, title, description}: {imageSrc:string, title: string, description: string}) => {
  return (
    <div className='px-4 py-12 shadow-lg rounded-lg primary-50 md:h-72'>
        <div className='primary-700 p-[0.6rem] rounded-full w-10 mb-4 h-10 mx-auto'>
            <Image
                src={imageSrc}
                width={30}
                height={30}
                className="object-contain h-full w-full"
                alt={title}
            />
        </div>
        <h3 className='mt-4 text-xl font-medium text-gray-800'>{title}</h3>
        <p className='mt-2 text-base text-gary-500'>{description}</p>
   
    </div>
  );
}
