import CardM from "../CardM/CardM";
import Home from "../Home/Home";
import Franja from "../franja/Franja";
import "../Principal/Principal.css";
import Muestra from "../Muestra/Muestra";
import Contacto from "../Contacto/Contacto";

function Principal() {
  return (
    <div className="Principal">
      <Home />
      <Franja />
      <div className="Cards">
        <CardM clase={1} imagen={"imagenes/cate1.jpg"} categoria={"Pipas"} />
        <CardM
          clase={1}
          imagen={"imagenes/cate2.jpg"}
          categoria={"Fertilizantes"}
        />
        <CardM clase={2} imagen={"imagenes/cate3.jpg"} categoria={"Pikachus"} />
      </div>
      <Muestra />
      <Contacto />
    </div>
  );
}

export default Principal;
