import React, { useEffect, useState } from "react";

type NodeInfo = {
  name: string;
  role: string;
  status: "ONLINE" | "IDLE" | "SYNCING";
  zone: string;
};

function TelemetryRow({
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
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
          color: "rgba(255,255,255,0.86)",
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
          background: "#222",
          height: "12px",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            width: `${Math.max(6, value)}%`,
            height: "12px",
            borderRadius: "999px",
            background: color,
            boxShadow: `0 0 14px ${color}`,
            transition: "0.5s ease",
          }}
        />
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: "ONLINE" | "IDLE" | "SYNCING" }) {
  let style = {};

  if (status === "ONLINE") {
    style = {
      color: "#9bffb1",
      background: "rgba(0,255,100,0.1)",
      border: "1px solid rgba(0,255,100,0.18)",
    };
  } else if (status === "IDLE") {
    style = {
      color: "#9ffcff",
      background: "rgba(0,255,255,0.08)",
      border: "1px solid rgba(0,255,255,0.18)",
    };
  } else {
    style = {
      color: "#ffd36f",
      background: "rgba(255,210,0,0.08)",
      border: "1px solid rgba(255,210,0,0.18)",
    };
  }

  return (
    <div
      style={{
        ...style,
        padding: "6px 10px",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
      }}
    >
      {status}
    </div>
  );
}

export default function App() {
  const [pulse, setPulse] = useState(0);
  const [utilization, setUtilization] = useState(8);
  const [temp, setTemp] = useState(34);
  const [network, setNetwork] = useState(72);

  const nodes: NodeInfo[] = [
    {
      name: "Zortac",
      role: "Primary GPU Node",
      status: "ONLINE",
      zone: "Private Mesh",
    },
    {
      name: "i9node",
      role: "Compute Worker",
      status: "IDLE",
      zone: "US East",
    },
    {
      name: "AR Datum",
      role: "Storage / Data Node",
      status: "SYNCING",
      zone: "Private Mesh",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);

      setUtilization((u) => {
        const next = u + (Math.random() * 8 - 4);
        return Math.max(5, Math.min(38, Math.round(next)));
      });

      setTemp((t) => {
        const next = t + (Math.random() * 2 - 1);
        return Math.max(30, Math.min(48, Math.round(next)));
      });

      setNetwork((n) => {
        const next = n + (Math.random() * 10 - 5);
        return Math.max(35, Math.min(95, Math.round(next)));
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(20,20,20,0.95), rgba(10,10,10,0.95))",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,0,255,0.14)",
    boxShadow: "0 0 18px rgba(255,0,255,0.14)",
    transition: "0.3s ease",
    backdropFilter: "blur(6px)",
  };

  const sectionTitle = {
    color: "#19f0ff",
    fontSize: "2rem",
    marginBottom: "18px",
    fontWeight: 800,
    letterSpacing: "0.01em" as const,
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,0,255,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(0,255,255,0.12), transparent 28%), #000",
        color: "white",
        minHeight: "100vh",
        paddingBottom: "90px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                color: "#ff35ff",
                fontSize: "0.8rem",
                letterSpacing: "0.28em",
              }}
            >
              AKAZORTAC
            </div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>
              AI Node Lab
            </div>
          </div>

          <div
            style={{
              fontSize: "0.9rem",
              color: "#9ffcff",
              padding: "8px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(0,255,255,0.25)",
              background: "rgba(0,255,255,0.08)",
              boxShadow: `0 0 ${10 + pulse / 8}px rgba(0,255,255,0.18)`,
            }}
          >
            Mesh Healthy
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "44px 22px 0 22px",
        }}
      >
        <div style={{ textAlign: "center", padding: "30px 0 40px 0" }}>
          <div
            style={{
              display: "inline-block",
              marginBottom: "14px",
              color: "#ff59ff",
              letterSpacing: "0.28em",
              fontSize: "0.9rem",
            }}
          >
            PRIVATE INFRASTRUCTURE • AI SYSTEMS • SECURE MESH
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
              lineHeight: 1.02,
              margin: 0,
              fontWeight: 900,
            }}
          >
            ⚡ Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span>{" "}
            Grid
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "22px auto 0 auto",
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            AI-tech compute lab for secure nodes, GPU workloads, private
            services, and future automation. Public-facing by design. Sensitive
            control paths stay off the public map.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          {[
            ["Cluster State", "ONLINE"],
            ["Primary GPU", "RTX 5090"],
            ["Live Nodes", "3 Visible"],
            ["Security Posture", "Redacted Public View"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 26px rgba(255,0,255,0.34)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(255,0,255,0.14)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem" }}
              >
                {label}
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontWeight: 800,
                  fontSize: "1.55rem",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "56px" }}>
          <div style={sectionTitle}>Live Telemetry</div>

          <div style={{ ...cardStyle, padding: "22px" }}>
            <TelemetryRow
              label="GPU Utilization"
              value={utilization}
              color="cyan"
            />
            <TelemetryRow
              label="GPU Temperature"
              value={temp}
              color="magenta"
              suffix="°C"
            />
            <TelemetryRow
              label="Network Health"
              value={network}
              color="#8bff5a"
              suffix="%"
            />
          </div>
        </div>

        <div style={{ marginTop: "56px" }}>
          <div style={{ ...sectionTitle, color: "#ff35ff" }}>Node Presence</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
            }}
          >
            {nodes.map((node) => (
              <div
                key={node.name}
                style={cardStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(0,255,255,0.22)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 18px rgba(255,0,255,0.14)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ fontSize: "1.25rem", fontWeight: 800 }}>
                    {node.name}
                  </div>
                  <StatusPill status={node.status} />
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  {node.role}
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    color: "#9ffcff",
                    fontSize: "0.95rem",
                  }}
                >
                  {node.zone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "56px" }}>
          <div style={sectionTitle}>AI Layer</div>

          <div style={{ ...cardStyle, padding: "22px" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ff7dff" }}>
              Operator Insight
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                marginTop: "12px",
                marginBottom: 0,
              }}
            >
              System posture is stable. Public site exposes identity and health
              indicators only. Administrative paths, internal addressing, and
              direct control surfaces remain private.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
