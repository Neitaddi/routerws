import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBare from "./NavBar/NavBare";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Confirmation from "./Components/Confirmation/Confirmation";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <NavBare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
