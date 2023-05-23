import { useEffect, useState } from "react";
import "./ProductosPage.css";
import { productCollection } from "../FirebaseConfig";
import { getDocs, query, where } from "firebase/firestore";
import CardM from "../CardM/CardM";
import { useParams } from "react-router-dom";

function ProductosPage() {
  const [lista, setLista] = useState([]);

  const { catego } = useParams();

  useEffect(() => {
    const getProductosF = () => {
      const aux = query(productCollection, where("categoria", "==", catego));
      const pedido = getDocs(aux);

      pedido.then((res) => {
        const product = res.docs.map((doc) => {
          const prod = doc.data();
          prod.id = doc.id;
          return prod;
        });
        setLista(product);
      });
    };

    const getProductosC = () => {
      const pedido2 = getDocs(productCollection);

      pedido2.then((res) => {
        const product2 = res.docs.map((doc) => {
          const prod = doc.data();
          prod.id = doc.id;
          return prod;
        });
        setLista(product2);
      });
    };

    catego ? getProductosF() : getProductosC();
  }, [catego]);

  return (
    <div className="ProductosPage">
      <p>Nuestros Productos</p>
      {lista.map((doc) => (
        <CardM categoria={doc.categoria} imagen={doc.foto} clase={2} detalle={"si"} precio={doc.precio} id={doc.id}/>
      ))}
    </div>
  );
}

export default ProductosPage;
