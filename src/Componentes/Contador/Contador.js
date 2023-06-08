import { useState } from "react";
import "../Contador/Contador.css";

function Contador() {
  const [conta, setConta] = useState(1);

  const suma = () => {
    if (conta < 100) {
      setConta(conta + 1);
    } else {
      return null;
    }
  };

  const resta = () => {
    if (conta > 0) {
      setConta(conta - 1);
    } else {
      return null;
    }
  };

  return (
    <div className="Contador">
      <i className="fa-solid fa-minus" onClick={resta}></i>
      <p>{conta}</p>
      <i className="fa-solid fa-plus" onClick={suma}></i>
    </div>
  );
}

export default Contador;
