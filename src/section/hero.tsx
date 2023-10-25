"use client";
import React from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {useSpring} from '@react-spring/web'

const Hero = () => {
  return (
    <section className={"min-h-screen bg-primary"}>
      
      <Parallax pages={1.5} className="scrollbar-hide">
      <ParallaxLayer offset={0.3} speed={-0.3}>
          <Image
            className="absolute top-0 w-full"
            src={"./moon.svg"}
            width={1440}
            height={1024}
            alt={"moon"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.3}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer4.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.25}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer3.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.2}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer2.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.2} className="flex justify-center">
          <div className="text-xl font-roboto font-black text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-6xl relative top-[30%]" 
          >Front End Developer Challenge</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.15}>
          <Image
            className="absolute bottom-[30%] w-full"
            src={"./drone.svg"}
            width={1440}
            height={1024}
            alt={"drone"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.15}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer1.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={-0.15}>
          <div className="h-screen w-screen bg-[#001842]"></div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Hero;
