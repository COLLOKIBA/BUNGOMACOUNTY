import React from "react"
import Navbar from "./components/Navbar"
import Topbar from "./components/Topbar"
import NextJsCarousel from "./components/Carousel"
import GridLayout from "./components/GridLayout"
import GreenLine from "./components/GreenLine"

export default function Page() {

  return <>
  <Topbar/>
  <Navbar/>
  <NextJsCarousel/>
  <GridLayout/>
  <GreenLine/>
  </>
}