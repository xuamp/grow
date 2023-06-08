import Contador from "../Contador/Contador";
import "./ItemDetalle.css";

function ItemDetalle(props) {
  const { titulo, valor, foto, descripcion } = props;

  return (
    <div className="ItemDetalle">
      <div className="detalleContenedor">
      <img src={foto} alt="foto" />
      <p>{titulo}</p>
      <p>$ {valor}</p>
      <Contador />
      <button className="boton-compra">Comprar</button>
      <hr className="division"></hr>
      <div className="descripcion">
        <div className="titulodes">Descripcion</div>
        <hr className="division"></hr>
        <div className="cuerpodes">
          <p>
           {descripcion}
          </p>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default ItemDetalle;
