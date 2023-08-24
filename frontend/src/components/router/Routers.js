import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import MasonryImagesGallery from "../Image-gallery/MasonryImagesGallery";
import About from "../about/About";



const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/Home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tour" element={<Tour/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/thank-you" element ={<ThankYou/>}/>
        <Route path="/tours/search" element ={<SearchResultList/>}/>
        <Route path="/gallery" element ={<MasonryImagesGallery/>}/>
        <Route path="/about" element ={<About/>}/>
      </Routes>
  )
}

export default Routers;