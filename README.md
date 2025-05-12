# Landing Page - Professora Milena Machado

Landing page de alta conversão para a Professora Milena Machado, policial civil do Rio de Janeiro e mentora de concursos para forças policiais. O site serve para captar leads, vender produtos digitais, e construir autoridade da marca pessoal da professora.

## Tecnologias

- **Frontend**: Next.js
- **Hospedagem**: Vercel
- **Banco de Dados**: Supabase
- **Pagamentos**: Stripe

## Funcionalidades

- Layout responsivo (mobile-first)
- Integração Stripe para venda digital
- Captura de leads com Supabase
- Sessão de depoimentos
- Links para redes sociais
- Material gratuito com captura de leads

## Estrutura do Projeto

```
├── app/                  # Diretório principal da aplicação Next.js
│   ├── api/              # API routes para backend
│   │   ├── checkout/     # Integração Stripe
│   │   ├── leads/        # Captura de leads
│   │   └── newsletter/   # Inscrição newsletter
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── components/           # Componentes React reutilizáveis
│   ├── Hero.tsx          # Seção de Hero
│   ├── About.tsx         # Sobre a mentora
│   ├── Products.tsx      # Produtos digitais
│   └── ...               # Outros componentes
├── lib/                  # Utilitários e configurações
│   ├── supabase.ts       # Configuração Supabase
│   └── stripe.ts         # Configuração Stripe
├── public/               # Arquivos estáticos
└── styles/               # Estilos adicionais
```

## Configuração do Ambiente

### Pré-requisitos

- Node.js 18.x ou superior
- Conta na Vercel (hospedagem)
- Conta no Supabase (banco de dados)
- Conta no Stripe (pagamentos)

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_publica_do_stripe
STRIPE_SECRET_KEY=sua_chave_secreta_do_stripe
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar em produção
npm start
```

## Estrutura do Banco de Dados (Supabase)

### Tabela: leads

- `id`: uuid (primary key)
- `nome`: text
- `email`: text
- `consentimento_marketing`: boolean
- `created_at`: timestamp

### Tabela: newsletter

- `id`: uuid (primary key)
- `email`: text
- `created_at`: timestamp

## Configuração do Stripe

1. Crie produtos e preços no dashboard do Stripe
2. Atualize os IDs dos preços no arquivo `components/Products.tsx`

## Deploy

O deploy pode ser feito diretamente na Vercel:

```bash
npm install -g vercel
vercel
```

## Manutenção e SEO

- Verifique o desempenho no Lighthouse regularmente
- Atualize as meta tags em `app/layout.tsx` para otimização de SEO
- Substitua os placeholders por imagens reais

## Licença

Todos os direitos reservados - Professora Milena Machado 