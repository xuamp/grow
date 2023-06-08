import ItemCarrito from "../ItemCarrito/ItemCarrito";
import "../PageCarrito/PageCarrito.css"

function PageCarrito() {
  return (
    <div className="PageCarrito">
        <p>Su Carrito</p>
        <ItemCarrito />
        <button>Vaciar</button>
        <p>Total</p>
        <button>Finalizar Compra</button>
    </div>
  );
}

export default PageCarrito;
