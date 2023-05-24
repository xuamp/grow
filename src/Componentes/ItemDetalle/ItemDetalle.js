import "./ItemDetalle.css";

function ItemDetalle(props) {
  return (
    <div className="ItemDetalle">
      <img src="" alt="" />
      <p>Titulo</p>
      <p>Valor</p>
      <button>Comprar</button>
      <div className="descripcion">
        <div className="descripcion titulo">Descripcion</div>
        <div className="descripcion cuerpo">
          <p>Desciprcion</p>
          <p>
            Este es el cuerpo de la descirpcion donde vamos a escribir todas las
            caracteristicas de los productos que nos encargamos de comercializar
            en este local, desde ya muchas gracias
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetalle;
