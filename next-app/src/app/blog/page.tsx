import { PostList, type Post } from "@ui-components/PostList";

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();
    return posts.slice(0, 3);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div>
            <h2>Blog - Next.js</h2>
            <p>Esta é a página de blog com dados buscados durante o build (SSG).</p>

            <div style={{ margin: "20px 0" }}>
                <PostList posts={posts} />
            </div>

            <div style={{ margin: "20px 0" }}>
                <h3>Navegação:</h3>
                <a href="/" style={{ color: "#007acc", textDecoration: "underline" }}>
                    ← Voltar ao Início
                </a>
            </div>

            <div>
                <h3>Sobre esta página:</h3>
                <ul>
                    <li>Framework: Next.js</li>
                    <li>Rota: /blog</li>
                    <li>Dados: Buscados no build-time (SSG)</li>
                    <li>API: JSONPlaceholder</li>
                </ul>
            </div>
        </div>
    );
}