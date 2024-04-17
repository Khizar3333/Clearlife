"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Fade, Bounce, Flip } from 'react-awesome-reveal';
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import aboutpic from "../images/missionimg.png"

import Image from 'next/image';
const Services = () => {
  return (
    <section id="SERVICES" className="text-gray-600 body-font">

      <Flip duration={500}>
      <div className='w-1/2 h-full'>

      <h1 className=" relative top-14 left-14 sm:text-4xl text-3xl mb-10 font-medium text-gray-900">Our Services</h1>
      </div>
      </Flip>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image src={image1} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="blog"/>
          
          <div className="p-6">
            
              <Fade triggerOnce duration={1000}>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">

              Advanced Treatment solution
            </h1>
            <p className="leading-relaxed mb-3">
             

            We provide cutting-edge technologies for wastewater treatment, including membrane-based separation (such as reverse osmosis), bioelectrochemical systems (like microbial fuel cells), and nanomaterial-based processes.
            </p>
              </Fade>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image src={image2} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="blog"/>
         
          <div className="p-6">
            <Fade triggerOnce duration={1000}>

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Research and development
            </h1>
            <p className="leading-relaxed mb-3">
            We continuously innovate by researching emerging contaminants, improving existing technologies, and developing novel approaches.
            </p>
            </Fade>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={aboutpic}/>
          <div className="p-6">
            <Fade triggerOnce duration={1000}>

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Consultation and project design
            </h1>
            <p className="leading-relaxed mb-3">
            Our team of experts collaborates with clients to design customized wastewater treatment systems.
            </p>
            </Fade>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
            
        </div>
</section>

  )
}

export default Services
