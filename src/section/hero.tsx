"use client";
import React from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { start } from "repl";

const Hero = () => {
  return (
    <section className={"min-h-screen"}>
      <Parallax pages={1.5}>
        <ParallaxLayer offset={0} speed={-0.8}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer4.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.6}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer3.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer2.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <Image
            className="absolute bottom-0 w-full"
            src={"./layer1.svg"}
            width={1440}
            height={1024}
            alt={"city4"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.19} speed={-0.2}>
          <div className="h-screen w-screen bg-[#001842]"></div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Hero;
