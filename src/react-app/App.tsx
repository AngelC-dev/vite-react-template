export default function App() {
  const utilization = 0;
  const temp = 34;

  const cardStyle: React.CSSProperties = {
    background: "#111",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255,0,255,0.2)",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        paddingBottom: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>
          ⚡ Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span> Grid
        </h1>

        <p style={{ opacity: 0.7, marginTop: "20px" }}>
          Private GPU infrastructure • secure node lab • future compute platform
        </p>
      </div>

      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#ff00ff" }}>Node Dashboard</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <div
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 25px rgba(255,0,255,0.5)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 15px rgba(255,0,255,0.2)")
            }
          >
            GPU Status
            <br />
            <b>ONLINE</b>
          </div>

          <div
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 25px rgba(255,0,255,0.5)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 15px rgba(255,0,255,0.2)")
            }
          >
            GPU
            <br />
            <b>RTX 5090</b>
          </div>

          <div
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 25px rgba(255,0,255,0.5)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 15px rgba(255,0,255,0.2)")
            }
          >
            Uptime
            <br />
            <b>99%</b>
          </div>

          <div
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 25px rgba(255,0,255,0.5)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 15px rgba(255,0,255,0.2)")
            }
          >
            Jobs
            <br />
            <b>0</b>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "cyan" }}>GPU Telemetry</h2>

        <div style={{ marginTop: "15px" }}>
          Utilization: {utilization}%
          <div style={{ background: "#222", height: "10px", borderRadius: "5px" }}>
            <div
              style={{
                width: `${Math.max(5, utilization)}%`,
                height: "10px",
                background: "cyan",
                borderRadius: "5px",
                transition: "0.4s ease",
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "15px" }}>
          Temp: {temp}°C
          <div style={{ background: "#222", height: "10px", borderRadius: "5px" }}>
            <div
              style={{
                width: `${Math.max(5, temp)}%`,
                height: "10px",
                background: "magenta",
                borderRadius: "5px",
                transition: "0.4s ease",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Stack</h2>
        <p style={{ opacity: 0.7 }}>
          Cloudflare • Tailscale • RTX 5090 • Akash • Clore
        </p>
      </div>
    </div>
  );
}
