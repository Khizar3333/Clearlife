import React from 'react'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
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

      
{/* shopify 5 video 14,15 */}
{/* fb 1st 5 video */}
      
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
          <div className='flex flex-col justify-center '>
          <div>
  <Image src={img1} className='lg:h-48 md:h-36 h-30 object-contain hover:scale-110 transition duration-200 ease-in hover:mb-3' />
</div>
     

      <div className='text-center text-xl mt-2'>

      <h3 >Dr. Naveen Kumar</h3>
      <p>UI designer</p>
      </div>
          </div>
          <div className='p-0'>
    <div>

      <Image src={img2} className='lg:h-48 md:h-36 h-30  object-contain hover:scale-110 transition duration-200 ease-in hover:mb-3'/>
    </div>
    <div className='text-center text-xl mt-2'>

      <h3 >Khizar ahmad</h3>
      <p>developer</p>
    </div>
          </div>
          <div className='p-0'>
    <div>

      <Image src={img3} className='lg:h-48 md:h-36 h-30 object-contain hover:scale-110 hover:mb-3 transition duration-200 ease-in'/>
    </div>
    <div className='text-center text-xl mt-2'>

      <h3 >Usman Asif</h3>
      <p>developer</p>
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
