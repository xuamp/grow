import { useState } from "react";
import CardM from "../CardM/CardM";
import "./Muestra.css";
import { productCollection } from "../FirebaseConfig";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";

function Muestra() {
  const [prod, setProd] = useState([]);
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    const getProductosC = () => {
      const pedido2 = getDocs(productCollection);

      pedido2.then((res) => {
        const product2 = res.docs.map((doc) => {
          const produ = doc.data();
          produ.id = doc.id;
          return produ;
        });
        setProd(product2);
      });
    };
    getProductosC();
    setCarga(true);
  }, []);

  return (
    <div className="Muestra">
      <p>Nuestros Productos</p>
      {carga ? (
        <div className="scroll-x">
          {prod.map((res) => (
            <CardM clase={1} imagen={res.foto} categoria={res.categoria} />
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Muestra;
