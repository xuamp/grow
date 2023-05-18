import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import Principal from "./Componentes/Principal/Principal";
import ContactoPage from "./Componentes/ContactoPage/ContactoPage";
import TiendaPage from "./Componentes/TiengaPage/TiendaPage";
import DetallePage from "./Componentes/DetallePage/DetallePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/productos" element={<TiendaPage />} />
        <Route path="/detalle" element={<DetallePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
