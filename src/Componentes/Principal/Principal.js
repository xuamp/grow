import CardM from "../CardM/CardM";
import Home from "../Home/Home";
import Franja from "../franja/Franja";
import "../Principal/Principal.css"
import Muestra from "../Muestra/Muestra";
import Contacto from "../Contacto/Contacto";

function Principal() {
  return (
    <div className="Principal">
      <Home />
      <Franja />
      <div className="Cards">
        <CardM clase={1} imagen={"imagenes/cate1.jpg"}/>
        <CardM clase={1} imagen={"imagenes/cate2.jpg"}/>
        <CardM clase={2} imagen={"imagenes/cate3.jpg"}/>
      </div>
      <Muestra />
      <Contacto />
    </div>
  );
}

export default Principal;
