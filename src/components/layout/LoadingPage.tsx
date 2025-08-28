import { useEffect, useState } from "react";
import Logo from "@/assets/logo.webp";

interface LoadingPageProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}
export const LoadingPage = ({ isLoading, onLoadingComplete }: LoadingPageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading && isVisible) {
      // Inicia a animação de saída
      setIsExiting(true);
      
      // Aguarda a animação terminar antes de esconder
      const timer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 500); // 500ms = duração da animação de saída

      return () => clearTimeout(timer);
    }
  }, [isLoading, isVisible, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-white
        transition-all duration-500 ease-in-out
        ${isExiting 
          ? 'opacity-0 scale-95' 
          : 'opacity-100 scale-100'
        }
      `}
    >
      <div className="text-center">
        {/* Logo com animação de rotação e pulso */}
        <div className="relative mb-8">
          <img 
            src={Logo} 
            alt="Memorial Parque Uberaba" 
            className={`
              h-32 w-auto mx-auto
              animate-spin-slow
              ${isExiting ? 'animate-pulse' : ''}
            `}
          />
          
          {/* Círculo de fundo animado */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-green-100 to-green-200 animate-ping opacity-20" />
          </div>
        </div>

        {/* Texto de loading */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-green-800 animate-pulse">
            Memorial Parque Uberaba
          </h1>
          <p className="text-green-600 animate-bounce">
            Carregando...
          </p>
        </div>

        {/* Indicador de progresso animado */}
        <div className="mt-8 w-48 mx-auto">
          <div className="h-2 bg-green-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full animate-loading-bar" />
          </div>
        </div>

        {/* Pontos flutuantes decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-3 h-3 bg-green-300 rounded-full
                animate-float-${i + 1}
                ${i % 2 === 0 ? 'opacity-60' : 'opacity-40'}
              `}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};