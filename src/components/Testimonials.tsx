import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import robertaFoto from "@/assets/roberta-maia.png";
import pauloFoto from "@/assets/paulo-silva.png";
import joaoFoto from "@/assets/joao-lima.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Sempre sonhei em abrir meu próprio negócio, mas não sabia por onde começar. O curso de Administração me deu toda a base que eu precisava: finanças, marketing, gestão de pessoas. Hoje tenho minha loja e aplico tudo que aprendi no dia a dia.",
    name: "Roberta Maia",
    role: "Empreendedora",
    photo: robertaFoto,
  },
  {
    id: 2,
    quote:
      "Trabalhava como auxiliar administrativo há anos e não conseguia crescer. Depois de me formar em Administração, fui promovido a coordenador e hoje ganho o dobro do que ganhava antes. O investimento valeu cada centavo.",
    name: "Paulo Silva",
    role: "Coordenador Administrativo",
    photo: pauloFoto,
  },
  {
    id: 3,
    quote:
      "O curso me preparou para assumir a gestão da empresa da família. Aprendi a profissionalizar os processos, criar indicadores e tomar decisões baseadas em dados. Hoje a empresa cresceu 40% em faturamento.",
    name: "João Lima",
    role: "Gestor Empresarial",
    photo: joaoFoto,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-12 md:py-24 desktop:pb-[116px] bg-[#1e2842] relative">
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-12 animate-fade-in text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            ADMINISTRADORES <span className="text-primary">DE SUCESSO</span>
          </h2>
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
            Veja como o curso de Administração transformou a carreira dos nossos alunos.
          </p>
        </div>

        {/* Carousel para telas menores que 1200px */}
        <div
          className="max-w-4xl mx-auto block desktop:hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Seta esquerda */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
          </button>

          {/* Seta direita */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
          </button>

          <div
            className="glass-effect rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 shadow-2xl animate-fade-in block mx-8 md:mx-12"
            key={currentTestimonial.id}
          >
            <Quote className="h-8 w-8 md:h-12 md:w-12 text-primary mb-3 md:mb-6" />
            <p className="text-base md:text-xl lg:text-2xl text-white mb-5 md:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-4 md:gap-6 border-t border-white/20 pt-5 md:pt-8">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-primary object-cover"
              />
              <div className="text-white">
                <p className="font-bold text-lg md:text-xl">{currentTestimonial.name}</p>
                <p className="text-white/70 text-sm">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid de 3 cards para telas >= 1200px */}
        <div className="hidden desktop:grid grid-cols-3 gap-6 ultrawide:gap-7 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-effect rounded-2xl p-5 ultrawide:p-[22px] shadow-2xl animate-fade-in flex flex-col h-full"
            >
              <Quote className="h-6 w-6 ultrawide:h-7 ultrawide:w-7 text-primary mb-3 ultrawide:mb-[13px]" />
              <p className="text-sm wide:text-[17px] ultrawide:text-[19px] text-white mb-4 ultrawide:mb-[18px] leading-relaxed italic font-light flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 ultrawide:gap-[13px] border-t border-white/20 pt-4 ultrawide:pt-[18px]">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 ultrawide:w-[54px] ultrawide:h-[54px] rounded-full border-2 border-primary object-cover"
                />
                <div className="text-white">
                  <p className="font-bold text-sm ultrawide:text-[16px]">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
