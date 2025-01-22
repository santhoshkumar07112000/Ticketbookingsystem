import React from 'react'
import "./Dashboard.css"
import { IoSearchOutline } from "react-icons/io5";
import CarouselComponent from './Carousel';



const Dashboard = () => {
  return (
    <>
     <div className="dashboard">
        <div className="DashboardNav">
          
          <div className="title">
            <h2>Book&Enjoy</h2>
          </div>
          <div className="searchui">
             <div className="searchbar">
               <IoSearchOutline />
               <input type="text" placeholder='Search Movies' />
             </div>
          </div>
        </div>
        <div className="carousel">
          <CarouselComponent></CarouselComponent>
        </div>
        <div className="movies">
          <div className="tamilmovies">
            <div className="head">
              <h2>Tamil Movies</h2>
            </div>
            <div className="movies">
              
            </div>
          </div>
         
        </div>
     </div>
    </>
  )
}

export default Dashboard