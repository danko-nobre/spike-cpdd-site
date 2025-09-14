# Resumo

## Estratégias de Renderização

| Estratégia | Astro       | Next.js   | Caso de Uso     |
| ---------- | ----------- | --------- | --------------- |
| CSR        | Limitado    | Nativo    | SPAs            |
| SSR        | Nativo      | Maduro    | Apps dinâmicas  |
| SSG        | Excelente   | Bom       | Sites estáticos |
| ISR        | Não suporta | Nativo    | E-commerce      |
| ESR        | Nativo      | Otimizado | Apps globais    |
| Streaming  | Não suporta | Nativo    | UX complexa     |

## Arquiteturas Web

| Arquitetura     | Astro     | Next.js | Caso de Uso                    |
| --------------- | --------- | ------- | ------------------------------ |
| SPA             | 1Nojo     | Nativo  | Dashboards, apps internas      |
| MPA             | Excelente | Bom     | Sites institucionais, blogs    |
| Islands         | Pioneiro  | N/A     | Sites com interatividade pontual |
| PWA             | Limitado  | Nativo  | Apps offline, mobile-first     |
| Micro Frontends | N/A       | Possível| Apps enterprise grandes        |

## Critérios Técnicos

| Critério           | Astro              | Next.js           | Impacto          |
| ------------------ | ------------------ | ----------------- | ---------------- |
| Bundle Inicial     | ~0kB JS            | ~40kB+            | Performance      |
| Curva Aprendizado  | Baixa              | Moderada/Alta     | Time to Market   |
| Flexibilidade      | Multi-framework    | React-focado      | Arquitetura      |
| Comunidade         | Crescente          | Estabelecida      | Suporte          |
| CMS Integration    | MDX nativo         | getStaticProps    | Conteúdo         |
| Acessibilidade     | HTML semântico     | Configuração      | Compliance       |
| Deploy Options     | Qualquer host      | Otimizado Vercel  | DevOps           |

## Quando usar cada um

### Astro

- Performance máxima para sites de conteúdo
- Conteúdo estático, com interatividade pontual
- Conteúdo com pouca mudança (alterações via rebuild)
- JS mínimo
- HTML/CSS first

### Next.js

- SSR robusto
- **Alta interatividade**
- Ecossistema React
- Equipe mais experiencia com React
- Apps complexas

## Decisão Rápida

**Escolha Astro se**: Site de conteúdo, performance crítica, JS mínimo

**Escolha Next.js se**: App interativa, SSR necessário, equipe React
