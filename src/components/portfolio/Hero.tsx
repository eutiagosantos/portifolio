import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full gradient-lime opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full portfolio-lime opacity-40 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="scroll-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            Seu <span className="text-lime-400">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full Stack especializado em criar experiências digitais 
            incríveis com tecnologias modernas
          </p>
        </div>
        
        <div className="scroll-scale flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        
        <div className="scroll-slide-left flex justify-center gap-6">
          <a 
            href="#" 
            className="text-white hover:text-lime-400 transition-portfolio p-3 rounded-full hover:bg-white/10"
          >
            <Github size={32} />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-lime-400 transition-portfolio p-3 rounded-full hover:bg-white/10"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-lime-400 transition-portfolio p-3 rounded-full hover:bg-white/10"
          >
            <Mail size={32} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;