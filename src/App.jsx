import "./App.css";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Photos from "./components/Photos";
import { Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Diary from "./components/Diary";
import DiaryDetail from "./components/DiaryDetail";

function App() {
  return (
    <main>
      <Navbar />
      {/* <Title title="Home" /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/:date" element={<DiaryDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
