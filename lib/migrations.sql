-- TABELAS PARA O PROJETO MILENA MACHADO

-- Tabela para capturar leads (formulário de material gratuito)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  consentimento_marketing BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para inscrições na newsletter
CREATE TABLE IF NOT EXISTS public.newsletter (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para vendas de produtos
CREATE TABLE IF NOT EXISTS public.vendas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  produto_id TEXT NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  stripe_checkout_id TEXT NOT NULL,
  stripe_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  email_cliente TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para otimizar consultas
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter(email);
CREATE INDEX IF NOT EXISTS idx_vendas_produto_id ON public.vendas(produto_id);
CREATE INDEX IF NOT EXISTS idx_vendas_status ON public.vendas(status);

-- Permissões RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendas ENABLE ROW LEVEL SECURITY;

-- Políticas para inserção pública de leads (sem autenticação)
CREATE POLICY "Permitir inserção pública de leads"
  ON public.leads FOR INSERT 
  WITH CHECK (true);

-- Políticas para inserção pública na newsletter (sem autenticação)
CREATE POLICY "Permitir inserção pública na newsletter"
  ON public.newsletter FOR INSERT 
  WITH CHECK (true);

-- Políticas para inserção na tabela de vendas (apenas pelo serviço)
CREATE POLICY "Permitir inserção de vendas apenas pelo serviço"
  ON public.vendas FOR INSERT 
  WITH CHECK (auth.role() = 'service_role');

-- Triggers para atualizar timestamps
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger para todas as tabelas
CREATE TRIGGER update_leads_timestamp
BEFORE UPDATE ON public.leads
FOR EACH ROW EXECUTE PROCEDURE update_timestamp();

CREATE TRIGGER update_newsletter_timestamp
BEFORE UPDATE ON public.newsletter
FOR EACH ROW EXECUTE PROCEDURE update_timestamp();

CREATE TRIGGER update_vendas_timestamp
BEFORE UPDATE ON public.vendas
FOR EACH ROW EXECUTE PROCEDURE update_timestamp(); 