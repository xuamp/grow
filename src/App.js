import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import PageCarrito from "./Componentes/PageCarrito/PageCarrito";
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
          <Route path="/productos/:catego" element={<ProductosPage />} />
          <Route path="/detalle/:identi" element={<DetallePage />} />
          <Route path="/carrito" element={<PageCarrito />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
