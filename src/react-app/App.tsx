export default function App() {
  return (
    <div style={{ background: "#000", color: "white", minHeight: "100vh" }}>
      {/* HERO */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>
          ⚡ Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span> Grid
        </h1>

        <p style={{ opacity: 0.7, marginTop: "20px" }}>
          Private GPU infrastructure • secure node lab • future compute platform
        </p>
      </div>

      {/* DASHBOARD */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#ff00ff" }}>Node Dashboard</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          marginTop: "20px"
        }}>
          <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
            GPU Status<br /><b>ONLINE</b>
          </div>

          <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
            GPU<br /><b>RTX 5090</b>
          </div>

          <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
            Uptime<br /><b>99%</b>
          </div>

          <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
            Jobs<br /><b>0</b>
          </div>
        </div>
      </div>

      {/* TELEMETRY */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "cyan" }}>GPU Telemetry</h2>

        <div style={{ marginTop: "10px" }}>
          Utilization: 0%
          <div style={{ background: "#222", height: "10px" }}>
            <div style={{ width: "10%", height: "10px", background: "cyan" }} />
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          Temp: 34°C
          <div style={{ background: "#222", height: "10px" }}>
            <div style={{ width: "34%", height: "10px", background: "magenta" }} />
          </div>
        </div>
      </div>

      {/* STACK */}
      <div style={{ padding: "20px" }}>
        <h2>Stack</h2>
        <p>Cloudflare • Tailscale • RTX 5090 • Akash • Clore</p>
      </div>
    </div>
  );
}
