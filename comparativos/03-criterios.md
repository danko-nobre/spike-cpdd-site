# Critérios de Decisão

## Flexibilidade

- Astro: agnóstico de framework, pode usar React/Vue/Svelte no mesmo projeto
- Next.js: focado em React, mas muito flexível dentro do ecossistema React

## Integração com CMS

- Astro: suporte nativo para MDX, fácil integração com headless CMS
- Next.js: getStaticProps/generateStaticParams para CMS

## Bibliotecas de Componentes

- Astro: pode usar qualquer lib (React, Vue, etc.) e, portanto, qualquer biblioteca, [os .astro no storybook só funcionam se for na gambi](https://github.com/orgs/storybookjs/projects/20/views/1?pane=issue&itemId=111544053&issue=storybookjs%7Cstorybook%7C18356)
- Next.js: storybook nativo, ecossistema React robusto (Chakra, MUI, etc.)

## Acessibilidade

- Astro: HTML semântico por padrão, menos JavaScript = menos problemas
- Next.js: requer configuração manual, libs como react-aria disponíveis

## Curva de Aprendizado

- Astro: baixa (HTML + JS básico), conceitos únicos (Islands, frontmatter)
- Next.js: moderada a alta (React + Next.js patterns + build tools)

## Comunidade e Ecossistema

- Astro: comunidade crescente e grande, mas menor que React
- Next.js: uma das maiores comunidades, Vercel como empresa por trás

## Segurança

- Astro: menos JavaScript = menor superfície de ataque
- Next.js: sanitização necessária, CSP configurável

## Cache e Performance

- Astro: performance excelente por padrão, builds rápidos
- Next.js: ISR, Edge Runtime, Image optimization, requer configuração

## Tamanho do Bundle

- Astro: **~0kB JavaScript por padrão**, cresce conforme necessário
- Next.js: ~40kB+ (React runtime), tree-shaking disponível

## Manutenção e Suporte

- Astro: equipe menor mas ativa, releases frequentes
- Next.js: vercel com suporte enterprise, roadmap claro

## Opções de CMS

- Astro: Markdown/MDX por padrão, qualquer coisa headless
- Next.js: qualquer coisa, qualquer coisa headless
