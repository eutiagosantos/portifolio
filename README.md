# 🚀 Portfólio Tiago de Almeida Santos

[![Deploy Status](https://img.shields.io/badge/Frontend-Live-brightgreen?style=for-the-badge&logo=vercel)](https://portifolio-ashen-xi.vercel.app)
[![API Status](https://img.shields.io/badge/Backend-Live-brightgreen?style=for-the-badge&logo=render)](https://portifolio-5-817g.onrender.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> Portfólio pessoal desenvolvido com React + TypeScript e NestJS, apresentando projetos, experiências e habilidades técnicas de forma interativa e moderna.

## 📋 Índice

- [🚀 Demo](#-demo)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)
- [🚀 Deploy](#-deploy)
- [📧 Formulário de Contato](#-formulário-de-contato)
- [🎨 Design e UX](#-design-e-ux)
- [🔒 Segurança](#-segurança)
- [📱 Responsividade](#-responsividade)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📞 Contato](#-contato)

## 🚀 Demo

**🌐 Frontend:** [https://portifolio-ashen-xi.vercel.app](https://portifolio-ashen-xi.vercel.app)  
**🔧 API:** [https://portifolio-5-817g.onrender.com](https://portifolio-5-817g.onrender.com)

## ✨ Funcionalidades

### 🎯 Principais Features

- **📱 Design Responsivo**: Adaptável a todos os dispositivos e tamanhos de tela
- **🎭 Animações Fluidas**: Transições suaves e efeitos visuais modernos
- **📧 Formulário de Contato**: Sistema completo de envio de emails com validação
- **⚡ Performance Otimizada**: Carregamento rápido e experiência fluida
- **🔍 SEO Friendly**: Otimizado para motores de busca
- **🛡️ Validação Robusta**: Validação tanto no frontend quanto no backend
- **🎨 UI/UX Moderna**: Interface clean e profissional

### 📑 Seções

- **🏠 Hero**: Apresentação inicial com call-to-action
- **👤 Sobre**: Informações pessoais e profissionais
- **💼 Experiência**: Histórico profissional e acadêmico
- **🚧 Projetos**: Showcase dos principais projetos desenvolvidos
- **📧 Contato**: Formulário funcional para comunicação

## 🛠️ Tecnologias

### Frontend
- **⚛️ React 18** - Biblioteca para interfaces de usuário
- **📘 TypeScript** - Superset tipado do JavaScript
- **⚡ Vite** - Build tool moderno e rápido
- **🎨 Tailwind CSS** - Framework CSS utilitário
- **🧩 Shadcn/ui** - Componentes UI reutilizáveis
- **🔄 React Router** - Roteamento SPA
- **📱 React Hook Form** - Gerenciamento de formulários

### Backend
- **🟢 Node.js** - Runtime JavaScript
- **🏗️ NestJS** - Framework progressivo para Node.js
- **📧 Nodemailer** - Biblioteca para envio de emails
- **✅ Class Validator** - Validação de DTOs
- **🔄 Class Transformer** - Transformação de objetos
- **📝 Handlebars** - Template engine para emails

### DevOps & Deploy
- **☁️ Vercel** - Deploy do frontend
- **🚀 Render** - Deploy do backend
- **📦 Git** - Controle de versão
- **🔧 ESLint** - Linting de código
- **💅 Prettier** - Formatação de código

## 📂 Estrutura do Projeto

```
portifolio/
├── 📁 backend/portifolio/          # API NestJS
│   ├── 📁 src/
│   │   ├── 📁 controllers/         # Controladores da API
│   │   ├── 📁 dto/                 # Data Transfer Objects
│   │   ├── 📁 mail/                # Serviço de email
│   │   └── 📄 main.ts              # Entry point da aplicação
│   ├── 📄 package.json
│   └── 📄 .env.example
├── 📁 inspired-scroll-show/        # Frontend React
│   ├── 📁 src/
│   │   ├── 📁 components/          # Componentes React
│   │   │   ├── 📁 portfolio/       # Componentes do portfólio
│   │   │   └── 📁 ui/              # Componentes UI reutilizáveis
│   │   ├── 📁 hooks/               # Custom hooks
│   │   ├── 📁 lib/                 # Utilitários
│   │   └── 📁 pages/               # Páginas da aplicação
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   └── 📄 .env.example
└── 📄 README.md
```

## ⚙️ Instalação e Configuração

### 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

### 🔧 Configuração do Backend

1. **Clone o repositório**
```bash
git clone https://github.com/eutiagosantos/portifolio.git
cd portifolio/backend/portifolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

4. **Edite o arquivo `.env`**
```env
PORT=3000
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app_gmail
FRONTEND_URL=http://localhost:8080
```

5. **Execute o servidor**
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start
```

### 🎨 Configuração do Frontend

1. **Navegue para o diretório do frontend**
```bash
cd ../inspired-scroll-show
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

4. **Edite o arquivo `.env`**
```env
VITE_API_URL=http://localhost:3000
```

5. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

6. **Acesse a aplicação**
```
http://localhost:8080
```

## 🚀 Deploy

### 🌐 Frontend (Vercel)

1. **Conecte seu repositório à Vercel**
2. **Configure as variáveis de ambiente:**
   - `VITE_API_URL=https://seu-backend.onrender.com`
3. **Deploy automático a cada push na main**

### ⚙️ Backend (Render)

1. **Conecte seu repositório ao Render**
2. **Configure as variáveis de ambiente:**
   - `PORT=3000`
   - `EMAIL_USER=seu_email@gmail.com`
   - `EMAIL_PASS=sua_senha_app_gmail`
   - `FRONTEND_URL=https://seu-frontend.vercel.app`
3. **Deploy automático a cada push na main**

## 📧 Formulário de Contato

### ✨ Funcionalidades

- **✅ Validação em tempo real** no frontend
- **🛡️ Validação robusta** no backend
- **📧 Envio de email** automático
- **🔄 Feedback visual** para o usuário
- **🚫 Proteção contra spam**

### 📝 Validações Implementadas

- **Nome**: Mínimo 2 caracteres
- **Email**: Formato válido obrigatório
- **Assunto**: Mínimo 3 caracteres
- **Mensagem**: Mínimo 10 caracteres

### 🔧 Configuração do Gmail

Para o funcionamento do formulário de contato:

1. **Ative a autenticação de 2 fatores** na sua conta Google
2. **Gere uma senha de app:**
   - Acesse [Configurações da Conta Google](https://myaccount.google.com)
   - Vá em "Segurança" → "Senhas de app"
   - Selecione "E-mail" e gere uma senha de 16 caracteres
3. **Use essa senha** na variável `EMAIL_PASS`

## 🎨 Design e UX

### 🎯 Princípios de Design

- **🎨 Design System**: Cores e componentes consistentes
- **📱 Mobile First**: Desenvolvido primeiro para dispositivos móveis
- **♿ Acessibilidade**: Seguindo padrões WCAG
- **⚡ Performance**: Otimizado para carregamento rápido
- **🔍 SEO**: Estrutura semântica e meta tags otimizadas

### 🎭 Animações

- **🌊 Scroll Animations**: Elementos aparecem conforme scroll
- **🎪 Hover Effects**: Interações sutis nos elementos
- **⚡ Loading States**: Feedback visual durante carregamento
- **🔄 Transitions**: Transições suaves entre estados

## 🔒 Segurança

### 🛡️ Medidas Implementadas

- **🚫 CORS**: Configurado para aceitar apenas origens autorizadas
- **✅ Validação**: DTOs com class-validator no backend
- **🔐 Sanitização**: Dados limpos antes do processamento
- **📧 Rate Limiting**: Proteção contra spam (configurável)
- **🔒 Environment Variables**: Credenciais protegidas

### 🚨 Boas Práticas

- **❌ Nunca** commitar arquivos `.env`
- **✅ Sempre** usar HTTPS em produção
- **🔄 Renovar** senhas de app periodicamente
- **📊 Monitorar** logs de erro e acesso

## 📱 Responsividade

### 📐 Breakpoints

- **📱 Mobile**: < 768px
- **💻 Tablet**: 768px - 1024px
- **🖥️ Desktop**: > 1024px
- **📺 Large Desktop**: > 1440px

### 🎯 Testes Realizados

- ✅ Desktop (diversos tamanhos)
- ✅ Navegadores modernos

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **🍴 Fork** o projeto
2. **🌿 Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** suas mudanças (`git commit -m 'Add: amazing feature'`)
4. **📤 Push** para a branch (`git push origin feature/AmazingFeature`)
5. **🔄 Abra** um Pull Request

### 📝 Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de build/config

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**👨‍💻 Tiago de Almeida Santos**

- **🌐 Portfólio**: [https://portifolio-ashen-xi.vercel.app](https://portifolio-ashen-xi.vercel.app)
- **📧 Email**: tiagoalmeidasantos1812@gmail.com
- **💼 LinkedIn**: [linkedin.com/in/tiago-almeida-santos](https://linkedin.com/in/tiago-almeida-santos)
- **🐙 GitHub**: [github.com/eutiagosantos](https://github.com/eutiagosantos)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!**

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React 18">
  <img src="https://img.shields.io/badge/NestJS-10-red?style=for-the-badge&logo=nestjs" alt="NestJS 10">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5">
</p>