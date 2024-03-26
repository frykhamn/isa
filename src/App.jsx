import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import { Header } from "./componenets/Header";
import TreatmentsPage from "./pages/treatmenst-page/TreatmentsPage";
import WorkshopPage from "./pages/workshop-page/WorkshopPage";
import { SelfCarePage } from "./pages/self-care-page/SelfCarePage";

function App() {
  return (
    <>
      <Router>
        <header className="bg-bgLight">
          <Header />
        </header>
        <main className="bg-bgLight">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/workshops" element={<WorkshopPage />} />
            <Route path="/self-care" element={<SelfCarePage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
