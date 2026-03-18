const rings = [
  {
    size: 280,
    color: "rgba(124, 58, 237, 0.12)",
    dotColor: "#7c3aed",
    dotGlow: "#7c3aed",
    duration: "22s",
    reverse: false,
    dots: [{ top: true }, { bottom: true }],
  },
  {
    size: 460,
    color: "rgba(6, 182, 212, 0.08)",
    dotColor: "#06b6d4",
    dotGlow: "#06b6d4",
    duration: "36s",
    reverse: true,
    dots: [{ top: true }, { right: true }],
  },
  {
    size: 640,
    color: "rgba(239, 68, 68, 0.06)",
    dotColor: "#ef4444",
    dotGlow: "#ef4444",
    duration: "52s",
    reverse: false,
    dots: [{ top: true }],
  },
];

export default function SkillsBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {rings.map((ring, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: ring.size,
              height: ring.size,
              marginLeft: -ring.size / 2,
              marginTop: -ring.size / 2,
              borderColor: ring.color,
              animation: `spin ${ring.duration} linear infinite ${ring.reverse ? "reverse" : ""}`,
            }}
          >
            {/* Top dot */}
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: -4,
                left: "50%",
                marginLeft: -4,
                backgroundColor: ring.dotColor,
                boxShadow: `0 0 10px 3px ${ring.dotGlow}55`,
              }}
            />
            {/* Bottom dot (some rings) */}
            {ring.dots.length > 1 && (
              <div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  bottom: -3,
                  left: "50%",
                  marginLeft: -3,
                  backgroundColor: ring.dotColor,
                  boxShadow: `0 0 8px 2px ${ring.dotGlow}44`,
                }}
              />
            )}
            {/* Right dot (some rings) */}
            {ring.dots.some((d) => "right" in d) && (
              <div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  right: -3,
                  top: "50%",
                  marginTop: -3,
                  backgroundColor: ring.dotColor,
                  boxShadow: `0 0 8px 2px ${ring.dotGlow}44`,
                }}
              />
            )}
          </div>
        ))}

        {/* Center pulse */}
        <div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            background: "radial-gradient(circle, #a78bfa, transparent)",
            animation: "contactRipple 3s ease-out infinite",
          }}
        />
      </div>
    </div>
  );
}
