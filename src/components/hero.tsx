import React, { useState } from 'react';
import { Button } from './ui/button';
export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className='text-[15px] text-[#52525B] mb-[20px] font-bold'>Avgeeks favorite destination!</div>
      <div className='text-8xl font-bold bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent'>Aviation Hub!</div>
     
		  <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	
    </div>
  );
}