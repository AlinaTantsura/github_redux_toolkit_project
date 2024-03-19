import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/favorites" element={< FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
