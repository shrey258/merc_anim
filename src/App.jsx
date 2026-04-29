import './App.css'
import { useState } from 'react';

// Apex angle = 45° (= 360°/8) so 8 of these tile a full circle perfectly.
// Base half-width = 90 × tan(22.5°) ≈ 37.28
const HollowObjectShape = () => (
  <g fill="none" stroke="black" strokeWidth="2.5" strokeLinejoin="round">
    <defs>
      <linearGradient id="petalFill" gradientUnits="userSpaceOnUse"
        x1="0" y1="5" x2="0" y2="125">
        <stop offset="0%"   stopColor="#efd5ff" />
        <stop offset="100%" stopColor="#515ada" />
      </linearGradient>
    </defs>
    <polygon points="50,5 87.28,95 12.72,95" />
    <polygon points="12.72,95 87.28,95 70.71,125 29.29,125" />
    <g strokeWidth="1">
      <line x1="50" y1="5" x2="27.632" y2="95" />
      <line x1="50" y1="5" x2="42.544" y2="95" />
      <line x1="50" y1="5" x2="57.456" y2="95" />
      <line x1="50" y1="5" x2="72.368" y2="95" />

      <line x1="27.632" y1="95" x2="37.574" y2="125" />
      <line x1="42.544" y1="95" x2="45.858" y2="125" />
      <line x1="57.456" y1="95" x2="54.142" y2="125" />
      <line x1="72.368" y1="95" x2="62.426" y2="125" />
    </g>
  </g>
);

const Rangoli = ({ count = 8, x = -50 }) => (
  <svg 
  width="500" height="500" viewBox="-200 -200 400 400"
  >
    {Array.from({ length: count }).map((_, i) => (
      <g
        key={i}
        style={{ transition: 'transform 2.8s ease-in-out' }}
        transform={`rotate(${(i * 360) / count}) translate(${x} -5)`}
      >
        <HollowObjectShape />
      </g>
    ))}
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
        style={{ transition: 'transform 2.8s ease-in-out 0.2s', 
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
