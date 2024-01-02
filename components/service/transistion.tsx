"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import VerticalCurve from "../curve-line.tsx/vertical-curve";
import { menuState } from "@/atoms/menu-atom/menu-state";
import { useRecoilState } from "recoil";

const TransistionAnimation = ({ title }: { title: any }) => {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const transistionRef = useRef<any>(null);

  useEffect(() => {
    gsap.from(transistionRef.current, {
      position: "absolute",
      bottom: "0%",
      opacity: 1,
      duration: 1,
      background: "black",
      ease: "expoScale(0.5,7,power1.inOut)",
    });
    gsap.to(transistionRef.current, {
      delay: 1.15,
      position: "absolute",
      top: "-100%",
      background: "black",
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7,power1.inOut)",
    });
  }, []);
  return (
    <>
      <div
        ref={transistionRef}
        className={twMerge(
          "transistion-wrapper z-[99] w-full h-screen min-h-[100dvh] bg-black"
        )}
      >
        <div className="flex justify-center items-center w-full h-full  ">
          <h1 className="text-3xl capitalize text-white">{title}</h1>
        </div>
        <VerticalCurve />
      </div>
    </>
  );
};

export default TransistionAnimation;
