import Image from 'next/image'
import React from 'react'
import innoveimg from '../assets/images/png/innovationimg.png'
import { Stars } from './Icons'
import { CommonBtn } from './CommonBtn'
import purtriangle from '../assets/images/png/purtriangle.png'

const About = () => {
    return (
        <div id='about' className='xl:py-[150px] lg:py-[100px] md:py-[70px] sm:py-[50px] pt-[50px] py-[30px] relative'>
            <div className='container xl:max-w-[1164px] px-3 mx-auto'>
                <div className='flex flex-row flex-wrap lg:justify-between justify-center items-center'>
                    <div data-aos="zoom-out-right" className='lg:w-[48.7%] md:w-[70%] sm:w-[80%] w-[90%] flex justify-center overflow-hidden rounded-tr-[50px]'>
                        <Image src={innoveimg} alt='innoveimg' className='rounded-tr-[50px] w-full hover:scale-105 transition-all duration-300 ease-linear' />
                    </div>
                    <div data-aos="fade-left" className='xl:w-[45.5%] lg:w-[48%] w-full lg:mt-0 mt-10'>
                        <div className="flex items-center gap-[6px] mb-2">
                            <Stars />
                            <p className="text-[16px] font-normal leading-[150%] text-[#131200]">About Us</p>
                        </div>
                        <h3 className='sm:text-[48px] text-[30px] leading-[120%] font-light text-black ff_outfit'>Pioneering Vision & Mission- <span className='font-semibold'>Driven Sectoral Innovation</span></h3>
                        <p className='text-[16px] font-normal leading-[150%] text-black opacity-70 mt-4 xl:mb-[42px] mb-5'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                        <CommonBtn btnname="Read More" />
                    </div>
                </div>
            </div>
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute top-[-4%] left-[2%] md:block hidden' />
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute bottom-[21%] right-[2%] lg:opacity-100 opacity-20' />
        </div>
    )
}

export default About