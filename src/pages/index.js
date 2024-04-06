import Image from "next/image";
import { Exo_2 } from "next/font/google";
import Header from "../../public/components/Header";
import About from "../../public/components/About";
import Choose from "../../public/components/Choose";
import Contacts from "../../public/components/Contacts";
import AccSec from "../../public/components/AccSec";
import NewsLetter from "../../public/components/NewsLetter";
import Footer from "../../public/components/Footer";

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export default function Home() {
  return (
    <>
      <main className={`${exo_2.className}`}>
        <Header />
        <About />
        <Choose />
        <Contacts />
        <AccSec />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
