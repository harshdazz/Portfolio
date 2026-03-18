const nodes = [
  { x: 12, y: 18 },
  { x: 78, y: 12 },
  { x: 48, y: 38 },
  { x: 88, y: 52 },
  { x: 18, y: 68 },
  { x: 62, y: 72 },
  { x: 33, y: 88 },
  { x: 74, y: 88 },
  { x: 8, y: 44 },
  { x: 54, y: 8 },
  { x: 92, y: 28 },
  { x: 42, y: 58 },
];

const edges = [
  [0, 2],
  [1, 2],
  [1, 10],
  [2, 3],
  [2, 11],
  [3, 10],
  [4, 8],
  [4, 6],
  [5, 6],
  [5, 7],
  [5, 11],
  [8, 0],
  [9, 1],
  [9, 2],
  [11, 3],
];

export default function AboutBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#7c3aed"
            strokeWidth="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.45;0.1"
              dur={`${3.5 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            {/* Outer glow ring */}
            <circle
              cx={n.x}
              cy={n.y}
              r="1.8"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.4;0.1"
                dur={`${4 + i * 0.6}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="1.8;2.8;1.8"
                dur={`${4 + i * 0.6}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Core dot */}
            <circle cx={n.x} cy={n.y} r="0.8" fill="#a78bfa">
              <animate
                attributeName="cy"
                values={`${n.y};${n.y - 2.5};${n.y}`}
                dur={`${5 + i * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                values={`${n.x};${n.x + 1.5};${n.x}`}
                dur={`${6 + i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
