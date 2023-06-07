import "./ItemDetalle.css";

function ItemDetalle(props) {
  const { titulo, valor, foto, descripcion } = props;

  return (
    <div className="ItemDetalle">
      <div className="detalleContenedor">
      <img src={foto} alt="foto" />
      <p>{titulo}</p>
      <p>{valor}</p>
      <button>Comprar</button>
      <div className="descripcion">
        <div className="descripcion titulo">Descripcion</div>
        <div className="descripcion cuerpo">
          <p>
           {descripcion}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ItemDetalle;
