"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Fade, Bounce, Flip } from 'react-awesome-reveal';
const Services = () => {
  return (
    <section className="text-gray-600 body-font">

      <Flip duration={500}>
      <div className='w-1/2 h-full'>

      <h1 className=" relative top-14 left-14 sm:text-4xl text-3xl mb-10 font-medium text-gray-900">Our Services</h1>
      </div>
      </Flip>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/720x400"
            alt="blog"
          />
          <div className="p-6">
            
              <Fade duration={1000}>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">

              Advanced Treatment solution
            </h1>
            <p className="leading-relaxed mb-3">
             

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo distinctio eos odio adipisci magni?
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
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/721x401"
            alt="blog"
          />
          <div className="p-6">
            <Fade>

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Research and development
            </h1>
            <p className="leading-relaxed mb-3">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quia explicabo in eius dolore iure!
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
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/722x402"
            alt="blog"
          />
          <div className="p-6">
            <Fade>

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Consultation and project design
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt officiis excepturi, unde earum voluptas facilis beatae aliquid fugiat vitae!
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
