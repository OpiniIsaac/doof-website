import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <Navbar/>
 <Header/>
 <Why/>
 <HowItWorks/>
    </>
  );
}
