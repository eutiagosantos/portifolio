import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com dashboard administrativo, sistema de pagamentos e gestão de estoque.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gestão de tarefas com colaboração em tempo real e analytics avançados.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      featured: false
    },
    {
      title: "AI Chat Interface",
      description: "Interface de chat moderna integrada com IA para atendimento automatizado ao cliente.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      technologies: ["Next.js", "OpenAI API", "TypeScript"],
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio responsivo com animações e design moderno para artista digital.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ["React", "Framer Motion", "Sanity"],
      featured: false
    }
  ];

  return (
    <section className="py-20 portfolio-dark">
      <div className="container mx-auto px-6">
        <div className="scroll-fade-in text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Meus <span className="text-lime-400">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, mostrando diferentes tecnologias 
            e soluções criativas para problemas complexos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`
                bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 
                transition-portfolio group overflow-hidden
                ${project.featured ? 'md:col-span-1 lg:col-span-2' : ''}
                ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}
              `}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-portfolio"
                    />
                    <div className="absolute inset-0 bg-lime-500/20 opacity-0 group-hover:opacity-100 transition-portfolio"></div>
                  </div>
                </div>
                
                <div className={`${project.featured ? 'md:w-1/2' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-white text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-lime-400/20 text-lime-400 border-lime-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-white border-white hover:bg-white hover:text-gray-900"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button 
                        size="sm"
                        className="portfolio-lime"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="scroll-scale text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white hover:text-gray-900"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;