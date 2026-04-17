import { useEffect, useState } from "react";

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "22px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 24px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.95rem",
          marginBottom: "10px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function TelemetryBar({
  label,
  value,
  color,
  suffix = "%",
}: {
  label: string;
  value: number;
  color: string;
  suffix?: string;
}) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        <span>{label}</span>
        <span style={{ fontWeight: 700 }}>
          {value}
          {suffix}
        </span>
      </div>

      <div
        style={{
          height: "12px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.max(6, value)}%`,
            height: "100%",
            borderRadius: "999px",
            background: color,
            boxShadow: `0 0 18px ${color}`,
            transition: "0.45s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [gpuUtil, setGpuUtil] = useState(18);
  const [gpuTemp, setGpuTemp] = useState(41);
  const [uptime, setUptime] = useState(99);
  const [jobs, setJobs] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setGpuUtil((v) => Math.max(8, Math.min(95, Math.round(v + (Math.random() * 10 - 5)))));
      setGpuTemp((v) => Math.max(35, Math.min(76, Math.round(v + (Math.random() * 4 - 2)))));
      setUptime((v) => Math.max(97, Math.min(100, Math.round(v + (Math.random() * 2 - 1)))));
      setJobs((v) => {
        const rand = Math.random();
        if (rand > 0.8) return Math.min(5, v + 1);
        if (rand < 0.25) return Math.max(0, v - 1);
        return v;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,80,255,0.18), transparent 28%), radial-gradient(circle at top right, rgba(0,255,255,0.12), transparent 24%), linear-gradient(180deg, #050505 0%, #0a0a0f 100%)",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px 90px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            marginBottom: "52px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                letterSpacing: "0.24em",
                color: "#9d7bff",
                marginBottom: "8px",
              }}
            >
              AKAZORTAC
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              AI Node Lab
            </div>
          </div>

          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#9efcff",
              fontWeight: 600,
            }}
          >
            System Healthy
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "34px",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 30px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(157,123,255,0.12)",
                border: "1px solid rgba(157,123,255,0.24)",
                color: "#c5b4ff",
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Private Compute Infrastructure
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 8vw, 5.2rem)",
                lineHeight: 1.02,
                fontWeight: 900,
              }}
            >
              Build on the
              <br />
              <span style={{ color: "#9d7bff" }}>Akazortac</span> Grid
            </h1>

            <p
              style={{
                marginTop: "24px",
                maxWidth: "720px",
                color: "rgba(255,255,255,0.72)",
                fontSize: "1.15rem",
                lineHeight: 1.8,
              }}
            >
              AI-ready node infrastructure for GPU workloads, secure services,
              private tooling, and future automation. Designed like a startup,
              operated like a control plane.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button
                style={{
                  padding: "14px 22px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(90deg, #9d7bff, #00e5ff)",
                  color: "#050505",
                  fontWeight: 800,
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Launch Dashboard
              </button>

              <button
                style={{
                  padding: "14px 22px",
                  borderRadius: "14px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                View Infrastructure
              </button>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "28px",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 30px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              Live Telemetry
            </div>

            <TelemetryBar label="GPU Utilization" value={gpuUtil} color="#00e5ff" />
            <TelemetryBar label="GPU Temperature" value={gpuTemp} color="#ff4dcb" suffix="°C" />
            <TelemetryBar label="Uptime" value={uptime} color="#8dff65" />

            <div
              style={{
                marginTop: "22px",
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.58)",
                  fontSize: "0.88rem",
                  marginBottom: "8px",
                }}
              >
                Operator Insight
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                }}
              >
                Public view is sanitized. Node aliases and safe health signals
                are visible. Internal addressing and private control surfaces
                remain hidden.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <MetricCard label="Cluster State" value="ONLINE" />
            <MetricCard label="Primary GPU" value="RTX 5090" />
            <MetricCard label="Jobs Active" value={String(jobs)} />
            <MetricCard label="Visible Nodes" value="3" />
          </div>
        </div>

        <div style={{ marginTop: "34px" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            Node Presence
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              ["zortac", "Primary GPU Node", "ONLINE", "Private Mesh"],
              ["i9node", "Compute Worker", "IDLE", "US East"],
              ["ar-io-datum-i7", "Storage / Data Node", "SYNCING", "Private Mesh"],
            ].map(([name, role, status, zone]) => (
              <div
                key={name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  padding: "22px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>{name}</div>
                  <div
                    style={{
                      padding: "7px 12px",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      color:
                        status === "ONLINE"
                          ? "#8dffb3"
                          : status === "IDLE"
                          ? "#9efcff"
                          : "#ffd46f",
                      background:
                        status === "ONLINE"
                          ? "rgba(0,255,120,0.10)"
                          : status === "IDLE"
                          ? "rgba(0,229,255,0.10)"
                          : "rgba(255,212,111,0.10)",
                      border:
                        status === "ONLINE"
                          ? "1px solid rgba(0,255,120,0.18)"
                          : status === "IDLE"
                          ? "1px solid rgba(0,229,255,0.18)"
                          : "1px solid rgba(255,212,111,0.18)",
                    }}
                  >
                    {status}
                  </div>
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    marginBottom: "8px",
                  }}
                >
                  {role}
                </div>

                <div
                  style={{
                    color: "#9d7bff",
                    fontSize: "0.92rem",
                  }}
                >
                  {zone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
