# Configuração do Sistema de Email

## Pré-requisitos

1. **Conta Gmail**: Você precisa de uma conta Gmail para enviar emails
2. **Senha de App**: Configure uma senha de aplicativo no Gmail

## Configuração do Gmail

### 1. Ativar Autenticação de 2 Fatores
1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá em "Segurança"
3. Ative a "Verificação em duas etapas"

### 2. Gerar Senha de App
1. Ainda em "Segurança"
2. Clique em "Senhas de app"
3. Selecione "Email" como aplicativo
4. Copie a senha gerada (16 caracteres)

## Configuração do Projeto

### 1. Criar arquivo .env
```bash
cp env.example .env
```

### 2. Editar .env
```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app_gerada
PORT=3000
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Executar o servidor
```bash
npm run start:dev
```

## Testando o Sistema

1. Acesse o frontend em `http://localhost:5173`
2. Vá para a seção de contato
3. Preencha o formulário e envie
4. Verifique se você recebeu:
   - Email de notificação (para tiagoalmeidasantos1812@gmail.com)
   - Email de confirmação (para o email do remetente)

## Estrutura dos Templates

- `src/templates/contact.hbs`: Template para notificação de nova mensagem
- `src/templates/confirmation.hbs`: Template para confirmação ao remetente

## Endpoints

- `POST /contact/send`: Envia email de contato
  - Body: `{ name, email, subject, message }`
  - Retorna: `{ success: boolean, message: string }`

## Troubleshooting

### Erro de autenticação
- Verifique se a senha de app está correta
- Certifique-se de que a autenticação de 2 fatores está ativa

### Erro de CORS
- Verifique se as URLs do frontend estão configuradas no `main.ts`

### Email não chega
- Verifique a pasta de spam
- Confirme se as configurações SMTP estão corretas
