import { SimpleButton } from "@ui-components/SimpleButton";
import { StaticComponent } from "@ui-components/StaticComponent";

export default function Home() {
  return (
    <div>
      <h2>Página Inicial do Next.js</h2>
      <p>Este é um exemplo de página usando Next.js com um componente da biblioteca compartilhada.</p>

      <div style={{ margin: "20px 0" }}>
        <h3>Componente Interativo (com "use client"):</h3>
        <SimpleButton />
      </div>

      <div style={{ margin: "20px 0" }}>
        <h3>Componente Estático (sem "use client"):</h3>
        <StaticComponent />
      </div>

      <div style={{ margin: "20px 0" }}>
        <h3>Navegação:</h3>
        <a href="/blog" style={{ color: "#007acc", textDecoration: "underline" }}>
          Ir para o Blog →
        </a>
      </div>

      <div>
        <h3>Sobre este projeto:</h3>
        <ul>
          <li>Framework: Next.js</li>
          <li>Componente interativo: JavaScript no cliente</li>
          <li>Componente estático: Apenas HTML</li>
        </ul>
      </div>
    </div>
  );
}
