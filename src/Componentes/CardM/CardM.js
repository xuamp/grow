import "./CardM.css";
import { Link } from "react-router-dom";

function CardM(props) {
  const { clase, imagen, categoria, nombre, detalle, id, precio } = props;



  return (
    <div className={`CardM` + clase}>
      <img src={imagen} alt="cate" />
      <p>{nombre}</p>
      <p>{precio}</p>
      <p>{categoria}</p>
      {detalle ? (
        <Link to={`/detalle/${id}`}>
          <button className="boton-vermas">Detalle</button>
        </Link>
      ) : (
        <Link to={`/productos/${categoria}`}>
          <button className="boton-vermas">Ver Mas</button>
        </Link>
      )}
    </div>
  );
}

export default CardM;
