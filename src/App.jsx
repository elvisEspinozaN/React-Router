import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
        </Routes>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
