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

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<keyof ContactForm>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const navigate = useNavigate();

  // Funções de validação
  const validateField = (field: keyof ContactForm, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Nome é obrigatório';
        if (value.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres';
        break;
      case 'email':
        if (!value.trim()) return 'Email é obrigatório';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Digite um email válido';
        break;
      case 'subject':
        if (!value.trim()) return 'Assunto é obrigatório';
        if (value.trim().length < 3) return 'Assunto deve ter pelo menos 3 caracteres';
        break;
      case 'message':
        if (!value.trim()) return 'Mensagem é obrigatória';
        if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    (Object.keys(formData) as Array<keyof ContactForm>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Validar campo em tempo real se já foi tocado
    if (touchedFields.has(field)) {
      const error = validateField(field, value);
      setFormErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };

  const handleFieldBlur = (field: keyof ContactForm) => {
    setTouchedFields(prev => new Set(prev).add(field));
    const error = validateField(field, formData[field]);
    setFormErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar formulário antes de enviar
    if (!validateForm()) {
      setSubmitStatus('error');
      setStatusMessage('Por favor, corrija os erros no formulário antes de enviar.');
      return;
    }
    
    setIsLoading(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Usar a URL da API do ambiente ou fallback para desenvolvimento
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      
      const response = await fetch(`${apiUrl}/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Se for erro de validação (400), pegar as mensagens detalhadas
        if (response.status === 400) {
          const errorData = await response.json();
          const errorMessages = Array.isArray(errorData.message) 
            ? errorData.message.join(', ') 
            : errorData.message || 'Erro de validação';
          throw new Error(errorMessages);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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
        setFormErrors({});
        setTouchedFields(new Set());
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitStatus('error');
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setStatusMessage('Erro de rede. Verifique sua conexão com a internet.');
      } else if (error instanceof Error) {
        setStatusMessage(`${error.message}`);
      } else {
        setStatusMessage('Erro de conexão. Verifique se o servidor está rodando.');
      }
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
                        onBlur={() => handleFieldBlur('name')}
                        required
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 ${
                          formErrors.name ? 'border-red-400 focus:border-red-400' : ''
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleFieldBlur('email')}
                        required
                        className={`bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 ${
                          formErrors.email ? 'border-red-400 focus:border-red-400' : ''
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      onBlur={() => handleFieldBlur('subject')}
                      required
                      className={`bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 ${
                        formErrors.subject ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Sua mensagem..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleFieldBlur('message')}
                      required
                      className={`bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-lime-400 resize-none ${
                        formErrors.message ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {formErrors.message && (
                        <p className="text-red-400 text-sm">{formErrors.message}</p>
                      )}
                      <p className={`text-sm ml-auto ${
                        formData.message.length < 10 
                          ? 'text-red-400' 
                          : formData.message.length >= 10 
                          ? 'text-green-400' 
                          : 'text-gray-400'
                      }`}>
                        {formData.message.length}/10 caracteres mínimos
                      </p>
                    </div>
                  </div>
                  
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