import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import HomeCarousel from './carouselHome/HomeCarousel'
import Footer from './footer/footer'
import Header from './header/header'

export default function HomeTemplate(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
})
  return (
    <>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}
