
import { Icon } from '@iconify/react';

// Tipagem das propriedades que o componente vai receber do page.tsx
interface TabNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabNav({ activeTab, setActiveTab }: TabNavProps) {
  // Lista das abas com seus respectivos IDs e Ícones do Lucide
  const tabs = [
    { id: 'projects', icon: 'lucide:layout-grid' },
    { id: 'stacks', icon: 'lucide:cpu' },
    { id: 'education', icon: 'lucide:award' },
    { id: 'profile', icon: 'lucide:user' },
  ];

  return (
    // Container com a linha fina na base (border-gray-800)
    <div className="w-full flex justify-between items-center border-b border-gray-800 mb-6 md:mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex justify-center pb-3 md:pb-4 border-b-2 transition-all duration-300 ${
            activeTab === tab.id
              ? 'border-white text-white' // Estilo quando a aba está ATIVA
              : 'border-transparent text-gray-500 hover:text-gray-300' // Estilo quando a aba está INATIVA
          }`}
        >
          <Icon icon={tab.icon} className="text-2xl md:text-3xl" />
        </button>
      ))}
    </div>
  );
}