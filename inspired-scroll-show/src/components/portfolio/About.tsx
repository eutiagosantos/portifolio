import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";
import AboutTrooper from "@/components/portfolio/AboutTrooper";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Java (Spring Framework), Node.js, PostgreSQL, MySQL, Docker"
    },
    {
      icon: Zap,
      title: "Padrões de Projeto e Boas práticas",
      description: "Strategy, Builder, MVC, Clean Code"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="scroll-fade-in text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-lime-500">Mim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sou estudante de Engenharia de Software com foco em desenvolvimento back-end, utilizando principalmente Java com Spring Boot, Node.js com NestJS, Reactjs e Nextjs. Tenho experiência na construção de APIs e sistemas escaláveis, aplicando boas práticas de arquitetura e versionamento de código. Busco constantemente evoluir minhas habilidades técnicas e contribuir em projetos desafiadores que envolvam inovação e crescimento contínuo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="scroll-slide-left">
            <AboutTrooper />
          </div>
          
          <div className="scroll-slide-right space-y-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="border-2 border-lime-200 hover:border-lime-400 transition-portfolio shadow-portfolio hover:shadow-xl"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="portfolio-lime p-3 rounded-xl">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;