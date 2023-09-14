import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1">
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="movie/:movieId" element={<Movie />} />

           </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
