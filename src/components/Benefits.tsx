import { Zap, Clock, Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const benefits = [
  {
    icon: Zap,
    title: "Conclusão acelerada a partir de",
    highlight: "2 anos",
  },
  {
    icon: Clock,
    title: "Inclusos na sua formação",
    highlight: "10 Cursos de IA",
  },
  {
    icon: Calendar,
    title: "Graduações",
    highlight: "EAD e Semipresenciais",
  },
  {
    icon: GraduationCap,
    title: "Instituição com",
    highlight: "Nota Máxima no MEC!",
  },
];
const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="container mx-auto px-3 md:px-4">
        <div className="benefits-card relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl">
          <div className="benefits-content relative z-10">
            <div className="benefits-grid">
              {/* Left side - Main Title */}
              <div className="animate-fade-in text-center md:text-left">
                <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 md:mb-6 leading-tight">
                  A GRADUAÇÃO QUE<span className="text-primary"> TE PREPARA </span>
                  <br />
                  PARA O FUTURO!
                </h2>
                <p className="text-xs md:text-lg text-white/80 leading-relaxed">
                  Conclua sua Faculdade <strong className="text-white">A partir de 2 anos </strong>
                  com a excelência de uma
                  <strong className="text-white"> Instituição Nota 5 no MEC.</strong>, Garanta seu diferencial
                  competitivo com <strong className="text-white">10 cursos exclusivos de IA</strong> inclusos e a
                  flexibilidade que você precisa para estudar.
                </p>
              </div>

              {/* Right side - Benefits List */}
              <div
                className="space-y-2 md:space-y-6 animate-fade-in"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-4 animate-fade-in ml-4 sm:ml-6 md:ml-10 lg:ml-14"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-md md:rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 bg-primary">
                      <benefit.icon className="h-4 w-4 md:h-6 md:w-6 text-primary-foreground" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-xs md:text-lg leading-tight">
                        {benefit.title} <strong className="font-bold">{benefit.highlight}</strong>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 md:pt-8 ml-4 sm:ml-6 md:ml-10 lg:ml-14">
                  <a
                    href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="benefits-button">
                      COMECE SUA GRADUAÇÃO AGORA!
                      <ArrowRight className="inline-block ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
