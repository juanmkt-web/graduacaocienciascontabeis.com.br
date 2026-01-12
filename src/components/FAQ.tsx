import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração dos cursos de graduação?",
    answer:
      "Nossos cursos de graduação têm duração a partir de 2 anos, dependendo da modalidade e área escolhida. Os cursos tecnológicos geralmente são mais curtos, enquanto bacharelados e licenciaturas podem ter durações maiores.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma instituição com nota 5 no MEC, a nota máxima de avaliação. Todos os nossos diplomas são reconhecidos nacionalmente e têm a mesma validade de cursos presenciais.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas formas de pagamento: boleto bancário, cartão de crédito (com parcelamento), PIX e débito automático. Também temos programas de bolsas e descontos especiais.",
  },
  {
    question: "Posso transferir meu curso de outra instituição?",
    answer:
      "Sim, aceitamos transferências de outras instituições de ensino superior. As disciplinas cursadas podem ser aproveitadas mediante análise curricular, reduzindo o tempo de conclusão do curso.",
  },
  {
    question: "Quais são as modalidades disponíveis?",
    answer:
      "Oferecemos modalidades EaD e semipresencial, proporcionando flexibilidade para atender às diferentes necessidades dos nossos alunos. Escolha a opção que melhor se adapta à sua rotina!",
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
            <p className="text-gray-600 text-lg">Tire suas dúvidas sobre a Graduação EaD da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-primary"
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
