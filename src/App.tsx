import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/Layout";
import AdminDashboard from "./components/AdminDashboard";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import HardwarePage from "./pages/HardwarePage";
import ConsolesPage from "./pages/ConsolesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full p-0 m-0">
        <Routes>
          {/* Public Routes with Shared Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/consoles" element={<ConsolesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>

          {/* Admin Route (No Shared Layout) */}
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
