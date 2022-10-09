import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistList from "./HomeView/HomeView";
import { Provider } from "react-redux";
import store from "../../Data/Store/index";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ArtistList />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
