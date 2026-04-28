import './App.css'

const HollowObject = () => {
  return (
    <div className="container">
      <svg
        width="100"
        height="130"
        viewBox="0 0 100 130"
        className="hollow-shape"
      >
        <polygon
          points="50,5 95,95 5,95"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="5,95 95,95 75,125 25,125"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

function App() {
  return <div className="app">
   
   <svg width="400" height="400" viewBox="0 0 400 400">
      <HollowObject />
   </svg>
     
      <HollowObject />

   
  </div>
}

export default App
