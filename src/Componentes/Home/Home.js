import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Home-img">
        <img src="imagenes/logo-trans.png" alt="fotito" className="logo"/>
        <p>DE UN AMOR GROWSHOP</p>
        <div className="redes">
        <a href="#"><img src="imagenes/wa.png" alt="whats" className="whats"/></a>
       <a href="#"> <img src="imagenes/insta.png" alt="insta" className="whats"/></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
