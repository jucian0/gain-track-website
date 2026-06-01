create table if not exists public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'website',
  tester_program text not null default 'google-play-closed-test',
  created_at timestamptz not null default now()
);

alter table public.early_access_signups
  add column if not exists id uuid default gen_random_uuid(),
  add column if not exists email text,
  add column if not exists source text default 'website',
  add column if not exists tester_program text default 'google-play-closed-test',
  add column if not exists created_at timestamptz default now();

alter table public.early_access_signups
  alter column email set not null,
  alter column source set not null,
  alter column source set default 'website',
  alter column tester_program set not null,
  alter column tester_program set default 'google-play-closed-test',
  alter column created_at set not null,
  alter column created_at set default now();

create unique index if not exists early_access_signups_email_key
  on public.early_access_signups (email);

alter table public.early_access_signups enable row level security;

drop policy if exists "No public reads for early access signups"
  on public.early_access_signups;

drop policy if exists "Anyone can join early access"
  on public.early_access_signups;

create policy "No public reads for early access signups"
  on public.early_access_signups
  for select
  using (false);
