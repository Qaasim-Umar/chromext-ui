import Home from "./pages/Home";
import Extension from './pages/Extension'
import "./App.css";
import Video from "./pages/Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./pages/Sign";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Extension" element={<Extension/>} />
          <Route exact path="Video" element={<Video />} />
          <Route exact path="Sign" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
