import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import Principal from "./Componentes/Principal/Principal";
import ContactoPage from "./Componentes/ContactoPage/ContactoPage";
import DetallePage from "./Componentes/DetallePage/DetallePage";
import ProductosPage from "./Componentes/ProductosPage/ProductosPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/productos/:categoria" element={<ProductosPage />} />
        <Route path="/detalle" element={<DetallePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
