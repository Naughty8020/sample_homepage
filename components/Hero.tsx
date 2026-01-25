'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const images = [
'unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
'unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
'unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  
useEffect(() => {
  // intervalにはタイマーを識別する値が入る。その値を下でクリーンアップ
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => {
      console.log(`Image changed: ${prevIndex}`);
      return (prevIndex + 1) % images.length;
    });
  }, 5000);

          console.log(`Rendering image: ${images[currentImageIndex]}`)

  return () => clearInterval(interval); // アンマウント時にタイマーを解除
}, []);


  return (
<div className="
  relative w-full h-[400px] md:h-[450px] lg:h-[850px] overflow-hidden
  [clip-path:ellipse(155%_90%_at_50%_0%)]         
  md:[clip-path:ellipse(140%_85%_at_50%_0%)]     
  lg:[clip-path:ellipse(120%_90%_at_50%_0%)]     
">

{images.map((image, index) => (
  <img
    key={index}
    src={image} // イメージ全部表示して
    alt={`Hero Image ${index + 1}`}
    className={`absolute inset-0 w-full h-full object-cover
   transition-opacity duration-1000 ease-in-out
        ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
  />
))}


      

      {/* <div */}
      {/*   className="absolute bottom-0 w-full h-40 bg-white" */}
      {/*   style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }} */}
      {/* ></div> */}



        <header className="absolute top-0 left-0 w-full flex items-center px-6 py-4 bg-transparent">
<div className="flex items-center gap-2 md:gap-3 lg:gap-4">
  <img
    src="earth.png"
    alt="Logo"
    className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
  />

  <div className="font-shippori text-3xl md:text-4xl lg:text-5xl font-bold text-white">
    架空会社
  </div>
</div>

  
    <nav className="hidden ml-auto md:flex space-x-9  bg-blue-600 px-20 py-4 rounded-full shadow ">
      <Link href="/" className="text-white text-3xl hover:text-gray-200">Home</Link>
      <Link href="#" className="text-white text-3xl hover:text-gray-200">About</Link>
      <Link href="#" className="text-white text-3xl hover:text-gray-200">Services</Link>
      <Link href="contact" className="text-white text-3xl hover:text-gray-200">お問合わせ</Link>

    </nav>

    {/* <button className="ml-auto w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow hover:bg-blue-700 transition"> */}
    {/*   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
    {/*     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M3 18h18" /> */}
    {/*   </svg> */}
    {/* </button> */}
  </header>
    </div>
);}
