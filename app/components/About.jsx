"use client"

import Image from 'next/image'
import aboutpic from "../images/missionimg.png"


import { Fade } from 'react-awesome-reveal';

const About = () => { 
  

 
 
  return (
    <section id="ABOUT US" className="mt-24 text-gray-600 body-font aboutfont">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <div className="sm:text-4xl font-bold text-3xl mb-8  text-gray-900">
        <p>Our Mission and Vision</p>
      
      </div>
      <div className="mb-8 text-xl leading-relaxed font-medium mt-5 ">
      <p className=" leading-relaxed font-medium mt-5 "><span className='text-3xl font-bold mb-2'>Mission:</span> To make wastewate managment system affordable, sustainable,   and energy efficient,addressing challenging posed by population growth,industrial expansion and  climate change to protect the environment and public health </p>
  


</div>
<div className="mb-8 text-xl leading-relaxed font-medium mt-5 ">

<p className='text-xl leading-relaxed font-medium mt-5'><span className='text-3xl font-bold mb-2'>Vision: </span> To be a global leader in a sustainable wastewater solution,pioneering innovative technologies that transform wastewater into valuable resource, promoting public health.safeguarding the environment,and contributing to a circular economy through continuous research,development and collaborations,setting new standards in wastewater treatments</p>
        
          </div>
      
    </div>
    
    
    <Fade duration={1000}>

    <div className="lg:max-w-lg lg:w-full md:w-1/2  w-fit">
      <Image src={aboutpic} alt="about us" className='rounded '/>
      
    </div>
    </Fade>
  </div>
</section>

  )
}

export default About
