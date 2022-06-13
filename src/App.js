import { Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterLists from "./pages/CharacterLists";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterLists />} />
        <Route path="/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
