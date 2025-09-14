# Arquiteturas web

## SPA: Single Page Application

Aplicação de página única onde toda navegação acontece via JavaScript, sem recarregar a página.

- Onde é comum: Dashboards, apps internas
- Frameworks comuns: React, Vue, Angular e Svelte puros
- Carregamento: Inicial lento (bundle grande), navegação instantânea
- SEO: Ruim por padrão (HTML vazio inicial)
- Navegação: Instantânea, sem recarregamentos visíveis entre páginas

**Prós**: Experiência fluida, menos requests entre "páginas"

**Contras**: Bundle grande, SEO complexo, dependente de JavaScript

### Astro vs Next.js para SPA

**Astro**: Não é ideal para SPAs puras. Requer configuração especial e vai contra sua filosofia de zero-JS por padrão. **FICA UM NOJO**, mas dá pra fazer com client:only em tudo e roteamento manual.

**Next.js**: Excelente para SPAs. App Router com "use client" em todos os componentes cria uma SPA tradicional com **roteamento client-side**.

---

## MPA: Multi Page Application

Aplicação com múltiplas páginas HTML onde cada rota carrega uma nova página do servidor.

- Onde é comum: Sites institucionais, blogs, e-commerce
- Frameworks comuns: WordPress (PHP), Rails (Ruby), Laravel (PHP), Django (Python)
- Carregamento: Inicial rápido, cada página recarrega
- SEO: Excelente por padrão (HTML completo)
- Navegação: Recarregamentos visíveis entre páginas

**Prós**: SEO "nativo", menos JavaScript, carregamento progressivo

**Contras**: Navegação mais lenta, mais requests ao servidor

### Astro vs Next.js para MPA

**Astro**: Excelente para MPAs. Arquitetura nativa de múltiplas páginas com hidratação seletiva apenas onde necessário.

**Next.js**: Funciona bem com Pages Router ou App Router + output export. Mais JavaScript que o Astro mesmo nesse "modo MPA".

---

## Sobre a Arquitetura por Ilhas

Páginas estáticas com "ilhas" de interatividade hidratadas seletivamente.

- Onde: Sites de conteúdo com **componentes interativos pontuais**
- Frameworks comuns: Astro, Fresh (Deno), Qwik
- Carregamento: Muito rápido, hidratação sob demanda
- SEO: Excelente (HTML estático com JS mínimo)
- Navegação: MPA tradicional com componentes interativos

**Prós**: Performance máxima, JavaScript mínimo, SEO otimizado

**Contras**: Menos flexibilidade para apps complexas, coordenação entre ilhas

### Astro vs Next.js para Islands

**Astro**: Pioneiro e líder em Islands Architecture. Hidratação seletiva nativa com client:load, client:visible, etc.

**Next.js**: Não tem suporte nativo para Islands. Todos os componentes client são hidratados, mesmo que não visíveis.

---

## Outras Abordagens

### Progressive Web App (PWA)

Aplicação web que funciona como app nativo com capacidades offline.

- Onde: Apps que precisam funcionar offline, mobile-first
- Frameworks comuns: Next.js + Workbox, Vite PWA, Nuxt PWA
- Carregamento: Cache agressivo, funciona offline
- SEO: Depende da implementação (pode ser SPA ou MPA)
- Navegação: Híbrida, pode cachear rotas

**Prós**: Funciona offline, instalável, push notifications

**Contras**: Complexidade adicional, tamanho do cache

### Micro Frontends

Arquitetura onde diferentes equipes desenvolvem partes independentes da aplicação.

- Onde: Aplicações enterprise grandes, equipes distribuídas
- Frameworks comuns: Module Federation, Single SPA, Qiankun
- Carregamento: Cada micro app carrega independentemente
- SEO: Complexo, depende da implementação
- Navegação: Coordenada entre micro apps

**Prós**: Escalabilidade de equipes, deploy independente, tecnologias diferentes

**Contras**: Complexidade alta, overhead de comunicação, bundle duplicado
