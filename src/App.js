import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
