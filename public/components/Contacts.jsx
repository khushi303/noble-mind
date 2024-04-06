"use client"
import Image from "next/image";
import { useState } from "react";
import contactimg from '../assets/images/webp/contactimg.webp'

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
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
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "lastName is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "email is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "email is invalid.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            email: "",
        });
        setFormErrors({
            name: "",
            lastname: "",
            email: "",
        });
    };
    return (
        <>
            <div id="contact" className='container xl:max-w-[1164px] px-3 mx-auto xl:pb-[150px] lg:pb-[100px] md:pb-[70px] sm:pb-[50px] sm:pt-0 py-[30px]'>
                <div className="flex flex-row flex-wrap lg:justify-between justify-center">
                    <div data-aos="zoom-in-down" className="lg:w-[44%] w-full">
                        <h3 className='sm:text-[48px] text-[30px] leading-[120%] font-semibold text-black ff_outfit max-w-[521px] mb-4'>Contact <span className='font-light'>Us</span></h3>
                        <p className="font-normal text-[16px] leading-[150%] text-[#131200] lg:max-w-[409px] opacity-70">Feel free to contact us any time . We will get back to you as soon as we can! </p>
                        <div className="mt-[18px]">
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-[11px] mb-4 w-full">
                                    <div className="w-full">
                                        <label htmlFor="name" className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                                        />
                                        {formErrors.name && (
                                            <p className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70 mb-1">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="lastname" className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70">LastName</label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                                        />
                                        {formErrors.lastname && (
                                            <p className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70 mb-1">{formErrors.lastname}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                                    />
                                    {formErrors.email && (
                                        <p className="error-messagefont-normal text-[16px] leading-[150%] text-[#131200] opacity-70 mb-1">{formErrors.email}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70">Message</label>
                                    <textarea
                                        type="text"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2 max-h-[135px] resize-none"
                                        rows={5}
                                        required
                                    // minLength={8}
                                    />
                                    {formErrors.message && (
                                        <p className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70 mb-1">{formErrors.message}</p>
                                    )}
                                </div>
                                <button type="submit" className="text-[16px] btn_1 font-semibold leading-[150%] text-[#FDFDFF] bg-btn-gradient py-[14px] px-6 rounded-[4px] ff_outfit">
                                    Submit
                                </button>
                            </form>
                            {/* {showSuccessPopup && (
                                <div className="success-popup">
                                    <p>Form submitted successfully!</p>
                                    <button onClick={handlePopupClose}>Close</button>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div data-aos="zoom-in-left" className="lg:w-[51%] md:w-[60%] sm:w-[70%] w-[90%] flex items-center justify-center rounded-[12px] overflow-hidden lg:mt-0 sm:mt-10 mt-8">
                        <Image src={contactimg} alt="contactimg" className="w-full rounded-[12px] hover:scale-105 transition-all duration-300 ease-linear h-full lg:object-cover lg:object-center" />
                    </div>
                </div>
            </div>
        </>
    )
}