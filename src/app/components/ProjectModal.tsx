
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/profileData';

// Tipagem das props
interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  // Busca os dados do projeto específico pelo ID
  const project = projects.find((p) => p.id === projectId);

  // Se não tiver projeto selecionado, não renderiza nada
  if (!project) return null;

  return (
    // AnimatePresence lida com a animação de saída (saída suave ao fechar)
    <AnimatePresence>
      {projectId && (
        // Container Fixo que cobre toda a tela (o fundo escurecido)
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose} // Fecha se clicar fora do painel branco
          className="fixed inset-0 bg-black/80 z-50 flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto"
        >
          {/* O Painel Branco (Modal em si)
              - No mobile (padrão): Surge de baixo, cantos arredondados no topo, fundo branco, texto preto
              - No desktop (md:): Centralizado, cantos arredondados totais, mais largo
          */}
          <motion.div
            initial={{ y: "100%" }} // Começa abaixo da tela
            animate={{ y: 0 }} // Sobe para a posição original
            exit={{ y: "100%" }} // Desce ao fechar
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Impede que o clique interno feche o modal
            className="relative w-full md:max-w-xl bg-white text-gray-950 p-6 rounded-t-[32px] md:rounded-3xl shadow-2xl flex flex-col items-center"
          >
            {/* Botão de Fechar (Ícone 'X') */}
            <button
              onClick={onClose}
              className="absolute top-1 right-5 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <Icon icon="lucide:x" className="text-2xl" />
            </button>

            {/* Imagem do Projeto dentro do modal branco */}
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden mb-6 border border-gray-100">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Seção: Stack's */}
            <div className="w-full flex flex-col items-start mb-5">
              <h4 className="text-sm font-bold text-gray-950 mb-3">Stack's:</h4>
              <div className="flex gap-4 text-4xl">
                {project.stacks.map((stackIcon, index) => (
                  <Icon key={index} icon={stackIcon} />
                ))}
              </div>
            </div>

            {/* Seção: O que é o projeto? (Descrição) */}
            <div className="w-full flex flex-col items-start mb-6">
              <h4 className="text-sm font-bold text-gray-950 mb-2">O que é o projeto?</h4>
              <p className="text-xs text-gray-700 leading-relaxed text-left">
                {project.description}
              </p>
            </div>

            {/* Seção: Link's */}
            <div className="w-full flex flex-col items-start pb-4">
              <h4 className="text-sm font-bold text-gray-950 mb-3">Link's:</h4>
              <div className="flex gap-4 text-3xl text-gray-600">
                {/* Link do GitHub */}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${project.githubUrl === '#' ? 'opacity-30 cursor-not-allowed' : 'hover:text-black transition-colors'}`}>
                  <Icon icon="mdi:github" />
                </a>
                {/* Link Live Demo */}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${project.liveUrl === '#' ? 'opacity-30 cursor-not-allowed' : 'hover:text-black transition-colors'}`}>
                  <Icon icon="lucide:link" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}