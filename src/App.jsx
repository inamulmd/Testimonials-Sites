import { useState } from 'react'
import './App.css'
import reviews from "./data"
import Testimonials from './components/Testimonials';

function App() {
  

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

        <div className="flex flex-col  items-center text-center">

          <h1 className="text-4xl font-bold">Our Testiomonials</h1>

          <div className="bg-violet-400 h-[4px] w-1/4 mt-1"></div>

          <Testimonials reviews={reviews}/>
          
        </div>  
    </div>
  )
}

export default App
