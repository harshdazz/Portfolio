const ripples = [
  { delay: "0s", size: 100, color: "rgba(239,68,68,0.25)" },
  { delay: "0.9s", size: 200, color: "rgba(239,68,68,0.18)" },
  { delay: "1.8s", size: 300, color: "rgba(239,68,68,0.12)" },
  { delay: "2.7s", size: 400, color: "rgba(239,68,68,0.07)" },
  { delay: "3.6s", size: 500, color: "rgba(124,58,237,0.06)" },
];

export default function ContactBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Ripple rings from center */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {ripples.map((r, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: r.size,
              height: r.size,
              marginLeft: -r.size / 2,
              marginTop: -r.size / 2,
              borderColor: r.color,
              borderWidth: 1,
              animation: `contactRipple 4.5s ${r.delay} ease-out infinite`,
            }}
          />
        ))}

        {/* Static faint rings beneath */}
        {[200, 380, 560].map((size, i) => (
          <div
            key={`static-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              border: "1px dashed rgba(239,68,68,0.07)",
            }}
          />
        ))}
      </div>

      {/* Floating signal dots */}
      {[
        { x: "15%", y: "20%", delay: "0s" },
        { x: "80%", y: "15%", delay: "1.2s" },
        { x: "75%", y: "75%", delay: "2.4s" },
        { x: "20%", y: "80%", delay: "0.6s" },
      ].map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
          style={{
            left: dot.x,
            top: dot.y,
            animation: `contactRipple 3s ${dot.delay} ease-out infinite`,
            boxShadow: "0 0 6px 2px rgba(239,68,68,0.4)",
          }}
        />
      ))}
    </div>
  );
}
