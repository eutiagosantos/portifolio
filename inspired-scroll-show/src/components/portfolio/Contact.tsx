import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('http://localhost:3000/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Erro de conexão. Verifique se o servidor está rodando.');
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

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

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="scroll-slide-up">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Envie uma Mensagem
                </h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400">{statusMessage}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400">{statusMessage}</p>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400"
                  />
                  
                  <Textarea
                    placeholder="Sua mensagem..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full portfolio-lime text-lg py-6 hover:scale-105 transition-portfolio disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
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