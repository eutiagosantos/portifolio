import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      description: "Liderança de equipe de desenvolvimento, arquitetura de sistemas escaláveis e mentoria de desenvolvedores juniores.",
      achievements: [
        "Aumentou performance do sistema em 40%",
        "Implementou CI/CD reduzindo tempo de deploy em 60%",
        "Mentoreou 5+ desenvolvedores juniores"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Desenvolvimento de produto do zero, desde MVP até escala, trabalhando com stack moderna e metodologias ágeis.",
      achievements: [
        "Desenvolveu MVP que captou R$ 2M em investimento",
        "Implementou arquitetura de microserviços",
        "Automatizou 80% dos processos manuais"
      ]
    },
    {
      title: "Frontend Developer",
      company: "AgênciaWeb",
      period: "2019 - 2020",
      location: "Rio de Janeiro, RJ",
      description: "Criação de interfaces modernas e responsivas para clientes de diversos segmentos, focando em UX/UI.",
      achievements: [
        "Entregou 30+ projetos web de alta qualidade",
        "Melhorou métricas de UX em 35%",
        "Implementou design system corporativo"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="scroll-fade-in text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Minha <span className="text-lime-500">Experiência</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada de crescimento constante, trabalhando com diferentes tecnologias 
            e contribuindo para projetos impactantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime-300"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`
                  relative mb-12 scroll-fade-in
                  ${index % 2 === 0 ? 'md:ml-20' : 'md:mr-20 md:text-right'}
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-6 h-6 bg-lime-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <Card className="shadow-portfolio hover:shadow-xl transition-portfolio ml-16 md:ml-0">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-lime-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lime-600 font-semibold mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Principais conquistas:
                      </h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;