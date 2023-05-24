import { useEffect } from "react";
import ItemDetalle from "../ItemDetalle/ItemDetalle";
import "./DetallePage.css";
import { getDocs, query, where } from "firebase/firestore"
import { productCollection } from "../FirebaseConfig";
import { useParams } from "react-router-dom";

function DetallePage() {

  const { identi } =  useParams();

useEffect(()=> {

  const getProductosC = () => {
    const pedido2 = getDocs(productCollection);

    pedido2.then((res) => {
      const product2 = res.docs.map((doc) => {
        const prod = doc.data();
        prod.id = doc.id;
        return prod;
      });

    const filtrado = product2.filter((res)=> res.id === identi )
    });
  };
})


  return (
    <div className="DetallePage">
     <ItemDetalle />
    </div>
  );
}

export default DetallePage;