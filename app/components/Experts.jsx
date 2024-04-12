"use client"
import React from 'react'
import { Carousel } from "flowbite-react";
import img1 from "../images/aboutpic.jpg"
const Experts = () => {
  return (
    <div className="w-1/2 h-56 sm:h-64 xl:h-80 2xl:h-96 mx-auto ">
      <h1 className='text-3xl'> Our Experts</h1>
      <Carousel slideInterval={3000}>
       
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  )
}

export default Experts
