"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Substitua pelos nomes e caminhos reais das imagens 3D que você exportou do Figma
const aestheticIcons = [
  { id: 1, src: "/icons3D/1.jpg", alt: "Alianças 3D" },
  { id: 2, src: "/icons3D/2.jpg", alt: "CD 3D" },
  { id: 3, src: "/icons3D/3.jpg", alt: "Coração 1 3D" },
  { id: 4, src: "/icons3D/4.jpg", alt: "Coração 2 3D" },
  { id: 5, src: "/icons3D/5.jpg", alt: "Coração 3 3D" }, 
];

export default function AestheticCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efeito de rolagem automática impecável
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aestheticIcons.length);
    }, 2500); // Velocidade da troca (2.5 segundos)
    return () => clearInterval(timer);
  }, []);

  return (
    // Altura controlada para caber entre o "Sobre" e as abas
    <div className="relative w-full h-[140px] flex justify-center items-center overflow-hidden my-6 md:my-10">
      
      {aestheticIcons.map((item, index) => {
        // A Mágica Matemática: Calcula a distância do ícone para o centro
        // Retorna sempre -2, -1, 0 (centro), 1 ou 2
        let offset = (index - currentIndex + aestheticIcons.length) % aestheticIcons.length;
        const half = Math.floor(aestheticIcons.length / 2);
        if (offset > half) offset -= aestheticIcons.length; 

        const isCenter = offset === 0;

        return (
          <motion.div
            key={item.id}
            initial={false}
            animate={{
              // Distância entre os ícones (80px para os lados)
              x: offset * 80, 
              // Protagonista fica gigante (1.6x), os laterais diminuem progressivamente
              scale: isCenter ? 1.6 : 1 - Math.abs(offset) * 0.15,
              // Protagonista é opaco, os laterais vão sumindo
              opacity: isCenter ? 1 : 1 - Math.abs(offset) * 0.35,
              // Efeito de lente da câmera (blur) nos ícones do fundo
              filter: `blur(${Math.abs(offset) * 2.5}px)`,
              // Garante que o do centro fique por cima de todos
              zIndex: 10 - Math.abs(offset),
            }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1], // Curva de aceleração baseada no Framer clássico
            }}
            className="absolute flex justify-center items-center cursor-pointer"
            onClick={() => setCurrentIndex(index)} // Se clicar no ícone, ele vem pro centro
          >
            {/* O container da imagem em si */}
            <div className="w-14 h-14 md:w-16 md:h-16 relative">
              {/* Fallback visual (um quadrado cinza) caso a imagem ainda não exista */}
              <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20" />
              
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-contain drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        );
      })}
      
    </div>
  );
}