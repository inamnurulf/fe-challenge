"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef1 = useRef<HTMLDivElement | null>(null);
  const parallaxRef2 = useRef<HTMLDivElement | null>(null);
  const parallaxRef3 = useRef<HTMLDivElement | null>(null);
  const parallaxRef4 = useRef<HTMLDivElement | null>(null);
  const parallaxRefDrone = useRef<HTMLDivElement | null>(null);
  const parallaxRefMoon = useRef<HTMLDivElement | null>(null);
  const parallaxRefText = useRef<HTMLDivElement | null>(null);


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      parallaxRef1.current &&
      parallaxRef2.current &&
      parallaxRef3.current &&
      parallaxRef4.current &&
      parallaxRefDrone.current&&
      parallaxRefMoon.current&&
      parallaxRefText.current
      
    ) {
      parallaxRef1.current.style.transform = `translateY(+${scrollY * 1}px)`;
      parallaxRef2.current.style.transform = `translateY(+${scrollY * 0.8}px)`;
      parallaxRef3.current.style.transform = `translateY(+${scrollY * 0.5}px)`;
      parallaxRef4.current.style.transform = `translateY(+${scrollY * 0.0}px)`;
      parallaxRefDrone.current.style.transform = `translateY(+${scrollY * 0.3}px)`;
      parallaxRefMoon.current.style.transform = `translateY(+${scrollY * 0.7}px)`;
      parallaxRefText.current.style.transform = `translateY(+${scrollY * 0.9}px)`;

    }
  }, [scrollY]);

  return (
    <section className="md:h-[120vh] h-[100vh] relative overflow-hidden ">
      <div ref={parallaxRefMoon} className="absolute top-0 w-full">
        <Image
         className=''
          src="./moon.svg"
          width={386}
          height={386}
          alt="city4"
        />
      </div>
      <div ref={parallaxRef1} className="absolute bottom-0 w-full">
        <Image
         className='w-full min-w-[1000px]'
          src="./layer4.svg"
          width={1440}
          height={1024}
          alt="city4"
        />
      </div>
      <div ref={parallaxRef2} className="absolute bottom-0 w-full">
        <Image
        className='w-full min-w-[1000px]'
          src="./layer3.svg"
          width={1440}
          height={1024}
          alt="city3"
        />
      </div>
      <div ref={parallaxRef3} className="absolute bottom-0 w-full">
        <Image
        className='w-full min-w-[1000px]'
          src="./layer2.svg"
          width={1440}
          height={1024}
          alt="city2"
        />
      </div>
      <div ref={parallaxRefText} className="absolute w-full h-screen flex justify-center ">
      <div className="font-roboto font-black text-center text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-6xl relative top-[40%]" 
          >Front End Developer Challenge</div>
      </div>
      
      <div ref={parallaxRef4} className="absolute bottom-0 w-full">
        <Image
        className='w-full min-w-[1000px]'
          src="./layer1.svg"
          width={1440}
          height={1024}
          alt="city1"
        />
      </div>
      <div ref={parallaxRefDrone} className="absolute w-full">
        <Image
        className='w-full min-w-[1000px]'
          src="./drone.svg"
          width={1440}
          height={1024}
          alt="drone"
        />
      </div>
    </section>
  );
};

export default Hero;
