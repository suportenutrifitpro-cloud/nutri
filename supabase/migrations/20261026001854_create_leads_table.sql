/*
# Create leads table (single-tenant, no auth)

1. New Tables
- `leads`
- `id` (uuid, primary key)
- `nome` (text, not null) - primeiro nome do lead
- `email` (text, not null) - email do lead
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `leads`.
- Grant INSERT to `anon` + `authenticated` so a landing page sem login possa salvar leads.
- Permitir INSERT público (qualquer visitante pode se cadastrar); sem SELECT/UPDATE/DELETE públicos para proteger os dados dos leads.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON leads TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated WITH CHECK (true);
