"use client"
import Link from "next/link";
import { Logo, Stars } from "./Icons";
import { useState, useEffect } from 'react';
import { CommonBtn } from "./CommonBtn";
import Image from "next/image";
import hero from '../assets/images/png/hero.png'

export default function Header() {
    const [nav, setNav] = useState(false)
    const [_doc, set_doc] = useState(null)
    useEffect(() => {
        set_doc(document);
        if (nav === true) {
            document.body.classList.add("max-lg:overflow-hidden")
        } else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    });


    return (
        <>
            <div className="bg-white lg:bg-[url('/assets/images/webp/hero-bg-img.webp')] lg:bg-contain lg:bg-no-repeat xl:h-[810px] lg:h-[700px] lg:bg-top relative">
                <div className="container xl:max-w-[1164px] px-3 mx-auto">
                    <nav className="flex items-center justify-between sm:py-[19px] py-4">
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                        <div className={`${nav ? "left-0" : "left-[-100%]"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:w-full max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-white max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center`}>
                            <ul className="flex items-center gap-6 max-lg:flex-col">
                                <Link onClick={() => setNav(!nav)} href={'#home'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">Home</Link>
                                <Link onClick={() => setNav(!nav)} href={'#about'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">About Us</Link>
                                <Link onClick={() => setNav(!nav)} href={'#service'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">Services</Link>
                                <Link onClick={() => setNav(!nav)} href={'#choose'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">Why Choose Us</Link>
                                <Link onClick={() => setNav(!nav)} href={'#blog'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">Blogs</Link>
                                <Link onClick={() => setNav(!nav)} href={'#faq'} className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative">FAQ</Link>
                            </ul>
                            <CommonBtn btnname="Contact Us" />
                        </div>
                        <div onClick={() => setNav(!nav)} className='lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col cursor-pointer'>
                            <span className={`${nav ? 'rotate-[50deg] translate-y-[14px]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-[#131200] ease-linear transition-all`}></span>
                            <span className={`${nav ? 'hidden' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-[#131200] ease-linear transition-all`}></span>
                            <span className={`${nav ? 'rotate-[-50deg] translate-y-[-50%]' : ""} h-[3.4px] w-full duration-300 rounded-[3px] bg-[#131200] ease-linear transition-all`}></span>
                        </div>
                    </nav>
                    <div data-aos="fade-right">
                        <div id="home" className="xl:pt-[138px] md:pt-[90px] sm:py-[50px] py-[40px] relative z-10">
                            <div className="flex items-center gap-[6px] mb-2">
                                <Stars />
                                <p className="text-[16px] font-normal leading-[150%] text-[#131200]">AI With Noble Mind</p>
                            </div>
                            <h2 className="ff_outfit sm:text-[64px] text-[36px] font-light text-black leading-[120%] max-w-[584px]">Inspiring Innovation, Elevating Solutions – <span className="font-semibold">Noble Mind"</span></h2>
                            <p className="text-[16px] leading-[150%] text-black font-normal opacity-70 max-w-[584px] mt-4">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden block absolute top-0 left-0 right-0 bottom-0 z-[1]">
                    <Image src={hero} alt="hero" className="w-full h-full object-cover opacity-10" />
                </div>
            </div>
        </>
    )
}