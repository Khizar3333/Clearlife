"use client"

import Image from 'next/image'
import aboutpic from "../images/missionimg.png"

import Typewriter from 'typewriter-effect';

import { Fade,Flip } from 'react-awesome-reveal';

const About = () => { 
  const text='  To be a global leader in a sustainable wastewater solution,pioneering innovative technologies that transform wastewater into valuable resource, promoting public health.safeguarding the environment,and contributing to a circular economy through continuous research,development and collaborations,setting new standards in wastewater treatments'

  const text1=" To make wastewate managment system affordable, sustainable,   and energy efficient,addressing challenging posed by population growth,industrial expansion and  climate change to protect the environment and public health" 
 
 
  return (
    <section id="ABOUT US" className="mt-20 text-gray-600 body-font aboutfont">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <div className="title-font  sm:text-4xl text-3xl mb-10 font-medium text-gray-900 v">

      <Typewriter   options={{
        typingsped:250,
      
  autoStart: true,
  loop: true,
}}
onInit={(typewriter) => {
  const typeString = () => {
    typewriter.typeString("Our Mission and Vision")
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(1000)
    .callFunction(() => {
      console.log('All strings were deleted');
    })
    .start(typeString); // Restart the animation after completion
  };
  typeString(); // Initial call to start the animation
}}
/> 
      
      </div>
      <div className="mb-8 text-xl leading-relaxed font-medium mt-5 ">
      <p className='text-3xl font-bold mb-2'>Mission: </p>
<Typewriter className=" leading-relaxed font-medium mt-5 " options={{
      typingsped:250,
  
  autoStart: true,
  // loop: true,
}}
onInit={(typewriter) => {
  const typeString = () => {
    typewriter.typeString(text1)
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(1000)
    .callFunction(() => {
      console.log('All strings were deleted');
    })
    .start(typeString); // Restart the animation after completion
  };
  typeString(); // Initial call to start the animation
}}
/>   




 
  
  {/* ); */}



     {/* </p> */}
</div>
<div className="mb-8 text-xl leading-relaxed font-medium mt-5 ">

<p className='text-3xl font-bold mb-2'>Vision: </p>
     <Typewriter className="text-xl leading-relaxed font-medium mt-5 " options={{
       autoStart: true,
      typingsped:250,
      //  loop: true,
      }}
      onInit={(typewriter) => {
          const typeString = () => {
            typewriter.typeString(text)
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1000)
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start(typeString); // Restart the animation after completion
            };
            typeString(); // Initial call to start the animation
          }}
          />   
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
