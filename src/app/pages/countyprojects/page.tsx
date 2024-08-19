import React from "react"
import Topbar from "../../components/Topbar"
import Navbar from "../../components/Navbar"
import HeroSection from "../../components/Hero"
import Footer from "../../components/Footer"

export default function Page() {
    return <>
    <Topbar/>
    <Navbar/>
    <HeroSection imageUrl="/Nabuyole-Falls.jpg" altText="Nabuyole Falls" />
    <Footer/>
    </>
  }