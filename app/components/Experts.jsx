import React from 'react'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import Image from 'next/image'
const Experts = () => {
  return (
    <section id="EXPERTS" className="text-gray-600 body-font expertsfont">
    <div className="container px-5 py-24 mx-auto">

    <div className="card flex flex-col text-center w-full mb-10">
      <h1 className="card-title text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <h2 className='p-5 small-desc  leading-relaxed '>
        Leading Minds in Water Treatment 
        </h2>
      <p className="small-desc p-6  leading-relaxed">
      At Clearlife Technologies, our team comprises industry-leading experts who are dedicated to advancing the field of industrial wastewater treatment. Our multidisciplinary team brings together a diverse range of skills and experiences to develop cutting-edge solutions that address the unique challenges of our clients.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>

      

     
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
          
          <div class="flex flex-col justify-center">
  <div class="relative group w-fit">
    <Image src={img1} alt="Visible Image" className="lg:h-[238px] md:h-36 h-40 object-contain rounded-lg transition duration-400 ease-in-out group-hover:opacity-0" />
    <Image src={img4} alt="Hidden Image" className="lg:h-[238px] md:h-36 h-40 object-contain absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out" />
  </div>
  <div class="text-center text-xl mt-2 font-semibold">
    <h3>Amman Khokhar</h3>
    <p>CEO</p>
  </div>
</div>
<div class="flex flex-col justify-center">
  <div class="relative group">
    <Image src={img2} alt="Visible Image" className="lg:h-[238px] md:h-36 h-40 object-contain rounded-lg transition duration-300 ease-in-out group-hover:opacity-0" />
    <Image src={img5} alt="Hidden Image" className="lg:h-[238px] md:h-36 h-40 object-contain absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" />
  </div>
  <div class="text-center text-xl mt-2 font-semibold">
    <h3>Fraz Nayyar</h3>
    <p>CTO</p>
  </div>
</div>
<div class="flex flex-col justify-center">
  <div class="relative group">
    <Image src={img3} alt="Visible Image" className="lg:h-[238px] md:h-36 h-40 object-contain rounded-lg transition duration-300 ease-in-out group-hover:opacity-0" />
    <Image src={img6} alt="Hidden Image" className=" lg:h-[238px] md:h-36 h-40 object-contain absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" />
  </div>
  <div class="text-center text-xl mt-2 font-semibold">
    <h3>Danial Khokhar</h3>
    <p>President</p>
  </div>
</div>
          
        
      </div>
      <div className='text-center mt-6 font-sans rounded-md border-2 shadow-md p-4'>
        <h3 className='font-bold text-2xl '>Committed to Excellence </h3>
        <p className="lg:w-2/3 text-[18px] mt-2 mx-auto leading-relaxed font-semibold">Our team is united by a common goal: to revolutionize industrial wastewater treatment for a cleaner, more sustainable future. We believe that collaboration, innovation, and dedication are key to achieving this vision. Together, we are shaping the future of water treatment technologies.</p>
      </div>
    


</div>
      
  </section>
  
  )
}

export default Experts
