'use client';

import React, { useState, useEffect } from "react";


const images = [
'unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
'unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
'unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  
  useEffect(() => {
  //intervalにはタイマーを識別する値が入るそのあたいを下にクリーンアップ関数で使います
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); //ここでクリーンアップしてアンマウント時にタイマーを解除します
  }, []);

  return (

    <div className="relative w-full h-150 overflow-hidden rounded-b-[10rem]">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Hero Image ${index + 1}`}
      />
    ))}

      {/* <div */}
      {/*   className="absolute bottom-0 w-full h-40 bg-white" */}
      {/*   style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }} */}
      {/* ></div> */}

        <header class="absolute top-0 left-0 w-full flex items-center px-6 py-4 bg-transparent">
    <div class="text-2xl font-bold text-white">
      MySite
    </div>

    <nav class="hidden md:flex space-x-6 ml-6">
      <a href="#" class="text-white hover:text-gray-200">Home</a>
      <a href="#" class="text-white hover:text-gray-200">About</a>
      <a href="#" class="text-white hover:text-gray-200">Services</a>
    </nav>

    <button class="ml-auto w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow hover:bg-blue-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M3 18h18" />
      </svg>
    </button>
  </header>
    </div>
);}
