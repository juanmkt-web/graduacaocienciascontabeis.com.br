import { useState } from "react";
import {
  GraduationCap,
  Monitor,
  Clock,
  Calendar,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users,
  BarChart3,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import cursoAdministracao from "@/assets/curso-administracao.webp";

const courseDetails = {
  title: "Bacharelado em Administração",
  modality: "EAD",
  hours: "3.200 HORAS",
  semesters: "8 SEMESTRES",
  promoPrice: "R$ 139,00",
  regularPrice: "R$ 329,00",
  image: cursoAdministracao,
  url: "https://www.fasuleducacional.edu.br/graduacao/graduacao-em-administracao-ead",
  description:
    "O curso de Bacharelado em Administração da FASUL prepara profissionais para atuar em todas as áreas da gestão empresarial, desenvolvendo competências em planejamento estratégico, finanças, marketing, recursos humanos e operações.",
};

const curriculumModules = [
  {
    semester: "1º Semestre",
    subjects: [
      "Fundamentos de Administração",
      "Matemática Aplicada",
      "Comunicação Empresarial",
      "Metodologia Científica",
    ],
  },
  {
    semester: "2º Semestre",
    subjects: ["Teoria Geral da Administração", "Contabilidade Básica", "Economia", "Sociologia Organizacional"],
  },
  {
    semester: "3º Semestre",
    subjects: ["Gestão de Pessoas", "Marketing I", "Estatística Aplicada", "Direito Empresarial"],
  },
  {
    semester: "4º Semestre",
    subjects: ["Administração Financeira I", "Marketing II", "Gestão de Processos", "Comportamento Organizacional"],
  },
  {
    semester: "5º Semestre",
    subjects: ["Administração Financeira II", "Gestão da Produção", "Logística Empresarial", "Sistemas de Informação"],
  },
  {
    semester: "6º Semestre",
    subjects: ["Planejamento Estratégico", "Gestão de Projetos", "Empreendedorismo", "Administração Pública"],
  },
  {
    semester: "7º Semestre",
    subjects: [
      "Gestão da Qualidade",
      "Comércio Exterior",
      "Consultoria Empresarial",
      "Ética e Responsabilidade Social",
    ],
  },
  {
    semester: "8º Semestre",
    subjects: [
      "Trabalho de Conclusão de Curso",
      "Estágio Supervisionado",
      "Gestão da Inovação",
      "Tópicos Avançados em Administração",
    ],
  },
];

const careerAreas = [
  { icon: Briefcase, title: "Gestão Empresarial", description: "Gerencie empresas e tome decisões estratégicas" },
  { icon: TrendingUp, title: "Finanças", description: "Atue em bancos, corretoras e departamentos financeiros" },
  { icon: Users, title: "Recursos Humanos", description: "Desenvolva e gerencie equipes de alto desempenho" },
  { icon: BarChart3, title: "Marketing", description: "Crie estratégias para posicionar marcas no mercado" },
  { icon: Building2, title: "Consultoria", description: "Ofereça soluções para empresas de todos os portes" },
  { icon: BookOpen, title: "Empreendedorismo", description: "Abra e gerencie seu próprio negócio" },
];

const Courses = () => {
  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);

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
        {/* Header */}
        <div className="text-center mb-12 text-white animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">CONHEÇA O CURSO</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            O Bacharelado em Administração é um dos cursos mais versáteis do mercado, abrindo portas para diversas áreas
            de atuação profissional.
          </p>
        </div>

        {/* Main Course Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <img src={courseDetails.image} alt={courseDetails.title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Content Side */}
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{courseDetails.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{courseDetails.description}</p>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Bacharelado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{courseDetails.modality}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{courseDetails.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{courseDetails.semesters}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-gray-900">{courseDetails.promoPrice}</span>
                    <span className="text-lg text-gray-900">/mês</span>
                    <span className="text-gray-400 line-through ml-2">{courseDetails.regularPrice}</span>
                  </div>
                  <span className="inline-block text-xs bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-3 py-1 rounded-full font-semibold">
                    VALOR FIXO ATÉ O FINAL DO CURSO
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-base py-6 flex-1 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    asChild
                  >
                    <a href={courseDetails.url} target="_blank" rel="noopener noreferrer">
                      MATRICULE-SE AGORA <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <a
                    href={courseDetails.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold text-base border-2 border-blue-600 rounded-full py-3 px-6 hover:bg-blue-600/10 transition-colors text-center"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Areas */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">ÁREAS DE ATUAÇÃO</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-sm lg:text-base mb-1">{area.title}</h4>
                <p className="text-white/70 text-xs lg:text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
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
