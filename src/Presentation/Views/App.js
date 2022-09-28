import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistList from "../Views/HomeView/ArtistList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ArtistList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
