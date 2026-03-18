const cols = [80, 160, 240, 320, 400, 480, 560, 640, 720];
const rows = [80, 160, 240, 320, 400, 480];

export default function ProjectsBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 560"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Vertical grid lines */}
        {cols.map((x, i) => (
          <line
            key={`v${i}`}
            x1={x}
            y1="0"
            x2={x}
            y2="560"
            stroke="#ef4444"
            strokeWidth="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.04;0.18;0.04"
              dur={`${2.5 + i * 0.35}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Horizontal grid lines */}
        {rows.map((y, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="#ef4444"
            strokeWidth="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.04;0.18;0.04"
              dur={`${2 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Intersection dots with staggered pulse */}
        {cols.flatMap((x, xi) =>
          rows.map((y, yi) => (
            <circle key={`d${xi}-${yi}`} cx={x} cy={y} r="2.5" fill="#ef4444">
              <animate
                attributeName="opacity"
                values="0;0.5;0"
                dur={`${1.8 + ((xi + yi) % 5) * 0.4}s`}
                begin={`${((xi * rows.length + yi) % 8) * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="1;3;1"
                dur={`${1.8 + ((xi + yi) % 5) * 0.4}s`}
                begin={`${((xi * rows.length + yi) % 8) * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          )),
        )}

        {/* Random travelling pulse along one row */}
        <circle r="3" fill="#ef4444" opacity="0.7">
          <animateMotion
            path="M 0,160 L 800,160"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            keyTimes="0;0.05;0.95;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="3" fill="#7c3aed" opacity="0.7">
          <animateMotion
            path="M 800,400 L 0,400"
            dur="5s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            keyTimes="0;0.05;0.95;1"
            dur="5s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
