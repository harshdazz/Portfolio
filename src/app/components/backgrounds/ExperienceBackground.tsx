const streaks = [
  { x: 4, delay: 0, dur: 3.2, opacity: 0.5 },
  { x: 12, delay: 1.4, dur: 4.1, opacity: 0.3 },
  { x: 21, delay: 0.6, dur: 2.8, opacity: 0.6 },
  { x: 30, delay: 2.1, dur: 3.6, opacity: 0.4 },
  { x: 39, delay: 0.3, dur: 4.4, opacity: 0.5 },
  { x: 48, delay: 1.8, dur: 3.0, opacity: 0.3 },
  { x: 57, delay: 0.9, dur: 2.5, opacity: 0.6 },
  { x: 66, delay: 2.5, dur: 3.8, opacity: 0.4 },
  { x: 75, delay: 0.5, dur: 4.2, opacity: 0.5 },
  { x: 83, delay: 1.2, dur: 3.3, opacity: 0.3 },
  { x: 91, delay: 2.8, dur: 2.9, opacity: 0.5 },
  { x: 97, delay: 0.7, dur: 3.7, opacity: 0.4 },
];

export default function ExperienceBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {streaks.map((s, i) => (
        <div
          key={i}
          className="absolute top-0 w-px"
          style={{
            left: `${s.x}%`,
            height: "35%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(34,211,238,0.6) 40%, rgba(34,211,238,0.8) 60%, transparent 100%)",
            animation: `codeRain ${s.dur}s ${s.delay}s ease-in-out infinite`,
            opacity: s.opacity,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Horizontal scan line that slowly sweeps */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(34,211,238,0.15), transparent)",
          animation: "codeRain 8s 0s linear infinite",
          height: "1px",
          top: 0,
        }}
      />
    </div>
  );
}
