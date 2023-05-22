import "./CardM.css";
import { Link } from "react-router-dom"

function CardM(props) {

  const { clase, imagen, categoria } = props
  return (
    <div className={`CardM` + clase}>
        <img src={imagen} alt="cate" />
        <p>{categoria}</p>
        <Link to={`/productos/${categoria}`}><button>Ver Mas</button></Link>
    </div>
  );
}

export default CardM;
