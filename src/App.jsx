import './App.css'
import { useState } from 'react';

// Apex angle = 45° (= 360°/8) so 8 of these tile a full circle perfectly.
// Base half-width = 90 × tan(22.5°) ≈ 37.28
const HollowObjectShape = () => (
  <g fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round">
    <polygon points="50,5 87.28,95 12.72,95" />
    <polygon points="12.72,95 87.28,95 70.71,125 29.29,125" />
  </g>
);

const HollowObject = () => (
  <svg width="100" height="130" viewBox="0 0 100 130" className="hollow-shape">
    <HollowObjectShape />
  </svg>
);

const Rangoli = ({ count = 8, x = -50 }) => (
  <svg 
  width="500" height="500" viewBox="-200 -200 400 400"
  >
    {Array.from({ length: count }).map((_, i) => (
      <g
        key={i}
        style={{ transition: 'transform 7s ease-in-out' }}
        transform={`rotate(${(i * 360) / count}) translate(${x} -5)`}
      >
        <HollowObjectShape />
      </g>
    ))}
  </svg>
);

function App() {
  const [hovered, setHovered] = useState(false);
  const x = hovered ? 80 : -50;
  const rotation = hovered ? 120 : 0;

  return (
    <div className="app">
      <div
        className="rangoli-container"
        style={{ transition: 'transform 7s ease-in-out', 
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
