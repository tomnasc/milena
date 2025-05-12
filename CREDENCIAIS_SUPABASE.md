# Credenciais Supabase para o Projeto Milena

Para conectar sua aplicação ao Supabase, adicione estas variáveis de ambiente ao arquivo `.env.local`:

```
# Credenciais Supabase
NEXT_PUBLIC_SUPABASE_URL=https://dbiawazokjcpzvifcpbj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaWF3YXpva2pjcHp2aWZjcGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMjAyMDksImV4cCI6MjA2MjU5NjIwOX0.c5CtrccdwVNk7oyB18O7GRj8_eH7ED-es5oi_8sZpYE

# Credenciais Stripe (adicionar quando disponíveis)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Estrutura do Banco de Dados

O banco de dados está configurado com as seguintes tabelas:

### Tabela: leads
- Armazena os leads capturados pelo formulário de material gratuito
- Campos: id, nome, email, consentimento_marketing, created_at, updated_at

### Tabela: newsletter
- Armazena as inscrições na newsletter
- Campos: id, email, created_at, updated_at

### Tabela: vendas
- Armazena as vendas de produtos processadas pelo Stripe
- Campos: id, produto_id, valor, stripe_checkout_id, stripe_payment_id, status, email_cliente, created_at, updated_at

## Políticas de Segurança (RLS)

- Inserção pública habilitada para leads e newsletter (sem autenticação)
- Inserção de vendas permitida apenas para o service_role
- Leitura de todas as tabelas limitada ao service_role

---

**Nota importante:** Este arquivo contém informações sensíveis. Não o adicione ao controle de versão. 