import { Routes } from "react-router-dom";
import MESHeader from "./components/navigation/MESHeader";
import Footer from "./components/Footer";
import MESStoreMockup from "./MESStoreMockup";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* HEADER */}
      <MESHeader />

      {/* CONTENIDO */}
      <main className="flex-1">
        <Routes>
          {/* tus rutas */}
          {/* o mientras tanto */}
          <MESStoreMockup />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
