export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(255,0,255,0.18), transparent 25%), radial-gradient(circle at left, rgba(0,255,255,0.12), transparent 25%), #000",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <div
          style={{
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#ff4dff",
            fontSize: "0.85rem",
            marginBottom: "16px",
          }}
        >
          Akazortac Node Lab
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 900,
            margin: 0,
          }}
        >
          Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span> Grid
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            opacity: 0.78,
          }}
        >
          Private GPU infrastructure • secure node lab • future compute platform
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            style={{
              padding: "14px 22px",
              background: "#ff00ff",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              boxShadow: "0 0 24px rgba(255,0,255,0.35)",
            }}
          >
            Enter Lab
          </a>

          <a
            href="#"
            style={{
              padding: "14px 22px",
              border: "1px solid cyan",
              color: "cyan",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              background: "transparent",
            }}
          >
            View Stack
          </a>
        </div>
      </div>
    </div>
  );
}
