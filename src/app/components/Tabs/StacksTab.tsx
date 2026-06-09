import { Icon } from '@iconify/react';
import { stacksData } from '@/data/profileData';

export default function StacksTab() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pb-10 text-left animate-in fade-in duration-500">
      {stacksData.map((stackGroup, index) => (
        <div key={index} className="flex flex-col items-start w-full">
          {/* Título da Categoria */}
          <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">
            {stackGroup.category}
          </h4>
          
          {/* Container dos Ícones */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-4xl md:text-5xl">
            {stackGroup.icons.map((icon, i) => (
              <div 
                key={i} 
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <Icon icon={icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}