
  # Design Log

  This is a code bundle for Design Log. The original project is available at https://www.figma.com/design/Gp9tJFj47Xx36LdY2RUXRA/Design-Log.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.


## Supabase configuration

If you switch to a different Supabase database/project, set these in `.env.local`:

```
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

Without these values, the app falls back to `utils/supabase/info.tsx` (the generated default project settings).
