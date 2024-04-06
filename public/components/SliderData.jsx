"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { OneSvg, Twosvg, Threesvg } from "./Icons";

export default function SliderData() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div data-aos="zoom-in" className="px-3">
                <div className='bg-[#FDFDFF0D] hov_active cursor-pointer border border-solid border-[#A854E933] rounded-xl sm:p-[18px] p-4 md:h-[208px] sm:h-[240px] h-[210px]'>
                    <div className='w-[36px] h-[36px] border-[6px] border-solid border-[#A854E93D] rounded-[50%] flex items-center justify-center'>
                        <OneSvg />
                    </div>
                    <h4 className='ff_outfit text-[20px] font-normal text-[#131200] leading-[129%] mt-[11px]'>Customer-Centric</h4>
                    <p className='text-[16px] font-normal leading-[150%] opacity-70 text-[#131200] mt-1'>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className="px-3">
                <div className='bg-[#FDFDFF0D] hov_active cursor-pointer border border-solid border-[#A854E933] rounded-xl sm:p-[18px] p-4 md:h-[208px] sm:h-[240px] h-[210px]'>
                    <div className='w-[36px] h-[36px] border-[6px] border-solid border-[#A854E93D] rounded-[50%] flex items-center justify-center'>
                        <Twosvg />
                    </div>
                    <h4 className='ff_outfit text-[20px] font-normal text-[#131200] leading-[129%] mt-[11px]'>Workplace Harmony</h4>
                    <p className='text-[16px] font-normal leading-[150%] opacity-70 text-[#131200] mt-1'>Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className="px-3">
                <div className='bg-[#FDFDFF0D] hov_active cursor-pointer border border-solid border-[#A854E933] rounded-xl sm:p-[18px] p-4 md:h-[208px] sm:h-[240px] h-[210px]'>
                    <div className='w-[36px] h-[36px] border-[6px] border-solid border-[#A854E93D] rounded-[50%] flex items-center justify-center'>
                        <Threesvg />
                    </div>
                    <h4 className='ff_outfit text-[20px] font-normal text-[#131200] leading-[129%] mt-[11px]'>Ethical Leadership</h4>
                    <p className='text-[16px] font-normal leading-[150%] opacity-70 text-[#131200] mt-1'>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className="px-3">
                <div className='bg-[#FDFDFF0D] hov_active cursor-pointer border border-solid border-[#A854E933] rounded-xl sm:p-[18px] p-4 md:h-[208px] sm:h-[240px] h-[210px]'>
                    <div className='w-[36px] h-[36px] border-[6px] border-solid border-[#A854E93D] rounded-[50%] flex items-center justify-center'>
                        <Threesvg />
                    </div>
                    <h4 className='ff_outfit text-[20px] font-normal text-[#131200] leading-[129%] mt-[11px]'>Ethical Leadership</h4>
                    <p className='text-[16px] font-normal leading-[150%] opacity-70 text-[#131200] mt-1'>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className="px-3">
                <div className='bg-[#FDFDFF0D] hov_active cursor-pointer border border-solid border-[#A854E933] rounded-xl sm:p-[18px] p-4 md:h-[208px] sm:h-[240px] h-[210px]'>
                    <div className='w-[36px] h-[36px] border-[6px] border-solid border-[#A854E93D] rounded-[50%] flex items-center justify-center'>
                        <Threesvg />
                    </div>
                    <h4 className='ff_outfit text-[20px] font-normal text-[#131200] leading-[129%] mt-[11px]'>Ethical Leadership</h4>
                    <p className='text-[16px] font-normal leading-[150%] opacity-70 text-[#131200] mt-1'>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                </div>
            </div>
        </Slider>
    );
}
