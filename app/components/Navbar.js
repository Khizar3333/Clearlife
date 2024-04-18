"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/clearcompanylogo.jpg"
import { Fade,Flip } from 'react-awesome-reveal';
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

const Navbar = () => {
    const [navigation, setNavigation] = useState(false)
    const [pageScroll, setPageScroll] = useState(false);

    useEffect(() => {
      const sub = window.addEventListener("scroll", () =>
        setPageScroll(window.scrollY >= 90)
      );
  
      return sub;
    }, []);


    const links=[
        {
        id:1,
        link:'SERVICES',
    },
    {
        id:2,
        link:'EXPERTS',
    },
    
    {
        id:3,
        link:'ABOUT US',
    },
    {
        id:4,
        link:'FAQS',
    },
    {
        id:5,
        link:'CONTACT US',
    },
//     {
//       id:6,
//       link:<WhatsAppIcon/>,
//   },
//   {
//     id:7,
//     link:<Mail/>,
// },
    ]
    function handleLinkClick(link) {
      const targetSection = document.getElementById(link);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  
  return (
    <>
    <div className=" flex w-full h-28 z-10 fixed top-0 duration-300  transition-all ease-in bg-white"  >
      
      <div className="h-[70px] absolute top-0 flex justify-between items-center w-full  max-w-screen-xl mx-auto p-4">
        
      <div className="flex justify-center items-center mt-6">
    <Image src={logo} className="w-[142px] h-[120px] object-contain" />
</div>
        
        <div className="" >
            <ul className="hidden lg:flex  mt-4 flex-wrap items-center ">

{links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                {/* <li  className="ml-10 text-sm font-extrabold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li> */}
                  <li
        className="ml-10 text-sm font-extrabold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider"
        onClick={() => handleLinkClick(`${link}`)}
      >
        {link}
      </li>
              </Link>
            ))}
            <div className="flex items-center  ">
    <FaLinkedin className="text-blue-500 mr-6 ml-16" size={25} />
    <FaYoutube className="text-red-600 mr-6" size={25} />
    <FaFacebook className="text-blue-500" size={25} />
  </div>
  
            </ul>
                
            {
                !navigation &&(
                
                    <div className="lg:hidden cursor-pointer" onClick={()=>setNavigation(true)}>
            <FaBars size={30}/>
            </div>
  )
            }
            
        </div>
      </div>
      <div className={navigation?"md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur": ""}>
<div className={
    navigation? 
    "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-green-400 to-green-500 text-white duration-500 ease-in p-10"

 :"fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>

<div>

    <div className=" flex w-full items-center justify-between">
        
        <div className="p-3 cursor-pointer" onClick={()=> setNavigation(false)}>
            <FaTimes size={30}/>
        </div>
    </div>
</div>
<div className="mt-24 gap-20 h-fit flex flex-col ">
<ul className="uppercase">
{links.map(({ id, link }) => (
  
  <Link key={id} href={`/#${link}`}>
                <Fade duration={1500}>
                <li  onClick={() => setNavigation(false)} className="py-4 cursor-pointer tracking-wide font-semibold text-xl">{link}
                </li>
              
          </Fade>
              </Link>
            ))}
</ul>
<div className="grid grid-cols-2 w-4/5 mx-auto gap-10 h-full">
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaLinkedin size={25}/>
  </div>
  <div className="flex items-center  justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaYoutube  size={25}/>
  </div>
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaFacebook size={25}/>
  </div>
  <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-white">
<FaGithub size={25}/>
  </div>
</div>

</div>
</div>
</div>
</div>
<div className=" w-full h-screen relative top-[112px] -z-[1]">

<video controls autoPlay loop muted className="w-full h-full object-cover  z-[100]">

        
        <source src="./orange3.mp4" type="video/mp4"/>
      </video>
</div>



<div className="absolute top-[310px] left-[53px] flex flex-col w-[71%] md:left-14 md:text-left z-[1]  text-white text-center">
  

<h1 className="heroh1 text-[22px] mb-4 sm:text-3xl font-bold  ">Transforming Wastewater into a Sustainable Future </h1>
<p className="text-[15px] md:text-xl w-fit mt-2 sm:w-1/2">Our cutting-edge wastewater treatment technologies go beyond just treating wastewater - they reclaim valuable resources and minimize environmental impact</p>
<div className="flex justify-center md:justify-start mt-5">

<button className="py-2 px-6 text-xl    rounded-md bg-blue-400 text-white cursor-pointer">button</button>
</div>
{/* </div> */}
</div>
            </>
)
}


export default Navbar