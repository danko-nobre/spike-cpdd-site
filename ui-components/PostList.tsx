"use client";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    return (
        <div>
            <h3>Posts da API (dados buscados no build):</h3>
            <div style={{ display: "grid", gap: "20px", marginTop: "10px" }}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "15px",
                            borderRadius: "5px",
                        }}
                    >
                        <h4 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                            {post.title}
                        </h4>
                        <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
                            {post.body.substring(0, 100)}...
                        </p>
                        <small style={{ color: "#999" }}>Post #{post.id}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}