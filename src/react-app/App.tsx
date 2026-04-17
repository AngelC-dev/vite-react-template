export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            color: "#ff35ff",
            fontSize: "0.9rem",
            letterSpacing: "0.28em",
            marginBottom: "16px",
          }}
        >
          AKAZORTAC AI NODE LAB
        </div>

        <h1
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5rem)",
            margin: 0,
            fontWeight: 900,
            lineHeight: 1.05,
          }}
        >
          ⚡ Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span> Grid
        </h1>

        <p
          style={{
            marginTop: "22px",
            color: "rgba(255,255,255,0.72)",
            fontSize: "1.15rem",
            lineHeight: 1.7,
          }}
        >
          AI-tech compute lab for secure nodes, GPU workloads, private services, and future automation.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
            marginTop: "40px",
          }}
        >
          {[
            ["Cluster State", "ONLINE"],
            ["Primary GPU", "RTX 5090"],
            ["Live Nodes", "3 Visible"],
            ["Security Posture", "Redacted"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#111",
                padding: "16px",
                borderRadius: "14px",
                border: "1px solid rgba(255,0,255,0.14)",
                boxShadow: "0 0 18px rgba(255,0,255,0.14)",
              }}
            >
              <div style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem" }}>{label}</div>
              <div style={{ marginTop: "8px", fontWeight: 800, fontSize: "1.5rem" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
