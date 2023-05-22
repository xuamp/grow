import { useEffect, useState } from "react";
import "./ProductosPage.css";
import { productCollection } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";
import CardM from "../CardM/CardM";
import { useParams } from "react-router-dom";

function ProductosPage() {
  const [lista, setLista] = useState([]);

  const valor = useParams();

  useEffect(() => {
    const pedido = getDocs(productCollection);

    pedido.then((res) => {
      const product = res.docs.map((doc) => {
        const prod = doc.data();
        prod.id = doc.id;
        return prod;
      });
      setLista(product);
    }); 
  }, []);

  return (
    <div className="ProductosPage">
      <p>Nuestros Productos</p>
      {lista.map((doc) => (
        <CardM categoria={doc.categoria} imagen={doc.foto} clase={2} />
      ))}
    </div>
  );
}

export default ProductosPage;
