import React from "react"
import Navbar from "./components/Navbar"
import Topbar from "./components/Topbar"
import GridLayout from "./components/GridLayout"
import GreenLine from "./components/GreenLine"
import Footer from "./components/Footer"
import EmblaCarousel from "./components/EmblaCarousel"


export default function Page() {
  const slides = [
    '/1.png',
    '/images/slide2.png',
    '/Nairobi-City-County-15-2.jpg',
    '/images/slide4.jpg',
  ];
  
  return <>
  <Topbar/>
  <Navbar/>
  <div>
      <EmblaCarousel slides={slides} />
    </div>
  <GridLayout/>
  <GreenLine/>
  <Footer/>
  </>
}