"use client"
import { useState,useEffect } from "react";
import {FaBars,FaTimes  } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/clearcompanylogo.jpg"
import { Fade,Flip } from 'react-awesome-reveal';
import WhatsAppIcon from "./whatsappicon";
import Mail from "./Mail";
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
        link:'PROJECTS',
    },
    
    {
        id:3,
        link:'OUR CUSTOMERS',
    },
    {
        id:4,
        link:'FAQS',
    },
    {
        id:5,
        link:'CONTACT US',
    },
    {
      id:6,
      link:<WhatsAppIcon/>,
  },
  {
    id:7,
    link:<Mail/>,
},
    ]
  return (
    <>
    {/* <div className="bg-gradient-to-r from-[#48c768] to-green-400 flex w-full h-20 z-10 fixed duration-300  transition-all ease-in"  > */}
    <div className=" flex w-full h-28 z-10 fixed top-0 duration-300  transition-all ease-in bg-white"  >
      
      <div className="h-[70px] absolute top-0 flex justify-between items-center w-full  max-w-screen-xl mx-auto p-4">
        {/* <Link href="/#home" className="text-3xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
           ClearLife 
        </Link> */}
      <div className="flex justify-center items-center mt-6">
    <Image src={logo} className="w-[142px] h-[120px] object-contain" />
</div>
        
        <div >
            <ul className="hidden md:flex mt-4">

{links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li  className="ml-10 text-sm font-extrabold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
                
            </ul>
            {
                !navigation &&(
                
                    <div className="md:hidden cursor-pointer" onClick={()=>setNavigation(true)}>
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
    // "fixed left-0 top-0 w-4/5 h-full bg-white duration-500 ease-in p-10"

 :"fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>

<div>

    <div className=" flex w-full items-center justify-between">
        {/* <Link href="/#home">
            <h2  onClick={() => setNavigation(false)} className="text-3xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">ClearLifer</h2>
        </Link> */}
        {/* <div className="absolute top-0">
          <Image src={logo} width={100} height={50}/>
        </div> */}
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

</div>
</div>
</div>
</div>
<div className=" w-full relative top-[112px] -z-[1]">

<video controls autoPlay loop muted className="w-full h-full object-cover  z-[100]">
        <source src="/orange1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
<div className="absolute top-[548px] left-14 text-left z-[1]  text-white">
<h1 className="heroh1 mb-4 text-3xl font-bold  ">Transforming Wastewater into a Sustainable Future </h1>
<p className="text-xl mt-2 w-1/2">Our cutting-edge wastewater treatment technologies go beyond just treating wastewater - they reclaim valuable resources and minimize environmental impact</p>

<button className="py-2 px-6 text-xl mt-3 rounded-md bg-blue-400 text-white cursor-pointer">button</button>
</div>
            </>
)
}


export default Navbar