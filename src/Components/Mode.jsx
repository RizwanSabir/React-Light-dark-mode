import React, { useState } from "react";
import '../App.css'


export const Mode = () => {

  const [dark,setDark]=useState('Dark')

 

  function toggleMode(){
    document.documentElement.classList.toggle('dark')
    let mode= dark==='Dark'?'Light':'Dark'
    setDark(() =>  mode)
  }

 
  return (
    <>
    <div className=" flex  flex-col w-[700px]  h-screen  dark:text-white justify-center items-center container mx-auto dark:bg-black">
      <div className="text-center text-xl font-bold  mb-6">
        Tailwind Dark/Light Mode
      </div>
      <p className="dark:border-2 border-2  dark:border-white p-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid nobis sunt assumenda, dicta corporis vero voluptatem molestiae esse nemo voluptatum officia pariatur voluptate repudiandae velit voluptas eius cum consequatur.
      Quas illo commodi l laudantium numquam, cum quidem ratione ipsa eius animi, sequi nulla asperiores hic. Aspernatur animi asperiores quis.</p>
        <button  onClick={toggleMode} className="mt-10 border-2 w-32 py-3 px-5 ">{dark} Mode</button>
    </div>
    </>

  );
};
