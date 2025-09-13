import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js - Spike CPDD Site",
  description: "Comparação entre Next.js e Astro com biblioteca compartilhada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="container">
            <h1>Next.js Project</h1>
            <p>Usando biblioteca compartilhada de componentes</p>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2025 Spike CPDD - Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
