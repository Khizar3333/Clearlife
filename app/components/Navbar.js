"use client"
import { useState,useEffect } from "react";
import {FaBars,FaTimes  } from "react-icons/fa";
import Link from "next/link";
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
        link:'EXPERTS LINEUP',
    },
    {
        id:4,
        link:'OUR CUSTOMERS',
    },
    {
        id:5,
        link:'FAQS',
    },
    {
        id:6,
        link:'CONTACT US',
    },
    ]
  return (
    <>
    <div className="bg-gradient-to-r from-[#48c768] to-green-400 flex w-full h-20 z-10 fixed duration-300  transition-all ease-in"  >
      
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home" className="text-3xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
           ClearLife 
        </Link>
        <div >
            <ul className="hidden md:flex">

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
    "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-[#48c768] to-green-400 text-white duration-500 ease-in p-10"

 :"fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"}>

<div>

    <div className=" flex w-full items-center justify-between">
        <Link href="/#home">
            <h2  onClick={() => setNavigation(false)} className="text-3xl  font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">ClearLifer</h2>
        </Link>
        <div className="p-3 cursor-pointer" onClick={()=> setNavigation(false)}>
            <FaTimes size={30}/>
        </div>
    </div>
</div>
<div className="mt-24 gap-20 h-fit flex flex-col">
<ul className="uppercase">
{links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li  onClick={() => setNavigation(false)} className="py-4 cursor-pointer tracking-wide text-xl">{link}
                </li>
              </Link>
            ))}
</ul>

</div>
</div>
</div>
</div>
<video controls autoPlay loop muted className="w-full h-full object-cover relative top-20 z-0">
        <source src="/orange.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </>
)
}


export default Navbar