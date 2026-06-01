create table if not exists public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  tester_program text not null default 'google-play-closed-test',
  created_at timestamptz not null default now()
);

alter table public.early_access_signups enable row level security;

create policy "No public reads for early access signups"
  on public.early_access_signups
  for select
  using (false);
