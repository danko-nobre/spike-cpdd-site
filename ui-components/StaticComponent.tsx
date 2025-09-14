export function StaticComponent() {
    return (
        <div style={{
            padding: "10px",
            border: "2px solid #green",
            margin: "10px 0"
        }}>
            <h4>Componente Estático</h4>
            <p>Este componente não tem JavaScript no cliente</p>
            <button>Botão sem funcionalidade</button>
        </div>
    );
}