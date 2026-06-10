
import { profileInfo, contactData } from '@/data/profileData';

export default function ProfileTab() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pb-10 text-left animate-in fade-in duration-500">
      
      {/* Nome */}
      <div className="flex flex-col">
        <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Nome</h4>
        <p className="text-[13px] md:text-sm text-gray-300">{profileInfo.fullName}</p>
      </div>

      {/* Localização */}
      <div className="flex flex-col">
        <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Localização</h4>
        <p className="text-[13px] md:text-sm text-gray-300">{profileInfo.location}</p>
      </div>

      {/* Dados de contato */}
      <div className="flex flex-col">
        <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Dados de contato</h4>
        <a 
          href={`mailto:${contactData.email}`} 
          className="text-[13px] md:text-sm text-gray-300 hover:text-white transition-colors"
        >
          {contactData.email}
        </a>
      </div>

      {/* Endereço Lattes */}
      <div className="flex flex-col">
        <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Endereço para acessar este CV</h4>
        <a 
          href={contactData.lattesUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[13px] md:text-sm text-gray-300 hover:text-white transition-colors underline decoration-gray-600 underline-offset-4"
        >
          {contactData.lattesUrl}
        </a>
      </div>

    </div>
  );
}