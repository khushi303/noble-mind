"use client"
import { useState } from "react";
export default function NewsLetter() {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        email: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        };
        const errors = {};
        if (!regex.email.test(formData.email)) {
            errors.email = "email is invalid.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };
    if (showSuccessPopup === true) {
        document.body.classList.add("overflow-hidden")
    } else {
        document.body.classList.remove("overflow-hidden")
    }
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            email: "",
        });
        setFormErrors({
            email: "",
        });
    };
    return (
        <>
            <div id="blog" className="container xl:max-w-[1164px] px-3 mx-auto relative z-[2] sm:pt-0 pt-[30px]">
                <div data-aos="fade-down" className="bg-[url('/assets/images/webp/newsletter.webp')] bg-cover bg-center lg:py-[60px] py-[40px] px-[20px] w-full rounded-[20px] ">
                    <h3 className='sm:text-[48px] text-[30px] leading-[120%] font-light text-[#FDFDFF] ff_outfit text-center mb-2'>Subscribe to our <span className='font-semibold'>Newsletter!</span></h3>
                    <p className="text-[16px] font-normal leading-[150%] text-center text-[#FDFDFF]">Be the first to get exclusive offers and the latest news.</p>

                    <form onSubmit={handleSubmit} className="bg-[#FFFFFF0D] border border-solid border-[#FDFDFF33] max-w-[448px] w-full mx-auto lg:mt-[36px] mt-[24px] p-[10px] rounded-md flex items-center relative">
                        <input type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={handleChange} className="sm:p-[14px] p-1 border-none outline-none bg-transparent ff_outfit text-[16px] font-semibold text-[#FDFDFF] leading-[150%] placeholder:text-[#fdfdff] placeholder:font-semibold placeholder:text-[16px] placeholder:ff_outfit w-full" />
                        <button type="submit" className="py-[14px] px-[24px] border rounded-[4px] border-solid border-[#FDFDFF] leading-[150%] text-[16px] font-semibold text-[#FDFDFF] hover:bg-[#FDFDFF] hover:text-[#9255d9] transition-all duration-300 ease-linear ">Subscribe</button>
                        {formErrors.email && (
                            <p className="absolute -bottom-9 left-0 font-normal text-[12px] leading-[150%] text-[#9255d9] mb-1 bg-white rounded-md  text-center mt-2 inline-block px-3 py-1">{formErrors.email}</p>
                        )}
                    </form>

                </div>
            </div>
            {showSuccessPopup && (
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm z-40">
                    <div className="md:p-10 p-4 border-[2px] border-solid border-[#A854E9] bg-white flex flex-col items-center justify-center gap-7 rounded-md">
                        <p className="text-[24px] font-semibold text-[#131200] leading-[120%]">Form submitted successfully!</p>
                        <button onClick={handlePopupClose} className="py-2 px-4 bg-btn-gradient btn_1 rounded-lg text-white text-[16px] leading-[150%] mx-auto">Close</button>
                    </div>
                </div>
            )}
        </>

    )
}