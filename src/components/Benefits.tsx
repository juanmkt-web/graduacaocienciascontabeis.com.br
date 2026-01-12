import { Briefcase, TrendingUp, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Formação completa em",
    highlight: "Gestão Empresarial",
  },
  {
    icon: TrendingUp,
    title: "Prepare-se para",
    highlight: "Cargos de Liderança",
  },
  {
    icon: Users,
    title: "Desenvolva habilidades em",
    highlight: "Gestão de Pessoas",
  },
  {
    icon: Building2,
    title: "Atue em empresas de",
    highlight: "Todos os Portes",
  },
];

const highlights = ["Logística e Operações", "Marketing e Vendas", "Recursos Humanos"];

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
                  <span className="text-blue-400"> ADMINISTRAÇÃO </span>
                  <br />
                  QUE TRANSFORMA CARREIRAS
                </h2>
                <p className="text-xs md:text-lg text-white/80 leading-relaxed mb-4 md:mb-6">
                  O curso de Administração da FASUL forma profissionais preparados para liderar, inovar e transformar
                  organizações. Com <strong className="text-white">3.200 horas</strong> de formação completa e
                  reconhecimento do <strong className="text-white">MEC com nota máxima</strong>.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-white/90">
                      <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-blue-400 flex-shrink-0" />
                      <span className="text-[10px] md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
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
                    <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-md md:rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 bg-blue-500">
                      <benefit.icon className="h-4 w-4 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
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
                    href="https://www.fasuleducacional.edu.br/graduacao/graduacao-em-administracao-ead"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="benefits-button">
                      QUERO SER ADMINISTRADOR!
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
