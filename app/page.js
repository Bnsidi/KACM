import Image from 'next/image'
import Navbar from "../app/compenment/Navbar/Navbar"
import Hero from "@/app/compenment/Hero/Hero";
export default function Home() {
  return (
   <>
     <Navbar/>
       <Hero/>
   </>
  )
}
