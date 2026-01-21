import { Eye, MessageSquare, Heart } from "lucide-react";

import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import blog4 from "@/assets/blog-4.webp";

const blogPosts = [
  {
    title: "Mitos e Verdades sobre o Ensino a Distância da FASUL: Como funciona e suas vantagens para sua carreira?",
    author: "Profª. Débora",
    date: "26 de dez. de 2025",
    readTime: "8 min de leitura",
    image: blog1,
    views: "6821",
    comments: "0",
    likes: "418",
    url: "https://www.fasulmg.com.br/post/mitos-e-verdades-sobre-o-ensino-a-distancia-da-fasul-como-funciona-e-suas-vantagens-para-sua-carreira/",
  },
  {
    title: "Guia Completo do Vestibular ao Diploma e Suas Oportunidades de Carreira",
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "11 min de leitura",
    image: blog2,
    views: "7534",
    comments: "0",
    likes: "502",
    url: "https://www.fasulmg.com.br/post/guia-completo-do-vestibular-ao-diploma-e-suas-oportunidades-de-carreira/",
  },
  {
    title: "Não Estude no Escuro: Por Que Saber QUEM São Seus Professores Define o Valor do Seu Diploma FASUL",
    author: "Profª. Vera Lúcia",
    date: "26 de dez. de 2025",
    readTime: "5 min de leitura",
    image: blog3,
    views: "4987",
    comments: "0",
    likes: "311",
    url: "https://www.fasulmg.com.br/post/nao-estude-no-escuro-por-que-saber-quem-sao-seus-professores-define-o-valor-do-seu-diploma-fasul/",
  },
  {
    title: "A Escolha Inteligente para o Seu Futuro com Nota Máxima no MEC e Preço Fixo no EaD",
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "6 min de leitura",
    image: blog4,
    views: "6210",
    comments: "0",
    likes: "387",
    url: "https://www.fasulmg.com.br/post/a-escolha-inteligente-para-o-seu-futuro-com-nota-maxima-no-mec-e-preco-fixo-no-ead/",
  },
];

const Blog = () => {
  return (
    <section className="pt-5 pb-20 md:pb-32 bg-[#1E2842] relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            BLOG DE INFORMAÇÕES
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-3xl mx-auto">
            Dicas de carreira, tendências de mercado e tudo o que você precisa
            saber para impulsionar sua trajetória profissional.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 block"
            >
              {/* Background Image */}
              <div className="aspect-[3/4] md:aspect-[4/5] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Author Info */}
                  <div className="text-white">
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-white/90">
                      {post.date} · {post.readTime}
                    </p>
                  </div>

                  {/* Title and Stats */}
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight mb-4">
                      {post.title}
                    </h3>
                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white text-xs">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-white text-xs">
                        <Heart className="w-3 h-3 text-red-400" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Blog;
