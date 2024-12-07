"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import { Button } from "@/components/ui/button";
import IndofoodLogo from "@/public/images/indofood_logo.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PinContainer } from "@/components/ui/3d-pin";

import ekanataImage from "@/public/images/ekanata.jpeg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      <section
        className="h-screen w-screen flex justify-center items-center flex-col"
        id="hero"
      >
        <BackgroundBeamsWithCollision>
          <Image
            src={IndofoodLogo}
            className="h-fit w-fit"
            alt="indofood-logo"
            data-aos="fade-up"
            data-aos-once="true"
          ></Image>
        </BackgroundBeamsWithCollision>
      </section>
      <section
        className="h-full w-screen bg-neutral-800 flex flex-col items-center py-10 md:py-20 gap-20"
        id="teams"
      >
        <h1
          className="text-4xl md:text-8xl"
          data-aos="fade-up"
          data-aos-once="true"
        >
          OUR TEAMS
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-24"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/ekanata_"
            href="https://instagram.com/ekanata_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Eka Nata | 230030172
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat web</span>
              </div>
              <Image
                src={ekanataImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
        </div>
      </section>
    </>
  );
}
