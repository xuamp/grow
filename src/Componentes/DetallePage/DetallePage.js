import { useEffect, useState } from "react";
import ItemDetalle from "../ItemDetalle/ItemDetalle";
import "./DetallePage.css";
import { getDocs } from "firebase/firestore";
import { productCollection } from "../FirebaseConfig";
import { useParams } from "react-router-dom";

function DetallePage() {
  const { identi } = useParams();
  const [deta, setDeta] = useState([]);

  useEffect(() => {
    const getProductosC = () => {
      const pedido2 = getDocs(productCollection);

      pedido2.then((res) => {
        const product2 = res.docs.map((doc) => {
          const prod = doc.data();
          prod.id = doc.id;
          return prod;
        });

        const filtrado = product2.filter((res) => res.id === identi);
        setDeta(filtrado);
      });
    };
    getProductosC();
  }, [identi]);

  return (
    <div className="DetallePage">
      {deta.map((res) => (
        <ItemDetalle titulo={res.nombre} valor={res.precio} foto={res.foto} descripcion={res.descripcion} />
      ))}
    </div>
  );
}

export default DetallePage;
