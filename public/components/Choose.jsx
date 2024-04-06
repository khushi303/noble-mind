import React from 'react'
import { Stars } from './Icons'
import Sliderimg from '../assets/images/webp/slider-img.webp'
import Image from 'next/image'
import purtriangle from '../assets/images/webp/purtriangle.webp'
import SliderData from './SliderData'

const Choose = () => {
    return (
        <div id='choose' className='relative'>
            <div className='container xl:max-w-[1164px] px-3 mx-auto xl:pb-[150px] lg:pb-[100px] md:pb-[70px] sm:pb-[50px] sm:pt-0 py-[30px]'>
                <div data-aos="fade-right" className="flex items-center gap-[6px] mb-2 justify-center">
                    <Stars />
                    <p className="text-[16px] font-normal leading-[150%] text-[#131200]">Why Choose Us</p>
                </div>
                <h3 data-aos="fade-right" className='sm:text-[48px] text-[30px] leading-[120%] font-light text-black ff_outfit text-center max-w-[521px] mx-auto lg:mb-[52px] mb-[26px]'>Driving Innovation & <span className='font-semibold'>Transforming Industries</span></h3>
                <SliderData />
                <div data-aos="zoom-in-up">
                    <div id='service' className='mt-[60px] overflow-hidden rounded-3xl relative z-10'>
                        <Image src={Sliderimg} alt="Sliderimg" className='md:h-[527px] sm:h-[400px] h-[350px] w-full object-cover rounded-3xl' />
                    </div>
                </div>
            </div>
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute top-[5%] left-[2%] sm:opacity-100 opacity-20' />
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute bottom-[15%] right-[2%] lg:block hidden z-[1]' />
        </div>
    )
}

export default Choose