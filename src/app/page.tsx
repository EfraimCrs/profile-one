"use client";

import { useState } from "react";
import { profileInfo } from "@/data/profileData";
import { Icon } from '@iconify/react';
import TabNav from "@/app/components/TabNav";
import ProjectsTab from "@/app/components/Tabs/ProjectsTab";
import ProjectModal from "@/app/components/ProjectModal";
import StacksTab from "@/app/components/Tabs/StacksTab";
import Image from "next/image";
import EducationTab from "@/app/components/Tabs/EducationTab";
import ProfileTab from "@/app/components/Tabs/ProfileTab";
import AestheticCarousel from "@/app/components/AestheticCarousel";
import GeoCarousel from "@/app/components/GeoCarousel";

export default function Home() {
  const [activeTab, setActiveTab] = useState('projects');
  
  // ESTADO DO MODAL: Armazena o ID do projeto que está aberto (ou null se fechado)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4 md:py-16 md:px-8">
      
      <div className="w-full max-w-3xl flex flex-col items-start md:items-center relative">
        
        {/* CABEÇALHO - VERSÃO MOBILE */}
        <div className="md:hidden w-full flex flex-col items-start text-left mb-6">
          <div className="flex flex-row items-center gap-4 w-full mb-4">
            <div className="w-20 h-20 rounded-full flex-shrink-0 border-2 border-gray-600 shadow-xl overflow-hidden relative">
              <Image 
                src={profileInfo.avatarUrl} 
                alt={`Foto de perfil de ${profileInfo.name}`}
                fill 
                className="object-cover" 
                priority 
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold text-white mb-0.5">{profileInfo.name}</h1>
              <h2 className="text-[11px] text-gray-400 mb-1.5">{profileInfo.fullName}</h2>
              <div className="flex gap-3 text-[11px] font-medium text-gray-300">
                <span><strong className="text-white font-semibold">{profileInfo.stats.posts}</strong> post</span>
                <span><strong className="text-white font-semibold">{profileInfo.stats.repositories}</strong> repository</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="text-xs text-gray-300 font-semibold mb-0.5">{profileInfo.role}</p>
            <p className="text-[11px] text-gray-500 mb-3">{profileInfo.location}</p>
            <div className="flex gap-4 text-xl text-gray-400">
              <Icon icon="mdi:linkedin" className="hover:text-white cursor-pointer" />
              <Icon icon="mdi:github" className="hover:text-white cursor-pointer" />
              <Icon icon="mdi:instagram" className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* CABEÇALHO - VERSÃO PC */}
        <div className="hidden md:flex flex-row items-center justify-center gap-8 w-full mb-12">
          <div className="w-32 h-32 rounded-full flex-shrink-0 border-2 border-gray-600 shadow-xl overflow-hidden relative">
            <Image 
              src={profileInfo.avatarUrl} 
              alt={`Foto de perfil de ${profileInfo.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl font-bold text-white mb-1">{profileInfo.name}</h1>
            <h2 className="text-sm text-gray-400 mb-3">{profileInfo.fullName}</h2>
            <div className="flex gap-4 text-sm font-medium text-gray-300 mb-3">
              <span><strong className="text-white font-semibold">{profileInfo.stats.posts}</strong> post</span>
              <span><strong className="text-white font-semibold">{profileInfo.stats.repositories}</strong> repository</span>
            </div>
            <p className="text-sm text-gray-300 font-semibold mb-1">{profileInfo.role}</p>
            <p className="text-xs text-gray-500 mb-4">{profileInfo.location}</p>
            <div className="flex gap-4 text-2xl text-gray-400">
              <Icon icon="mdi:linkedin" className="hover:text-white cursor-pointer transition-colors" />
              <Icon icon="mdi:github" className="hover:text-white cursor-pointer transition-colors" />
              <Icon icon="mdi:instagram" className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* SEÇÃO SOBRE */}
        <div className="w-full mb-8 flex flex-col md:items-center text-left">
          <div className="md:max-w-2xl w-full">
            <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">Sobre</h3>
            <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed">
              {profileInfo.about}
            </p>
          </div>
          
          {/* O CARROSSEL ESTÉTICO 3D */}
          {/*<AestheticCarousel />*/}
        </div>

        {/* NAVEGAÇÃO DAS ABAS */}
        <div className="w-full md:max-w-2xl">
          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* ÁREA DE CONTEÚDO DAS ABAS */}
        <div className="w-full md:max-w-2xl min-h-[300px]">
          
          {/* CONTEÚDO DA ABA DE PROJETOS */}
          {activeTab === 'projects' && (
            <div className="flex flex-col w-full">
              {/* Projetos de Software (Grid) */}
              <ProjectsTab onOpenProject={setSelectedProjectId} />
              
              {/* Seção de Geotecnologias (Carrossel) */}
              <div className="mt-12 md:mt-16 w-full text-left">
                <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 mb-2">
                  <Icon icon="simple-icons:osgeo" className="w-8 h-8 text-white" />
                  Geotecnologias
                </h2>
                <GeoCarousel />
              </div>
            </div>
          )}

          {activeTab === 'stacks' && (
            <StacksTab />
          )}
          {activeTab === 'education' && (
            <EducationTab />
          )}
          {activeTab === 'profile' && (
            <ProfileTab />
          )}
        </div>
      </div>

      {/* ============================== */}
      {/* COMPONENTE DO MODAL */}
      {/* ============================== */}
      <ProjectModal 
        projectId={selectedProjectId} 
        onClose={() => setSelectedProjectId(null)}
      />

    </main>
  );
}