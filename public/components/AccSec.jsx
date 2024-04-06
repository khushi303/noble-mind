import AccordianData from './AccordianData';
import purtriangle from '../assets/images/png/purtriangle.png'
import Image from 'next/image';

export default function AccSec() {

    return (
        <div id='faq' className='relative'>
            <div className="container xl:max-w-[1164px] px-3 mx-auto xl:pb-[150px] lg:pb-[100px] md:pb-[70px] sm:pb-[50px] sm:pt-0 py-[30px]">
                <h3 className='sm:text-[48px] text-[30px] leading-[120%] font-light text-black ff_outfit text-center sm:mb-4 mb-3'>Frequently <span className='font-semibold'>Transforming Industries</span></h3>
                <p className="text-[16px] font-normal leading-[150%] text-black opacity-70 max-w-[497px] text-center lg:mb-[52px] md:mb-[36px] mb-[28px] mx-auto">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat mi leo. Nibh nisl consequat metus.</p>
                <div className="relative z-10">
                    <AccordianData />
                </div>
            </div>
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute top-[-3%] left-[2%] lg:opacity-100 opacity-40 z-[1]' />
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute bottom-[35%] right-[2%] lg:opacity-100 opacity-20 z-[1]' />
            <Image src={purtriangle} alt='purtriangle' width={70} className='absolute bottom-[3%] left-[2%] z-[1] lg:opacity-100 opacity-20' />
        </div>
    )
}