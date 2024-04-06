"use client"
import { useState, useEffect } from "react";
import Header from "../../public/components/Header";
import About from "../../public/components/About";
import Choose from "../../public/components/Choose";
import Contacts from "../../public/components/Contacts";
import AccSec from "../../public/components/AccSec";
import NewsLetter from "../../public/components/NewsLetter";
import Footer from "../../public/components/Footer";
import Image from "next/image";
import TopBtn from '../../public/assets/images/webp/topbtn.webp'

export default function Home() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <main className="relative">
        <Header />
        <About />
        <Choose />
        <Contacts />
        <AccSec />
        <NewsLetter />
        <Footer />
        <div className={`${backToTop ? '' : 'hidden'} rounded-[50%] bg-btn-gradient sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center fixed bottom-7 right-7 z-40 cursor-pointer`} onClick={() => top()}>
          <Image src={TopBtn} alt="TopBtn" className='sm:max-w-[40px] max-w-[30px]' />
        </div>
      </main>
    </>
  );
}
