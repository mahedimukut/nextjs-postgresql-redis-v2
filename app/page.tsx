export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Next.js + PostgreSQL + Redis</h1>
      <p style={{ color: "#94a3b8", maxWidth: "600px", lineHeight: 1.6, marginBottom: "2rem" }}>Your fullstack application is live on HostifyCloud. Clone this repository locally to start building.</p>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ padding: "1rem 1.5rem", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <strong style={{ color: "#38bdf8" }}>PostgreSQL 16</strong>
          <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.25rem" }}>Prisma ORM Ready</div>
        </div>
        <div style={{ padding: "1rem 1.5rem", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <strong style={{ color: "#f87171" }}>Redis 7</strong>
          <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.25rem" }}>In-Memory Cache Ready</div>
        </div>
      </div>
      <div style={{ padding: "1rem", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "monospace", fontSize: "0.85rem" }}>
        git push origin main &rarr; Auto-deploys to HostifyCloud
      </div>
    </main>
  );
}
