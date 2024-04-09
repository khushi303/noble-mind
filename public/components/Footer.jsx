import Link from "next/link";
import { Facebook, FooterLogo, Insta, Linkdin, Tweet } from "./Icons";

export default function Footer() {
    const date = new Date()
    return (
        <div className="bg-black">
            <div className="container xl:max-w-[1164px] px-3 mx-auto pt-[138px] pb-[52px] mt-[-86px] relative z-[1]">
                <div className="flex justify-between flex-wrap flex-row">
                    <div className="md:w-[50%] w-full">
                        <Link href={'/'}>
                            <FooterLogo />
                        </Link>
                        <p className="text-[16px] leading-[150%] text-white font-normal mb-2 mt-7">Follow Us</p>
                        <div className="flex gap-4 items-center">
                            <a href="https://www.facebook.com/" target="blank" className="w-[44px] h-[44px] border rounded-[50%] border-solid border-[#FDFDFF] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-linear">
                                <Facebook />
                            </a>
                            <a href="https://www.instagram.com/" target="blank" className="w-[44px] h-[44px] border rounded-[50%] border-solid border-[#FDFDFF] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-linear">
                                <Insta />
                            </a>
                            <a href="https://twitter.com/i/flow/login" target="blank" className="w-[44px] h-[44px] border rounded-[50%] border-solid border-[#FDFDFF] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-linear">
                                <Tweet />
                            </a>
                            <a href="https://www.linkedin.com/" target="blank" className="w-[44px] h-[44px] border rounded-[50%] border-solid border-[#FDFDFF] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-linear">
                                <Linkdin />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full mt-10 md:mt-0">
                        <div className="flex flex-wrap flex-row md:gap-[64px] w-full md:justify-end">
                            <ul className="gap-[14px] flex flex-col max-md:w-[50%]">
                                <li className="ff_outfit text-[16px] leading-[150%] font-semibold text-white mb-[2px]">Maine</li>
                                <li>
                                    <Link href={'#home'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Home</Link></li>
                                <li> <Link href={'#about'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">About Us</Link></li>
                                <li>
                                    <Link href={'#service'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Services</Link></li>
                                <li>
                                    <Link href={'#choose'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Why Choose Us</Link></li>
                            </ul>
                            <ul className="gap-[14px] flex flex-col max-md:w-[50%]">
                                <li className="ff_outfit text-[16px] leading-[150%] font-semibold text-white mb-[2px]">Legal</li>
                                <li>
                                    <Link href={'#term'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Term & Conduction</Link></li>
                                <li>
                                    <Link href={'#privacy'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Privacy Policy</Link></li>
                                <li>
                                    <Link href={'#contact'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">Contact</Link></li>
                                <li>
                                    <Link href={'tel:6295550129'} className="text-[16px] font-normal leading-[150%] text-[#FDFDFF] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#FDFDFF]  after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-4px] hover:after:w-full hover:after:left-0 relative">(629) 555-0129</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-solid border-[#FFFFFF4D] pt-4 sm:pb-9 pb-4">
                <p className="text-[14px] font-normal leading-[150%] text-white opacity-70 text-center md:px-0 px-3">© Copyright {date.getFullYear()} Noble Mind | All rights reserved. </p>
            </div>
        </div>
    )
}