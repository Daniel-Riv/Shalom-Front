import React from 'react'
import { Cards } from '../components/Card/Cards'
import { CarouselC } from '../components/Carousel/CarouselC'
import { Navbar } from '../components/Navbar/Navbar'
import { Vision } from '../components/Vision/Vision'


export const Home = () => {
  return (
    <>
        <Navbar/>
        <hr/>
        <CarouselC/>
        <Vision/>
        <Cards/>

    </>
  )
}
