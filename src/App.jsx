import './App.css'
import { useState } from 'react';

// Apex angle = 45° (= 360°/8) so 8 of these tile a full circle perfectly.
// Base half-width = 90 × tan(22.5°) ≈ 37.28
const HollowObjectShape = () => (
  <g stroke="none" strokeWidth="2.5" strokeLinejoin="round">
    <path
      d="M 53.06 12.39
         L 84.22 87.61 Q 87.28 95 83.41 102
         L 74.58 118   Q 70.71 125 62.71 125
         L 37.29 125   Q 29.29 125 25.42 118
         L 16.59 102   Q 12.72 95 15.78 87.61
         L 46.94 12.39 Q 50 5 53.06 12.39 Z"
      fill="url(#petalFill)"
      filter="url(#innerGlow)"
    />
  </g>
);

// Lives at world origin (the Rangoli's center). Each petal renders its own
// copy, but inverse-transformed so the slices line up when converged.
// const Pattern = () => (
//   <g pointerEvents="none" stroke="#111" fill="none" strokeWidth="11">
//     <line x1="0" y1="0" x2="0" y2="-85" />
//     <line x1="0" y1="0" x2="73.61" y2="42.5" />
//     <line x1="0" y1="0" x2="-73.61" y2="42.5" />
//   </g>
// );

const Rangoli = ({ count = 8, x = -50 }) => (
  <svg
    width="500" height="500" viewBox="-200 -200 400 400"
  >
    <defs>
      <clipPath id="petalClip">
        <polygon points="50,5 87.28,95 12.72,95" />
      </clipPath>
      <linearGradient id="petalFill" gradientUnits="userSpaceOnUse"
        x1="0" y1="5" x2="0" y2="125">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#FFB877" />
        <stop offset="100%" stopColor="#FF7A2E" />
      </linearGradient>
      <filter id="innerGlow">
        <feFlood floodColor="white" floodOpacity="1" />
        <feComposite in2="SourceAlpha" operator="out" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feComposite in2="SourceGraphic" operator="over" />
      </filter>
    </defs>
    {Array.from({ length: count }).map((_, i) => {
      const angle = ((i * 360) / count) +22.5; // 30° offset for better aesthetics
      return (
        <g
          key={i}
          style={{ transition: 'transform 2.8s ease-in-out' }}
          transform={`rotate(${angle}) translate(${x} -5)`}
        >
          {/* <g clipPath="url(#petalClip)">
            <g transform={`translate(50 5) rotate(${-angle})`}>
              <Pattern />
            </g>
          </g> */}
          <HollowObjectShape />
        </g>
      );
    })}
  </svg>
);

function App() {
  const [hovered, setHovered] = useState(false);
  const x = hovered ? 70 : -50;
  const rotation = hovered ? 120 : 0;

  return (
    <div className="app">
      <div
        className="rangoli-container"
        style={{
          transition: 'transform 2.8s ease-in-out 0.2s',
          transform: `rotate(${rotation}deg)`
        }}
      >
        <Rangoli count={8} x={x} />
      </div>
      <button onClick={() => setHovered(!hovered)}>Click Me</button>
    </div>
  );
}

export default App
