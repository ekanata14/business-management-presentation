"use client";
// Library
import React from "react";
import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import { Button } from "@/components/ui/button";
import IndofoodLogo from "@/public/images/indofood_logo.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PinContainer } from "@/components/ui/3d-pin";
import { Timeline } from "@/components/ui/timeline";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SparklesCore } from "@/components/ui/sparkles";

// Image
import ekanataImage from "@/public/images/ekanata.jpeg";
import widiImage from "@/public/images/widi_fix.png";
import gungRahmaImage from "@/public/images/gungrahma.jpg";
import krisnaImage from "@/public/images/krisna.png";
import eningImage from "@/public/images/ening.jpg";

// Product Image
import bogasari from "@/public/images/bogasari.png";
import dapurIndofood from "@/public/images/dapur_indofood.png";
import indomie from "@/public/images/indomie.png";
import indomilk from "@/public/images/indomilk.png";
import inovasi from "@/public/images/inovasi.png";
import minumanIndofood from "@/public/images/minuman_indofood.jpg";
import pastaIndofood from "@/public/images/pasta_indofood.png";
import snackIndofood from "@/public/images/snack_indofood.png";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function Home() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const cards = cardData.map((card, index) => (
    // @ts-ignore
    <Card key={card.src} card={card} index={index} />
  ));

  const bogasariCards = bogasariCardData.map((card, index) => (
    // @ts-ignore
    <Card key={card.src} card={card} index={index} />
  ));

  const inovationCard = productInovationData.map((card, index) => (
    // @ts-ignore
    <Card key={card.src} card={card} index={index} />
  ));

  const data = [
    {
      title: "1990",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk didirikan dengan nama PT Panganjaya
            Intikusuma pada tahun 1990 sebagai badan usaha yang bergerak di
            bidang makanan ringan.
          </p>
        </div>
      ),
    },
    {
      title: "1994",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Panganjaya Intikusuma mengganti nama menjadi PT Indofood Sukses
            Makmur Tbk.
          </p>
        </div>
      ),
    },
    {
      title: "1995",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk memulai integrasi bisnisnya melalui
            akuisisi Bogasari.
          </p>
        </div>
      ),
    },
    {
      title: "1997",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk melakukan ekspansi ke agribisnis,
            perkebunan, distribusi.
          </p>
        </div>
      ),
    },
    {
      title: "2008",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk melakukan ekspansi ke dairy dengan
            mengakuisisi PT Indolakto dan juga memasuki usaha gula dengan
            mengakuisisi PT Lajuperdana Indah.
          </p>
        </div>
      ),
    },
    {
      title: "2013",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk mulai memasuki kegiatan usaha minuman.
          </p>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:ext-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk mulai mengembangkan usaha minumannya
            dengan memasuki bidang usaha air minum dalam kemasan dengan
            mengakuisisi merek Club.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk berhasil mengakuisisi Pinehill Company
            Limited yang merupakan produsen mie instan yang beroperasi di
            Afrika, Timur Tengah dan Eropa Tenggara.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            PT Indofood Sukses Makmur Tbk berhasil mengakuisisi seluruh
            kepemilikan saham Fritolay Netherlands Holding B.V.
          </p>
        </div>
      ),
    },
  ];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {/* hero-section-start */}
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
      {/* hero-section-end */}
      {/* our-teams-section-start */}
      <section
        className="h-full w-screen bg-neutral-800 flex flex-col items-center py-32 md:py-40 gap-20"
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
            title="instagram.com/achjoox"
            href="https://instagram.com/achjoox"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Gung Rahma | 230030178
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat materi</span>
              </div>
              <Image
                src={gungRahmaImage}
                alt="gungRahmaImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/widianniii"
            href="https://instagram.com/widianniii"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Widi | 230030137
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat materi</span>
              </div>
              <Image
                src={widiImage}
                alt="widiImage"
                className="w-full rounded-lg mt-4 object-cover object-top h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/krisnap20"
            href="https://instagram.com/krisnap20"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Krisna Putra | 230030194
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat materi</span>
              </div>
              <Image
                src={krisnaImage}
                alt="krisnaImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
          <PinContainer
            title="instagram.com/eningsvtrii_"
            href="https://instagram.com/eningsvtrii_"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-md !pb-2 !m-0 font-bold text-xl text-slate-100">
                Ening Savitri | 230030459
              </h3>
              <div className="text-xl !m-0 !p-0 font-normal">
                <span className="text-slate-500">Yang buat materi</span>
              </div>
              <Image
                src={eningImage}
                alt="ekanataImage"
                className="w-full rounded-lg mt-4 object-cover h-64"
              ></Image>
            </div>
          </PinContainer>
        </div>
      </section>
      {/* our-teams-section-end */}
      {/* topic-background-start */}
      <section
        className="h-screen w-screen flex justify-center items-center flex-col"
        id="topic"
      >
        <BackgroundBeamsWithCollision>
          <div className="container flex flex-col items-center justify-center h-full w-full gap-20">
            <h1
              className="text-4xl md:text-8xl"
              data-aos="fade-up"
              data-aos-once="true"
            >
              Latar Belakang
            </h1>
            <div
              className="flex flex-col items-center justify-center gap-10"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <p className="text-lg md:text-2xl text-justify px-10">
                Indofood merupakan sebuah perusahaan Total Food Solutions dengan
                kegiatan operasional yang mencakup seluruh tahapan proses
                produksi makanan, mulai dari produksi dan pengolahan bahan baku
                hingga menjadi produk akhir yang tersedia di pasar. Indofood
                dikenal sebagai perusahaan yang mapan dan terkemuka di setiap
                kategori bisnisnya. Dalam menjalankan kegiatan operasionalnya,
                Indofood memperoleh manfaat dari skala ekonomis serta
                ketangguhan model bisnisnya yang terdiri dari empat Kelompok
                Usaha Strategis yaitu <br />
                <br />{" "}
                <strong>
                  Produk Konsumen Bermerek (CBP), Bogasari, Agribisnis dan
                  distribusi
                </strong>
              </p>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
      {/* topic-background-end */}
      {/* history-section-start */}
      <div className="w-full">
        <Timeline data={data} />
      </div>
      {/* history-section-end */}
      {/* vision-mission-section-start */}

      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          title="
Perusahaan Total Food Solutions"
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      {/* vision-mission-section-end */}
      {/* nilai-section-start */}
      <div className="h-screen m w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-justify">
            “Dengan disiplin sebagai falsafah hidup, Kami menjalankan usaha kami
            dengan menjunjung tinggi integritas; Kami menghargai seluruh
            pemangku kepentingan dan secara bersama-sama membangun kesatuan
            untuk mencapai keunggulan dan inovasi yang berkelanjutan.”
          </h1>
        </div>
        <BackgroundBeams />
      </div>
      {/* nilai-section-end */}
      {/* product-section-start */}
      <div className="w-full">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Consumer Branded Product
        </h2>
        <Carousel items={cards} />
      </div>
      <div className="w-full">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Bogasari
        </h2>
        <Carousel items={bogasariCards} />
      </div>
      <div className="w-full">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Produk Inovasi
        </h2>
        <Carousel items={inovationCard} />
      </div>
      {/* product-section-end */}
      {/* challange-section-start */}
      <div className="w-full h-screen py-20">
        <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="div"
            >
              <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                Tantangan
              </h2>
              <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                Persaingan yang ketat antar produk <br /> "how to relate to the
                younger audience"
              </p>
            </motion.div>
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div>
      </div>
      {/* challange-section-end */}
      {/* conclusion-section-start */}
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20">
          Indofood
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {/* conclusion-section-end */}
    </>
  );
}

const cardData = [
  {
    category: "Consumer Branded Product",
    title: "Mie Instant",
    src: indomie,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
          Produk pertama yang dikeluarkan oleh <strong>Indofood</strong> adalah{" "}
          <strong>Mi Instan Indomie</strong>, diproduksi pada tahun{" "}
          <strong>1967</strong> dengan varian pertama yang diluncurkan adalah{" "}
          <strong>Indomie Kuah Rasa Kaldu Ayam</strong>, yang kemudian diikuti
          oleh berbagai varian rasa lainnya.
        </p>
        <Image
          src={indomie}
          alt="indomie"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Consumer Branded Product",
    title: "Product Diary",
    src: indomilk,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          Indofood memproduksi susu melalui anak perusahaannya,{" "}
          <strong>Indofood Nutrition pada tahun 1672</strong>. Produk susu
          mereka mencakup berbagai jenis seperti{" "}
          <strong> susu kental manis, susu bubuk,</strong> dan{" "}
          <strong>susu UHT</strong> yang dipasarkan dengan merek seperti{" "}
          <strong>Indomilk.</strong>
        </p>
        <Image
          src={indomilk}
          alt="indomilk"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Consumer Branded Product",
    title: "Dapur Indofood",
    src: dapurIndofood,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          Produk <strong>Dapur Indofood</strong> diproduksi oleh{" "}
          <strong>PT Indofood CBP Sukses Makmur Tbk</strong>. Semua produk Dapur
          Indofood dirancang untuk mempermudah proses memasak dengan kualitas
          terjamin dan rasa khas yang sesuai selera masyarakat Indonesia.
        </p>
        <Image
          src={dapurIndofood}
          alt="dapurIndofood"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },

  {
    category: "Consumer Branded Product",
    title: "Snack",
    src: snackIndofood,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          Diproduksi oleh <strong>PT Indofood CBP Sukses Makmur Tbk</strong>
          Produk snack dari Indofood sering kali menghadirkan kolaborasi
          menarik, inovasi rasa, dan adaptasi selera lokal. Hal ini membuat
          mereka tetap relevan dan digemari oleh berbagai kalangan, dari
          anak-anak hingga dewasa.
        </p>
        <Image
          src={snackIndofood}
          alt="snackIndofood"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Consumer Branded Product",
    title: "Minuman Ringan",
    src: minumanIndofood,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          Dirilis untuk melengkapi inovasi makanan ringan mereka. masih di
          produksi oleh anak perusahaan{" "}
          <strong>PT Indofood CBP Sukses Makmur Tbk</strong> yang bertujuan
          memenuhi kebutuhan konsumen.
        </p>
        <Image
          src={minumanIndofood}
          alt="minumanIndofood"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
];

const bogasariCardData = [
  {
    category: "Bogasari",
    title: "Tepung Terigu",
    src: bogasari,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          <strong>Tepung terigu</strong> adalah bahan pokok yang digunakan dalam
          berbagai masakan sehari-hari, Indofood ingin menyediakan produk dapat
          diandalkan oleh para ibu rumah tangga, pelaku usaha kuliner, serta
          industri makanan.
        </p>
        <Image
          src={bogasari}
          alt="Bogasari"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Bogasari",
    title: "Pasta",
    src: pastaIndofood,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          dirilis untuk memenuhi tren makanan internasional yang semakin populer
          di Indonesia, terutama masakan Italia. La Fonte memberikan pilihan
          pasta berkualitas bagi konsumen yang ingin menikmati hidangan pasta di
          rumah dengan mudah.
        </p>
        <Image
          src={pastaIndofood}
          alt="pastaIndofood"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
];

const productInovationData = [
  {
    category: "Produk Inovasi",
    title: "Es Krim & Chitato Indomie",
    src: inovasi,
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-10 text-justify">
          Chitato x Indomie diluncurkan sekitar tahun 2018. ingin menghadirkan
          inovasi untuk menarik perhatian konsumen yang lebih muda dan mencari
          rasa baru. Kolaborasi ini bertujuan untuk memperkenalkan konsep
          <strong>"comfort food"</strong> dengan menggabungkan dua elemen
          populer dalam satu produk yang unik.
        </p>
        <Image
          src={inovasi}
          alt="Bogasari"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
];
