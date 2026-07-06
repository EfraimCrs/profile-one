"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. Coloque as imagens dos seus mapas na pasta public/maps/
const baseMaps = [
  { id: 1, src: "/maps/map1.png", alt: "Mapa" },
  { id: 2, src: "/maps/map2.png", alt: "Mapa" },
  { id: 3, src: "/maps/map3.png", alt: "Mapa" },
];

// 2. O truque da duplicação (crucial aqui já que você tem poucas imagens)
const geoItems = [
  ...baseMaps, 
  ...baseMaps.map(mapa => ({ ...mapa, id: mapa.id + 10 })),
  ...baseMaps.map(mapa => ({ ...mapa, id: mapa.id + 20 })) // Triplicado para garantir o loop liso com apenas 3 imagens originais
];

export default function GeoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % geoItems.length);
    }, 3500); // Mais lento (3.5s) para dar tempo da pessoa ler o mapa
    return () => clearInterval(timer);
  }, []);

  return (
    // Altura maior para acomodar os mapas
    <div className="relative w-full h-[250px] md:h-[350px] flex justify-center items-center overflow-hidden mt-6 mb-12">
      
      {geoItems.map((item, index) => {
        let offset = (index - currentIndex + geoItems.length) % geoItems.length;
        const half = Math.floor(geoItems.length / 2);
        if (offset > half) offset -= geoItems.length; 

        const isCenter = offset === 0;
        const isVisible = Math.abs(offset) <= 2;

        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              // Usamos % em vez de pixels fixos para ficar responsivo no celular e PC
              x: `${offset * 75}%`, 
              scale: isCenter ? 1 : 0.85 - Math.abs(offset) * 0.1,
              opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
              filter: isCenter ? "blur(0px)" : `blur(${Math.abs(offset) * 3}px)`,
              zIndex: 10 - Math.abs(offset),
            }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
            }}
            className={`absolute flex justify-center items-center ${isVisible ? 'cursor-pointer' : 'pointer-events-none'}`}
            onClick={() => isVisible && setCurrentIndex(index)}
          >
            {/* Proporção 16:9 (paisagem) para os mapas */}
            <div className="w-[280px] h-[160px] md:w-[500px] md:h-[280px] relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover relative z-10"
              />
            </div>
          </motion.div>
        );
      })}
      
    </div>
  );
}