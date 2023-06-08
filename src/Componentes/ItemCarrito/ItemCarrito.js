import "./ItemCarrito.css";

function ItemCarrito() {
  return (
    <div className="ItemCarrito">
      <div className="ItemCarrito-img">
        <img src="imagenes/logo-trans.png" className="fito" alt="totot"></img>
      </div>
      <div className="ItemCarrito-datos">
        <p>Pikachu</p>
        <p>Cantidad: 5</p>
        <p>Precio U.: $ 800</p>
        <p>Total: $ 3.600</p>
        <button>
          <i class="fa-solid fa-trash-can"></i>
        </button>{" "}
      </div>
    </div>
  );
}

export default ItemCarrito;
