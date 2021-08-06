import logo from './logo.svg';
import './App.css';

import Header from './sitioweb/Header';
import MenuNav from './sitioweb/MenuNav';
import Carrusel from './sitioweb/Carrusel';
import CardTarjeta from './sitioweb/CardTarjeta';
import Aside from './sitioweb/Aside';
import MapaUbic from './sitioweb/MapaUbic';
import VideoPeli from './sitioweb/VideoPeli';
import PiePag from './sitioweb/PiePag';
function App() {
  return (
   <div className="container">
      <header className="row bg-secondary">
        <Header />
      </header>

      <nav className="row bg-danger">
        <MenuNav />
      </nav>

      <section className="row bg-primary">
        <aside className="col-md-6 bg-warning ps-4">
          <Carrusel />
        </aside>  

        <article className="col-md-3 bg-info">
          <Aside />
        </article>

        <article className="col-md-3 bg-secondary"> 
			    <CardTarjeta />
		    </article>
      
        

        <article className="col-md-9 bg-danger py-3">
          <MapaUbic />
        </article>
      
        <article className="col-md-3 bg-success py-3">
          <VideoPeli />
        </article>
        
        <footer className="row bg-dark text-light ps-5" align="center">
          <PiePag />
	      </footer>
      
      </section>
      
   </div>

  );
}

export default App;