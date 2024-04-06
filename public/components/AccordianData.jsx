"use client"

import { AccBtn } from "./Icons";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function DefaultAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="flex flex-col w-full gap-[18px] max-w-[740px] mx-auto">
                <Accordion open={open === 1} className={`${open === 1 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md sm:px-6 sm:py-[22.67px] p-4 shadow-[0px_4px_32px_0px_#00000014]`}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="p-0 flex acc1 justify-between w-full text-start border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">What is Artificial Intelligence (AI)?</p> <div className={`${open === 1 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                    <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                        Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className={`${open === 2 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md sm:px-6 sm:py-[22.67px] p-4 shadow-[0px_4px_32px_0px_#00000014]`}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="p-0 flex acc1 justify-between w-full text-start border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How does AI benefit our company?</p> <div className={`${open === 2 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                    <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                        Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className={`${open === 3 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md sm:px-6 sm:py-[22.67px] p-4 shadow-[0px_4px_32px_0px_#00000014]`}>
                    <AccordionHeader onClick={() => handleOpen(3)} className="p-0 flex acc1 justify-between w-full text-start border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">What types of AI technologies are relevant to our industry?</p> <div className={`${open === 3 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                    <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                        Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} className={`${open === 4 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md sm:px-6 sm:py-[22.67px] p-4 shadow-[0px_4px_32px_0px_#00000014]`}>
                    <AccordionHeader onClick={() => handleOpen(4)} className="p-0 flex acc1 justify-between w-full text-start border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How can our employees adapt to AI integration?</p> <div className={`${open === 4 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                    <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                        Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} className={`${open === 5 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md sm:px-6 sm:py-[22.67px] p-4 shadow-[0px_4px_32px_0px_#00000014]`}>
                    <AccordionHeader onClick={() => handleOpen(5)} className="p-0 flex acc1 justify-between w-full text-start border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How can our company ensure data security with AI?</p> <div className={`${open === 5 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                    <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                        Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    );
}