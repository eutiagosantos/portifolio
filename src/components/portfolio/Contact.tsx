import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "tiagoalmeidasantos1812@gmail.com",
      link: "mailto:tiagoalmeidasantos1812@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (31) 99694-2653",
      link: "tel:+5531996942653"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Belo Horizonte, MG - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/eutiagosantos"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tiago-de-almeida-santos-94b19b1b2/"
    },
  ];

  const navigate = useNavigate();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/animation');
  }, [navigate]);

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dots-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-lime opacity-20 animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full portfolio-lime opacity-30 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="scroll-fade-in text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Vamos <span className="text-lime-400">Conversar?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tenho interesse em oportunidades freelance, projetos colaborativos ou 
            posições full-time. Vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="scroll-slide-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                <p className="text-gray-300 mb-8">
                  Estou sempre aberto para discutir novas oportunidades e projetos interessantes. 
                  Entre em contato através dos canais abaixo:
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-portfolio group"
                  >
                    <div className="portfolio-lime p-3 rounded-lg group-hover:scale-110 transition-portfolio">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{contact.title}</h4>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Me siga nas redes:</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="p-3 rounded-full bg-white/10 hover:bg-lime-400 hover:text-gray-900 text-white transition-portfolio group"
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-portfolio" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-slide-right">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Envie uma Mensagem
                </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu email"
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Assunto"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                  />
                  
                  <Textarea
                    placeholder="Sua mensagem..."
                    rows={6}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full portfolio-lime text-lg py-6 hover:scale-105 transition-portfolio"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;