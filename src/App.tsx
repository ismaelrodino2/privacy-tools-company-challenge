import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Sidebar from "./components/SideNav";

function App() {
  return (
    <div>
      <div className="flex h-screen bg-primary">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
