import { useState } from "react";
import { GraduationCap, Monitor, Clock, Calendar, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import course images
import cursoAdministracao from "@/assets/curso-administracao.jpg";
import cursoAnaliseSistemas from "@/assets/curso-analise-sistemas.jpg";
import cursoRh from "@/assets/curso-rh.jpg";
import cursoPedagogia from "@/assets/curso-pedagogia.jpg";
import cursoTi from "@/assets/curso-ti.jpg";
import cursoImobiliario from "@/assets/curso-imobiliario.jpg";
import cursoLogistica from "@/assets/curso-logistica-grad.jpg";
import cursoProcessos from "@/assets/curso-processos.jpg";
import cursoMarketing from "@/assets/curso-marketing-grad.jpg";
import cursoContabeis from "@/assets/curso-contabeis.jpg";
import cursoComercial from "@/assets/curso-comercial.jpg";
import cursoSeguranca from "@/assets/curso-seguranca.jpg";
import cursoPublica from "@/assets/curso-publica.jpg";
import cursoSocial from "@/assets/curso-social.jpg";
import cursoMarketingDigital from "@/assets/curso-marketing-digital.jpg";
import cursoFinanceira from "@/assets/curso-financeira.jpg";

interface Course {
  title: string;
  type: "GRADUAÇÃO";
  modality: "EAD" | "SEMIPRESENCIAL";
  hours: string;
  semesters: string;
  promoPrice: string;
  regularPrice: string;
  badge?: string;
  highlight?: string;
  isLaunchingSoon?: boolean;
  image: string;
  url: string;
}

const courses: Course[] = [
  {
    title: "Administração",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "3.200 HORAS",
    semesters: "8 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoAdministracao,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-administracao-ead",
  },
  {
    title: "Análise e desenvolvimento de sistemas",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "2.120 HORAS",
    semesters: "5 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    highlight: "DESTAQUE PARA FULL STACK DEVELOPER",
    image: cursoAnaliseSistemas,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-analise-e-desenvolvimento-de-sistemas-ead",
  },
  {
    title: "Gestão de recursos humanos",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoRh,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-de-recursos-humanos-ead",
  },
  {
    title: "Pedagogia",
    type: "GRADUAÇÃO",
    modality: "SEMIPRESENCIAL",
    hours: "3.200 HORAS",
    semesters: "8 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    isLaunchingSoon: true,
    image: cursoPedagogia,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-pedagogia-ead",
  },
  {
    title: "Gestão da tecnologia da informação",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "2.120 HORAS",
    semesters: "5 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    highlight: "GANHE 1 PÓS COM DESTAQUE EM I.A.",
    image: cursoTi,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-da-tecnologia-da-informacao-ead",
  },
  {
    title: "Negócios imobiliários",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoImobiliario,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-negocios-imobiliarios-ead",
  },
  {
    title: "Logística",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoLogistica,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-tecnologia-em-logistica-ead",
  },
  {
    title: "Processos gerenciais",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoProcessos,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-processos-gerenciais",
  },
  {
    title: "Gestão de marketing",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoMarketing,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-de-marketing",
  },
  {
    title: "Ciências contábeis",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "3.200 HORAS",
    semesters: "8 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoContabeis,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-ciencias-contabeis",
  },
  {
    title: "Gestão comercial",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoComercial,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-comercial",
  },
  {
    title: "Segurança pública",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoSeguranca,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-seguranca-publica",
  },
  {
    title: "Gestão pública",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoPublica,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-publica",
  },
  {
    title: "Serviço social",
    type: "GRADUAÇÃO",
    modality: "SEMIPRESENCIAL",
    hours: "3.200 HORAS",
    semesters: "8 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoSocial,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-servico-social",
  },
  {
    title: "Marketing Digital",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "3.510 HORAS",
    semesters: "8 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    isLaunchingSoon: true,
    image: cursoMarketingDigital,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-marketing-digital-ead",
  },
  {
    title: "Gestão financeira",
    type: "GRADUAÇÃO",
    modality: "EAD",
    hours: "1.720 HORAS",
    semesters: "4 SEMESTRES",
    promoPrice: "R$ 139,00",
    regularPrice: "R$ 329,00",
    badge: "GANHE 2 PÓS PARA VOCÊ + 1 PARA SEU AMIGO",
    image: cursoFinanceira,
    url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-gestao-financeira",
  },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ animationDelay: `${(index % 6) * 0.1}s` }}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge overlay - positioned at bottom edge of image */}
        <div className="absolute bottom-1 left-3 right-3 flex justify-center z-10">
          {course.isLaunchingSoon ? (
            <span className="bg-gray-200/95 backdrop-blur-sm text-gray-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
              LANÇAMENTO EM BREVE
            </span>
          ) : course.badge ? (
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
              <Gift className="w-3 h-3" />
              {course.badge}
            </span>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Highlight badge */}
        {course.highlight && (
          <span className="inline-block bg-yellow-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded mb-2 w-fit">
            {course.highlight}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 uppercase leading-tight min-h-[3rem]">
          {course.title}
        </h3>

        {/* Course Info Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-gray-600">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course.type}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Monitor className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course.modality}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course.hours}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{course.semesters}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4 mt-auto">
          <div className="flex items-center justify-between mb-1">
            <p className="text-2xl font-bold text-gray-900">
              {course.promoPrice}
              <span className="text-base font-bold text-gray-900">/Mês</span>
            </p>
            <p className="text-gray-400 line-through text-sm">{course.regularPrice}/Mês</p>
          </div>
          <span className="text-[10px] bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-2 py-0.5 rounded font-semibold inline-block">
            ATÉ O FINAL DO CURSO
          </span>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold text-sm border-2 border-primary rounded-full py-2 px-6 hover:bg-primary/10 transition-colors flex-shrink-0"
          >
            SAIBA MAIS
          </a>
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-sm py-2 px-6"
            asChild
          >
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              INSCREVA-SE
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 6;
    }
    return 4;
  });

  const loadMore = () => {
    const increment = window.innerWidth >= 1024 ? 6 : 4;
    setVisibleCount((prev) => Math.min(prev + increment, courses.length));
  };

  const visibleCourses = courses.slice(0, visibleCount);
  const hasMore = visibleCount < courses.length;

  return (
    <section id="cursos" className="pb-24 gradient-animated relative">
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-16 text-white animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">ESCOLHA SUA GRADUAÇÃO</h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Dê o próximo passo na sua jornada acadêmica com quem é referência em Ensino. Conheça nossas opções de Cursos
            EAD e Semipresenciais feitos para se encaixar na sua rotina.
          </p>
        </div>

        {/* Grid - 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visibleCourses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-10 animate-fade-in">
            <Button
              onClick={loadMore}
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-6 text-lg rounded-full transition-all duration-300"
            >
              VER MAIS CURSOS
            </Button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1e2842"
          />
        </svg>
      </div>
    </section>
  );
};

export default Courses;
