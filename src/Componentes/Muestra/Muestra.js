import { useState } from "react";
import CardM from "../CardM/CardM";
import { Mercaderia } from "../Mercaderia";
import "./Muestra.css";
import { useEffect } from "react";

function Muestra() {
  const [prod, setProd] = useState([]);
  const [carga, setCarga] = useState(false);
  useEffect(() => {
    const aux = [...Mercaderia];
    setProd(aux);
    setCarga(true);
  }, []);

  return (
    <div className="Muestra">
      <p>Nuestros Productos</p>
      {carga ? (
        <div className="scroll-x">
          <CardM
            clase={1}
            imagen={prod[0].foto}
            categoria={prod[0].categoria}
          />
          <CardM
            clase={1}
            imagen={prod[0].foto}
            categoria={prod[0].categoria}
          />
          <CardM
            clase={1}
            imagen={prod[0].foto}
            categoria={prod[0].categoria}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Muestra;
