import React from 'react';
import Navbar from '../components/Topbar';
import { Carousel } from 'react-responsive-carousel';
import GridLayout from '../components/GridLayout';


export default function Page() {

    return <>
 
    <Navbar/>
    <h1>Hello New page</h1>
    <Carousel/>
    <GridLayout/>
    </>
  }