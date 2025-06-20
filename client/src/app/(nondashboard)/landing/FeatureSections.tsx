"use client"

import React from 'react'
import {motion, stagger} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, staggerChildren: 0.2 }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
export const FeatureSections = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView={"visible"}
    viewport={{ once: true }}
    variants={containerVariants}
    className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white'
    >

        <div className='max-w-4xl xl:max-w-6xl mx-auto'>
            <motion.h2
                variants={itemVariants}
                className='text-3xl font-bold text-center mb-12 sm:w-2/3 mx-auto'>
                    Quickly find the perfect rental home with Rentiful
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
                {[0,1,2].map((index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            >
                                <FeatureCard
                                    imgSrc={`/landing-search${3-index}.png`}
                                    title={
                                        [
                                            "Search Made Easy",
                                            "Comprehensive Listings",
                                            "User-Friendly Interface"
                                        ][index]
                                    }
                                    description={
                                        [
                                            "Find your ideal rental home with our intuitive search tools. Filter by location, price, and amenities to discover the perfect match for your perfect stay.",
                                            "Browse through a wide range of rental listings with detailed descriptions, high-quality images, and essential information to help you make informed decisions.",
                                            "Experience a seamless and user-friendly interface designed to simplify your rental search. Navigate effortlessly and find your dream home in no time."
                                        ][index]
                                    }
                                    linkText={["Explore", "Search", "Discover"][index]}   
                                    linkHref={["/explore", "/search", "/discover"][index]}
                                /> 
                         
                        </motion.div>
                    );
                })}

            </div>

        </div>  
    </motion.div>
  )
}

const FeatureCard = ({imgSrc, title, description,linkText, linkHref}: {imgSrc:string, title: string, description: string,linkText: string, linkHref: string}) => {
  return (
    <div className='text-center'>
        <div className='p-4 rounded-lg mb-4 flex items-center justify-center h-48'>
            <Image
                src={imgSrc}
                width={400}
                height={400}
                className="object-contain h-full w-full"
                alt={title}
            />
        </div>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='mb-4'>{description}</p>
        <Link href={linkHref} 
        className='inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100'
        scroll={false}
        >
        {linkText}
        </Link>
    </div>
  );
}
