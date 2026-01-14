import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração do curso de Bacharelado em Administração?",
    answer:
      "O Curso de Bacharelado em Administração tem duração de 8 semestres, com carga horária total de 3.200 horas. É possível concluir em menos tempo através do aproveitamento de disciplinas, caso você já tenha cursado outra Graduação.",
  },
  {
    question: "O diploma de Administração EaD é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. O diploma de Bacharelado em Administração tem a mesma validade de Cursos presenciais e é reconhecido em todo o território nacional.",
  },
  {
    question: "Quais são as áreas de atuação do administrador?",
    answer:
      "O administrador pode atuar em diversas áreas como: gestão empresarial, finanças, recursos humanos, marketing, logística, consultoria, empreendedorismo, gestão pública, entre outras. É uma das formações mais versáteis do mercado.",
  },
  {
    question: "Preciso ter experiência prévia em administração?",
    answer:
      "Não é necessário ter experiência prévia. O Curso foi desenvolvido para formar profissionais do zero, com disciplinas que vão do básico ao avançado, preparando você para o mercado de trabalho.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "A mensalidade é de apenas R$ 139,00 com valor fixo até o final do Curso. Oferecemos diversas formas de pagamento: boleto, cartão de crédito com parcelamento e PIX.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-4">PERGUNTAS FREQUENTES</h2>
            <p className="text-gray-600 text-lg">Tire suas dúvidas sobre o Bacharelado em Administração da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-blue-500"
              >
                <AccordionTrigger className="text-left text-[#1E2842] font-medium text-base md:text-lg hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
