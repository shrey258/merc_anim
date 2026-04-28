import './App.css'
import { useState } from 'react';

function App() {
  const [hovered, setHovered] = useState(false);

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

  const Rangoli = ({ count = 8 }) => (
    <svg width="400" height="400" viewBox="-150 -150 300 300">
      {Array.from({ length: count }).map((_, i) => (
        <g key={i} transform={`rotate(${(i * 360) / count}) translate(-50 -5)`}>
          <HollowObjectShape />
        </g>
      ))}
    </svg>
  );


  return (
    <div className="app">
      <Rangoli count={8} />

      <button onClick={() => setHovered(!hovered)}>Click Me</button>
    </div>
  );
}

export default App
