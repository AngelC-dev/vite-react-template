import { useEffect, useMemo, useState } from "react";

type NodeStatus = "ONLINE" | "IDLE" | "SYNCING" | "OFFLINE";

type NodeInfo = {
  name: string;
  role: string;
  status: NodeStatus;
  zone: string;
  health: number;
};

function StatusPill({ status }: { status: NodeStatus }) {
  const styles: Record<NodeStatus, React.CSSProperties> = {
    ONLINE: {
      color: "#9bffb1",
      background: "rgba(0,255,100,0.10)",
      border: "1px solid rgba(0,255,100,0.22)",
      boxShadow: "0 0 12px rgba(0,255,100,0.14)",
    },
    IDLE: {
      color: "#9ffcff",
      background: "rgba(0,255,255,0.10)",
      border: "1px solid rgba(0,255,255,0.22)",
      boxShadow: "0 0 12px rgba(0,255,255,0.14)",
    },
    SYNCING: {
      color: "#ffd36f",
      background: "rgba(255,210,0,0.10)",
      border: "1px solid rgba(255,210,0,0.22)",
      boxShadow: "0 0 12px rgba(255,210,0,0.14)",
    },
    OFFLINE: {
      color: "#ff9b9b",
      background: "rgba(255,0,80,0.10)",
      border: "1px solid rgba(255,0,80,0.22)",
      boxShadow: "0 0 12px rgba(255,0,80,0.14)",
    },
  };

  return (
    <span
      style={{
        ...styles[status],
        padding: "7px 11px",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
        display: "inline-block",
      }}
    >
      {status}
    </span>
  );
}

function MetricBar({
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
          marginBottom: "8px",
          color: "rgba(255,255,255,0.86)",
          fontSize: "0.98rem",
        }}
      >
        <span>{label}</span>
        <span style={{ fontWeight: 800 }}>
          {value}
          {suffix}
        </span>
      </div>

      <div
        style={{
          height: "12px",
          background: "rgba(255,255,255,0.10)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.max(6, Math.min(100, value))}%`,
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

export default function App() {
  const [pulse, setPulse] = useState(0);
  const [gpuUtil, setGpuUtil] = useState(18);
  const [gpuTemp, setGpuTemp] = useState(41);
  const [networkHealth, setNetworkHealth] = useState(93);
  const [jobs, setJobs] = useState(1);
  const [uptime] = useState(99.3);
  const [insightIndex, setInsightIndex] = useState(0);

  const nodes: NodeInfo[] = useMemo(
    () => [
      {
        name: "zortac",
        role: "Primary GPU Node",
        status: "ONLINE",
        zone: "Private Mesh",
        health: 97,
      },
      {
        name: "i9node",
        role: "Compute Worker",
        status: "IDLE",
        zone: "US East",
        health: 91,
      },
      {
        name: "ar-io-datum-i7",
        role: "Storage / Data Node",
        status: "SYNCING",
        zone: "Private Mesh",
        health: 88,
      },
    ],
    []
  );

  const insights = [
    "Public view is sanitized. Internal addressing and control paths remain private.",
    "Mesh health is stable. Node aliases exposed, topology withheld.",
    "Primary GPU lane is healthy. Safe telemetry visible, management layer hidden.",
    "Public dashboard active. Private controls should stay behind Tailscale or Access.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);

      setGpuUtil((v) => {
        const next = v + (Math.random() * 12 - 6);
        return Math.max(7, Math.min(96, Math.round(next)));
      });

      setGpuTemp((v) => {
        const next = v + (Math.random() * 4 - 2);
        return Math.max(34, Math.min(78, Math.round(next)));
      });

      setNetworkHealth((v) => {
        const next = v + (Math.random() * 4 - 2);
        return Math.max(82, Math.min(100, Math.round(next)));
      });

      setJobs((v) => {
        const rand = Math.random();
        if (rand > 0.82) return Math.min(4, v + 1);
        if (rand < 0.18) return Math.max(0, v - 1);
        return v;
      });
    }, 1800);

    const insightTimer = setInterval(() => {
      setInsightIndex((i) => (i + 1) % insights.length);
    }, 4200);

    return () => {
      clearInterval(timer);
      clearInterval(insightTimer);
    };
  }, [insights.length]);

  const onlineNodes = nodes.filter((n) => n.status !== "OFFLINE").length;

  const cardStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(20,20,20,0.96), rgba(8,8,8,0.96))",
    padding: "18px",
    borderRadius: "18px",
    border: "1px solid rgba(255,0,255,0.14)",
    boxShadow: "0 0 20px rgba(255,0,255,0.12)",
    transition: "0.28s ease",
  };

  const sectionTitle: React.CSSProperties = {
    color: "#18f0ff",
    fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
    fontWeight: 900,
    marginBottom: "18px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(255,0,255,0.16), transparent 26%), radial-gradient(circle at left bottom, rgba(0,255,255,0.10), transparent 24%), #000",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(0,0,0,0.58)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                color: "#ff4df8",
                letterSpacing: "0.28em",
                fontSize: "0.8rem",
              }}
            >
              AKAZORTAC
            </div>
            <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>
              AI Node Lab
            </div>
          </div>

          <div
            style={{
              padding: "8px 12px",
              borderRadius: "999px",
              color: "#a8ffff",
              background: "rgba(0,255,255,0.08)",
              border: "1px solid rgba(0,255,255,0.24)",
              boxShadow: `0 0 ${10 + pulse / 8}px rgba(0,255,255,0.18)`,
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            Mesh Healthy
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "36px 20px 0" }}>
        <div style={{ textAlign: "center", padding: "18px 0 34px" }}>
          <div
            style={{
              display: "inline-block",
              color: "#ff5dff",
              fontSize: "0.92rem",
              letterSpacing: "0.30em",
              marginBottom: "18px",
            }}
          >
            AKAZORTAC AI NODE LAB V4
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 10vw, 5.6rem)",
              lineHeight: 1.04,
              fontWeight: 900,
            }}
          >
            ⚡ Enter the <span style={{ color: "#ff00ff" }}>Akazortac</span> Grid
          </h1>

          <p
            style={{
              maxWidth: "860px",
              margin: "24px auto 0",
              color: "rgba(255,255,255,0.74)",
              fontSize: "clamp(1.05rem, 4vw, 1.35rem)",
              lineHeight: 1.8,
            }}
          >
            AI-tech compute lab for secure nodes, GPU workloads, private services,
            and future automation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            ["Cluster State", "ONLINE"],
            ["Primary GPU", "RTX 5090"],
            ["Live Nodes", `${onlineNodes} Visible`],
            ["Jobs Active", `${jobs}`],
          ].map(([label, value]) => (
            <div
              key={label}
              style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(255,0,255,0.28)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255,0,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.95rem",
                  marginBottom: "10px",
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: "2.2rem", fontWeight: 900 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px" }}>
          <div style={sectionTitle}>Live Telemetry</div>

          <div style={{ ...cardStyle, padding: "22px" }}>
            <MetricBar label="GPU Utilization" value={gpuUtil} color="cyan" />
            <MetricBar label="GPU Temperature" value={gpuTemp} color="magenta" suffix="°C" />
            <MetricBar
              label="Network Health"
              value={networkHealth}
              color="#8bff5a"
              suffix="%"
            />
            <MetricBar label="Uptime" value={Math.round(uptime)} color="#6aa8ff" suffix="%" />
          </div>
        </div>

        <div style={{ marginTop: "48px" }}>
          <div style={{ ...sectionTitle, color: "#ff46ff" }}>Node Presence</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {nodes.map((node) => (
              <div
                key={node.name}
                style={cardStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(0,255,255,0.20)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255,0,255,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ fontWeight: 900, fontSize: "1.25rem" }}>{node.name}</div>
                  <StatusPill status={node.status} />
                </div>

                <div style={{ color: "rgba(255,255,255,0.75)", marginBottom: "8px" }}>
                  {node.role}
                </div>
                <div style={{ color: "#9ffcff", fontSize: "0.95rem", marginBottom: "16px" }}>
                  {node.zone}
                </div>

                <MetricBar label="Health Score" value={node.health} color="#ff49f8" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "48px" }}>
          <div style={sectionTitle}>Operator Insight</div>

          <div
            style={{
              ...cardStyle,
              padding: "22px",
              border: "1px solid rgba(0,255,255,0.18)",
              boxShadow: `0 0 ${14 + pulse / 10}px rgba(0,255,255,0.12)`,
            }}
          >
            <div
              style={{
                color: "#ff7dff",
                fontWeight: 800,
                fontSize: "1.05rem",
                marginBottom: "12px",
                letterSpacing: "0.08em",
              }}
            >
              AI SYSTEM NOTE
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75,
                minHeight: "58px",
                transition: "0.3s ease",
              }}
            >
              {insights[insightIndex]}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "48px" }}>
          <div style={{ ...sectionTitle, color: "#fff" }}>Public Security Posture</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "Aliases visible, internal addresses withheld",
              "Public health indicators only",
              "Private controls remain behind secure access",
              "No raw infrastructure endpoints exposed",
            ].map((item) => (
              <div key={item} style={cardStyle}>
                <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
