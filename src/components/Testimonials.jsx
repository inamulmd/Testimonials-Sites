import React from 'react'
import Card from './Card'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews = props.reviews;

    const [index,setIndex] = useState(0);
     
    function leftshiftHandler() {
       if(index - 1 < 0) {
        setIndex(reviews.length -1 );
       }
       else {
        setIndex(index-1)
       }
    }

    function rightshifHandler() {
       if(index+1 >= reviews.length){
        setIndex(0);
       }
       else{
        setIndex(index+1);
       }
    }

    function surprisehandler() {
          let randomIndex = Math.floor(Math.random()* reviews.length);
          setIndex(randomIndex);
    }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
       mt-10 p-10 transition-all duration-700">
        
            <Card  review ={reviews[index]}/>

          <div className="flex  justify-center text-3xl text-violet-400 font-bold mt-5 text-center  mx-auto">
            <button 
              onClick= {leftshiftHandler} 
               className=" cursor-pointer hover:text-violet-500 ">
                <FaChevronLeft/>
            </button>
            <button 
            onClick= {rightshifHandler}
            className=" cursor-pointer ml-2 hover:text-violet-500 ">
                <FaChevronRight/>
            </button>
          </div>

          <div>
              <button 
              onClick={surprisehandler}
              className=" bg-violet-400 mt-5 hover:bg-violet-500 transition-all duration-200
               cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-[4px]">
                 Surprise Me
              </button>
          </div>

    </div>
  )
}

export default Testimonials