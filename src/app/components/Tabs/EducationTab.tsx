
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { educationData, certificatesData } from '@/data/profileData';

export default function EducationTab() {
  return (
    <div className="w-full flex flex-col gap-8 pb-10 text-left animate-in fade-in duration-500">
      
      {/* Seção: Formação Acadêmica */}
      <div className="flex flex-col items-start w-full">
        <h4 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6">
          Formação acadêmica
        </h4>
        
        <div className="flex flex-col gap-6 w-full">
          {educationData.map((edu, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 text-4xl text-white">
                <Icon icon={edu.icon} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm md:text-base font-bold text-white">{edu.institution}</h5>
                <p className="text-[13px] md:text-sm text-gray-300 mt-0.5">{edu.course}</p>
                <p className="text-[11px] md:text-xs text-gray-500 mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linha Divisória */}
      <hr className="border-gray-800 w-full" />

      {/* Seção: Licenças e Certificados */}
      <div className="flex flex-col items-start w-full">
        {/* Usamos o tamanho (length) do array para mostrar o total (83) dinamicamente depois, aqui deixo fixo como no design */}
        <h4 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6">
          Licenças e certificados (83)
        </h4>
        
        {/* Container do Carrossel Horizontal */}
        <div className="w-full relative">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id} 
                className="relative min-w-[260px] md:min-w-[320px] aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden snap-start flex-shrink-0 border border-gray-800 hover:border-gray-600 transition-colors"
              >
                {/* Fallback de texto caso a imagem não exista ainda */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
                  {cert.title}
                </div>
                
                {cert.image && (
                  <Image 
                    src={cert.image} 
                    alt={`Certificado ${cert.title}`}
                    fill
                    className="object-cover relative z-10"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}