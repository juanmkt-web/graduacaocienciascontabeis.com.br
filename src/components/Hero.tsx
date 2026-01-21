import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-[72px] pb-8 md:pt-[112px] md:pb-16"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/95 via-dark-blue/60 via-50% to-transparent to-70%"></div>
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-12 relative z-10">
        <div className="max-w-2xl mb-6 md:mb-12">
          <div className="text-white animate-fade-in text-center md:text-left">
            <div className="inline-block bg-amber-500/20 backdrop-blur-sm border border-amber-400/40 rounded-full px-2 py-1 md:px-4 md:py-1.5 mb-2 md:mb-4">
              <span className="text-amber-300 font-semibold text-xs md:text-sm">BACHARELADO EM ADMINISTRAÇÃO</span>
            </div>

            <h1
              className="text-xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-6 leading-tight"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              TORNE-SE EXPERT EM <span className="text-primary">NEGÓCIOS E GESTÃO</span> E LIDERE O MERCADO
            </h1>

            <p className="text-sm md:text-xl text-white/90 leading-relaxed mb-3 md:mb-8">
              Domine os pilares essenciais do mercado: Finanças, Estratégia e Pessoas. Saia do operacional e prepare-se
              para ocupar cargos de comando, tomando as decisões difíceis que definem o sucesso de uma empresa.
            </p>

            <div className="mb-5 md:mb-8 flex justify-center md:justify-start">
              <a
                href="https://www.fasuleducacional.edu.br/graduacao/graduacao-em-administracao-ead"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-full shadow-[0_0_20px_hsl(217_91%_53%/0.5)] hover:shadow-[0_0_30px_hsl(217_91%_53%/0.7)] transition-all hover:-translate-y-1 animate-pulse-cta w-full md:w-auto"
                >
                  QUERO ME INSCREVER <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-row gap-3 md:gap-6 justify-center md:justify-start flex-wrap">
              <div className="flex items-center gap-1 md:gap-2">
                <Award className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
                <span className="text-xs md:text-sm font-medium">Diploma MEC</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
                <span className="text-xs md:text-sm font-medium">8 Semestres</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Users className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
                <span className="text-xs md:text-sm font-medium">+10 mil Alunos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
