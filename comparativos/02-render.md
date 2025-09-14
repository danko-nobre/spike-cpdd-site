# Estratégias de Renderização

## Client-side rendering (CSR)

Renderização no navegador via JavaScript.

- Onde é comum: Dashboards, SPAs, apps internas
- Frameworks comuns: React puro, Vue CLI, Angular, Vite
- Carregamento: Lento inicial, rápido depois
- SEO: Ruim (HTML vazio)
- Navegação: Instantânea após carregamento inicial

**Prós**: Experiência fluida, cache eficiente

**Contras**: Bundle grande, dependente de JS

### Astro vs Next.js para CSR

Astro:

- Focado em SSG, CSR apenas com `client:only`
- Carrega JS mínimo por componente
- Melhor para CSR seletivo

```astro
<ReactDashboard client:only />
```

Next.js:

- CSR nativo via `use client`
- Bundle React completo
- Melhor para SPAs tradicionais

```jsx
export default function App() {
  return <Dashboard />;
}
```

---

## Server-side rendering (SSR)

HTML renderizado no servidor a cada requisição.

- Onde é comum: E-commerce, sites dinâmicos, apps híbridas
- Frameworks comuns: Next.js, Nuxt, SvelteKit, Remix
- Carregamento: Rápido inicial, processamento no servidor
- SEO: Excelente (HTML completo)
- Navegação: Híbrida (inicial server, depois client)

**Prós**: SEO nativo, dados atualizados

**Contras**: Servidor necessário, maior complexidade

### Astro vs Next.js para SSR

Astro:

- SSR nativo via `output: 'server'`
- Hidratação seletiva Onde é comum necessário
- Melhor para sites híbridos (estático + dinâmico)

```javascript
export default defineConfig({
  output: "server",
  adapter: node(),
});
```

Next.js:

- SSR nativo e otimizado
- Server Components por padrão
- Melhor para apps full-stack

```jsx
export default async function Page() {
  const data = await fetch("api/data");
  return <div>{data}</div>;
}
```

---

## Static Site Generation (SSG)

HTML pré-renderizado em build time.

- Onde é comum: Blogs, documentação, landing pages
- Frameworks comuns: Next.js com export, Astro, Gatsby, Nuxt generate
- Carregamento: Muito rápido (arquivos estáticos)
- SEO: Excelente
- Navegação: Tradicional ou híbrida

**Prós**: Performance máxima, hosting barato

**Contras**: Rebuild necessário para mudanças

### Astro vs Next.js para SSG

Astro:

- SSG por padrão, zero-config
- Arquitetura Islands, JS mínimo
- Lighthouse scores naturalmente altos

```astro
---
const posts = await fetch('api/posts').then(r => r.json())
---
<PostList posts={posts} />
```

Next.js:

- SSG via `output: 'export'`
- Requer configuração específica
- Ecossistema React maduro

```jsx
const nextConfig = {
  output: "export",
  trailingSlash: true,
};
```

---

## Incremental Static Regeneration (ISR)

SSG com regeneração sob demanda.

- Onde é comum: E-commerce, CMSs, dados semi-dinâmicos
- Frameworks comuns: Next.js (nativo), Nuxt (experimental)
- Carregamento: Rápido + atualizações automáticas
- Navegação: Híbrida otimizada

**Prós**: Performance de SSG + dados frescos

**Contras**: Infraestrutura específica necessária

### Astro vs Next.js para ISR

Astro:

- Não suporta ISR nativamente
- Alternativa: Server Islands
- Workaround: Rebuild via webhooks/CI

Next.js:

- ISR nativo via `revalidate`
- Otimizado para Vercel
- Ideal para e-commerce

```jsx
export default async function Page() {
  const data = await fetch("api/products", {
    next: { revalidate: 60 },
  });
  return <ProductList products={data} />;
}
```

---

## Edge-side Rendering (ESR)

Renderização em servidores edge globais.

- Onde é comum: Apps globais, middleware dinâmico
- Frameworks comuns: Vercel Edge, Cloudflare Workers, Deno Deploy
- Carregamento: Latência mínima worldwide
- Navegação: Ultra-rápida worldwide

**Prós**: Performance global, personalização geo

**Contras**: Runtime limitado, debugging complexo

### Astro vs Next.js para ESR

Astro:

- Suporte nativo via adapters
- Runtime edge maduro
- Foco em simplicidade

Next.js:

- Suporte nativo otimizado
- Edge Runtime robusto
- Middleware system completo

```jsx
export function middleware(request) {
  const country = request.geo.country;
  return NextResponse.rewrite(`/${country}/page`);
}
```

## Streaming SSR

Renderização progressiva server-side.

- Onde é comum: Apps com dados complexos, dashboards
- Frameworks comuns: React 18+, Next.js App Router, Remix
- Carregamento: Progressivo sem blocking
- Navegação: Loading states naturais

**Prós**: Perceived performance alta

**Contras**: Complexidade de estado

### Astro vs Next.js para Streaming SSR

Astro:

- Não suporta streaming SSR
- Prefere build-time optimization
- Filosofia: simplicidade sobre streaming

Next.js:

- Streaming nativo no App Router
- Suspense boundaries automáticos
- React 18 Server Components

```jsx
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
```
