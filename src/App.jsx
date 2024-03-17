import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import { Header } from "./componenets/Header";

function App() {
  return (
    <Router>
      <header className="bg-bgLight">
        <Header />
      </header>
      <main className="bg-bgLight">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
