import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function EmailLink({ email, children }) {
  return (
    <a href={`mailto:${email}`}>
      {children}
    </a>
  );
}

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full gradient-lime opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full portfolio-lime opacity-40 animate-pulse-glow"></div>

      <div className="container mx-auto pl-6 relative z-10">
        <div className="scroll-fade-in flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Texto */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              Bem <span className="text-lime-400">Vindo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvedor Full Stack especializado em criar experiências digitais
              incríveis com tecnologias modernas
            </p>

            <div className="scroll-scale flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <Button
                size="lg"
                className="portfolio-lime text-lg px-8 py-6 hover:scale-105 transition-portfolio"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 transition-portfolio"
              >
                Baixar CV
              </Button>
            </div>

            <div className="scroll-slide-left flex justify-center md:justify-start gap-6">
              <a href="https://github.com/eutiagosantos" className="text-white hover:text-lime-400 transition-portfolio p-3 rounded-full hover:bg-white/10">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/tiago-de-almeida-santos-94b19b1b2/" className="text-white hover:text-lime-400 transition-portfolio p-3 rounded-full hover:bg-white/10">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/imagem-mao.png"
        alt="Mão decorativa"
        className="pointer-events-none select-none w-[24rem] opacity-20 absolute top-1/2 right-0 -translate-y-1/2"
        style={{ objectFit: "contain", border:'none', borderRadius:0 }}
        aria-hidden="true"
      />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
