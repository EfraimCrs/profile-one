
import Image from 'next/image';
import { projects } from '@/data/profileData';

// Vamos receber uma prop opcional para quando formos abrir o modal futuramente
interface ProjectsTabProps {
  onOpenProject?: (projectId: string) => void;
}

export default function ProjectsTab({ onOpenProject }: ProjectsTabProps) {
  return (
    // No mobile fica em coluna (flex-col), no desktop vira um grid de 2 colunas
    <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 pb-10">
      {projects.map((project) => (
        <div 
          key={project.id}
          onClick={() => onOpenProject && onOpenProject(project.id)}
          className="group relative flex flex-col bg-[#11151C] border border-gray-800 rounded-3xl overflow-hidden cursor-pointer hover:border-gray-600 transition-all duration-300"
        >
          {/* Container da Imagem com proporção fixa */}
          <div className="relative w-full aspect-[4/3] bg-gray-800/50 flex items-center justify-center overflow-hidden">
            {/* Como você ainda vai colocar as imagens na pasta public, adicionei um fallback visual temporário */}
            {project.image ? (
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <span className="text-gray-600 text-sm">Imagem do Projeto</span>
            )}
            
            {/* Um leve overlay escuro que some no hover para dar um charme */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}