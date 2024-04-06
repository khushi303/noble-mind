export default function NewsLetter() {
    return (
        <>
            <div id="blog" className="container xl:max-w-[1164px] px-3 mx-auto relative z-[2] sm:pt-0 pt-[30px]">
                <div data-aos="fade-down" className="bg-[url('/assets/images/png/newsletter.png')] bg-cover bg-center lg:py-[60px] py-[40px] px-[20px] w-full rounded-[20px] ">
                    <h3 className='sm:text-[48px] text-[30px] leading-[120%] font-light text-[#FDFDFF] ff_outfit text-center mb-2'>Subscribe to our <span className='font-semibold'>Newsletter!</span></h3>
                    <p className="text-[16px] font-normal leading-[150%] text-center text-[#FDFDFF]">Be the first to get exclusive offers and the latest news.</p>
                    <div className="bg-[#FFFFFF0D] border border-solid border-[#FDFDFF33] max-w-[448px] w-full mx-auto lg:mt-[36px] mt-[24px] p-[10px] rounded-md flex items-center">
                        <input type="text" name="" id="" placeholder="Enter your email" className="sm:p-[14px] p-1 border-none outline-none bg-transparent ff_outfit text-[16px] font-semibold text-[#FDFDFF] leading-[150%] placeholder:text-[#fdfdff] placeholder:font-semibold placeholder:text-[16px] placeholder:ff_outfit w-full" />
                        <button className="py-[14px] px-[24px] border rounded-[4px] border-solid border-[#FDFDFF] leading-[150%] text-[16px] font-semibold text-[#FDFDFF] hover:bg-[#FDFDFF] hover:text-[#9255d9] transition-all duration-300 ease-linear ">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}