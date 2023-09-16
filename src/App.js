import Home from "./view/home";
import Aboutus from "./view/aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
