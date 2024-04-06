"use client"
import { React, useEffect, useState } from 'react'
import "@/styles/globals.css";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from '../../public/components/Preloader';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 2800);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Noble Mind</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
      </Head>
      {loading ? (
        <div className='overflow-hidden'>
          <Component {...pageProps} />
        </div>
      ) : (<><Preloader /></>)}
    </>);
}
