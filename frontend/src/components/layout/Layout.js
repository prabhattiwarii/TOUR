import React from 'react'
import './Layout.css'
import Header from './../header/Header'
import Routers from './../router/Routers'
import Footer from './../footer/Footer'


const Layout = () => {
  return (
    <div>
    <Header/>
    <Routers/>
    <Footer/>
    
    </div>
    
  )
}

export default Layout;