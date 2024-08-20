import React from "react"
import Navbar from "./components/Navbar"
import Topbar from "./components/Topbar"
import GridLayout from "./components/GridLayout"
import GreenLine from "./components/GreenLine"
import Footer from "./components/Footer"
import EmblaCarousel from "./components/EmblaCarousel"


export default function Page() {
  const slides = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
  ];
  
  return <>
  <Topbar/>
  <Navbar/>
  <EmblaCarousel slides={slides} />
  <GridLayout/>
  <GreenLine/>
  <Footer/>
  </>
}