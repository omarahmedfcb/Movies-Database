import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

{
  /* <MovieCard
  movie={{
    title: "No country for old men",
    release_date: "2024",
    url: "https://cdn.displate.com/artwork/857x1200/2024-11-03/ca0bbfbb-9420-4d9e-ab44-064383ce0793.jpg",
  }}
/>; */
}
